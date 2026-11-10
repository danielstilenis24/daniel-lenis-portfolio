import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: string;
  serviceInterest?: string;
  message: string;
  website_hp?: string; // Honeypot field
  formLoadedAt?: number; // Anti-bot timing check
}

// Simple in-memory rate limiter per IP
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown-ip';

    const now = Date.now();
    const rateRecord = rateLimitMap.get(ip);

    if (rateRecord && now - rateRecord.timestamp < RATE_LIMIT_WINDOW_MS) {
      if (rateRecord.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            ok: false,
            code: 'RATE_LIMITED',
            message:
              'Has realizado demasiados intentos en poco tiempo. Por favor espera un minuto antes de volver a intentar.',
          },
          { status: 429 }
        );
      }
      rateRecord.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    // 1. Anti-Spam Honeypot Check
    if (body.website_hp && body.website_hp.trim().length > 0) {
      return NextResponse.json(
        {
          ok: false,
          code: 'SPAM_DETECTED',
          message: 'Solicitud bloqueada por el filtro anti-spam.',
        },
        { status: 400 }
      );
    }

    // 2. Anti-Bot Minimum Fill Time Check (1.2 seconds)
    if (
      typeof body.formLoadedAt === 'number' &&
      now - body.formLoadedAt < 1200
    ) {
      return NextResponse.json(
        {
          ok: false,
          code: 'BOT_TIMING_DETECTED',
          message:
            'El envío fue procesado demasiado rápido. Por favor verifica los datos e intenta nuevamente.',
        },
        { status: 400 }
      );
    }

    // 3. Field Validation
    const name = (body.name ?? '').trim();
    const email = (body.email ?? '').trim();
    const organization = (body.organization ?? '').trim();
    const inquiryType = (body.inquiryType ?? '').trim();
    const serviceInterest = (body.serviceInterest ?? '').trim();
    const message = (body.message ?? '').trim();

    const fieldErrors: Record<string, string> = {};

    if (name.length < 2) {
      fieldErrors.name = 'Por favor ingresa tu nombre completo (mínimo 2 caracteres).';
    }
    if (!isValidEmail(email)) {
      fieldErrors.email = 'Por favor ingresa un correo electrónico válido.';
    }
    if (!inquiryType) {
      fieldErrors.inquiryType = 'Selecciona la modalidad de contacto.';
    }
    if (message.length < 20) {
      fieldErrors.message =
        'Por favor describe tu proyecto, requerimiento o consulta con al menos 20 caracteres.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          code: 'VALIDATION_ERROR',
          message: 'Revisa los campos marcados en el formulario.',
          fieldErrors,
        },
        { status: 422 }
      );
    }

    // 4. Real Delivery Integration Check (Webhook n8n / Make / Power Automate or Resend API)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    // Option A: Dispatch to Webhook (e.g., n8n workflow)
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.CONTACT_WEBHOOK_SECRET
            ? { 'X-Webhook-Secret': process.env.CONTACT_WEBHOOK_SECRET }
            : {}),
        },
        body: JSON.stringify({
          source: 'daniel-lenis-portfolio',
          timestamp: new Date().toISOString(),
          name,
          email,
          organization,
          inquiryType,
          serviceInterest,
          message,
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            code: 'WEBHOOK_DELIVERY_FAILED',
            message:
              'El endpoint de Webhook configurado devolvió un error al procesar el mensaje.',
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          ok: true,
          code: 'DELIVERED_VIA_WEBHOOK',
          message:
            'Mensaje enviado exitosamente al flujo de recepción automatizado.',
        },
        { status: 200 }
      );
    }

    // Option B: Dispatch via Resend Email API
    if (resendApiKey && receiverEmail) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portafolio Daniel Lenis <onboarding@resend.dev>',
          to: [receiverEmail],
          reply_to: email,
          subject: `[Portafolio - ${inquiryType}] Nuevo mensaje de ${name}`,
          text: `Nombre: ${name}\nEmail: ${email}\nOrganización: ${organization || 'No especificada'}\nTipo: ${inquiryType}\nServicio: ${serviceInterest || 'General'}\n\nMensaje:\n${message}`,
        }),
      });

      if (!resendResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            code: 'EMAIL_API_FAILED',
            message: 'Error al despachar el correo mediante el proveedor configurado.',
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          ok: true,
          code: 'DELIVERED_VIA_EMAIL_API',
          message: 'Tu mensaje ha sido enviado directamente al correo de Daniel Lenis.',
        },
        { status: 200 }
      );
    }

    // No live integration configured yet: DO NOT simulate fake success!
    return NextResponse.json(
      {
        ok: false,
        code: 'INTEGRATION_NOT_CONFIGURED',
        message:
          'Validación completada correctamente, pero el envío en servidor aún requiere configurar la variable de entorno CONTACT_WEBHOOK_URL (ej. Webhook de n8n) o RESEND_API_KEY + CONTACT_RECEIVER_EMAIL en .env.local.',
        missingConfig: [
          'CONTACT_WEBHOOK_URL (Recomendado: URL de Webhook de n8n / Power Automate)',
          'Alternativa: RESEND_API_KEY + CONTACT_RECEIVER_EMAIL',
        ],
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: 'INTERNAL_ERROR',
        message: 'Ocurrió un error inesperado al procesar la solicitud.',
      },
      { status: 500 }
    );
  }
}
