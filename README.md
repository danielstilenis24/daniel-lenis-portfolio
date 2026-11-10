# Portafolio Profesional — Daniel Lenis (`AI Automation & Data Engineer`)

> **"Transformo procesos complejos en soluciones inteligentes."**

Portafolio profesional de última generación desarrollado a medida para **Daniel Lenis**, Ingeniero de Sistemas especializado en el desarrollo de soluciones empresariales mediante **Inteligencia Artificial**, **Automatización de Procesos**, **Integración de Sistemas** e **Ingeniería de Datos**.

---

## 1. Dirección Artística y Experiencia Visual

El sitio implementa una dirección visual **Dark Premium Tech** inspirada en arquitecturas de sistemas en vivo, combinando minimalismo tecnológico, diseño editorial asimétrico y diagramas interactivos de flujo de datos:

- **Paleta cromática:**
  - Fondo principal Obsidian: `#080D18`
  - Superficies técnicas: `#0D1526` / `#111B2C`
  - Azul eléctrico: `#3B82F6`
  - Cian tecnológico: `#22D3EE`
  - Blanco nítido: `#F8FAFC`
  - Gris técnico: `#94A3B8`
- **Tipografía protagonista:**
  - `Space Grotesk` para titulares y jerarquía editorial.
  - `Inter` para lectura fluida de especificaciones y casos de estudio.
  - `JetBrains Mono` para coordenadas, protocolos, capas de arquitectura y etiquetas técnicas.
- **Accesibilidad y Rendimiento:**
  - Soporte nativo para `prefers-reduced-motion` (tanto en CSS como mediante hooks de `framer-motion`).
  - Navegación por teclado con anillos de foco visibles (`focus-visible`), enlace `Saltar al contenido principal` y atributos ARIA semánticos.

---

## 2. Stack Tecnológico y Arquitectura

- **Framework:** Next.js 14 (App Router, Server & Client Components, compilación `standalone` para Docker).
- **Lenguaje:** TypeScript con tipado estricto (`strict: true`).
- **Estilos:** Tailwind CSS con tokens de diseño personalizados.
- **Interactividad y Animaciones:** Framer Motion (`framer-motion`) y gráficos vectoriales SVG interactivos.
- **Iconografía:** Lucide Icons (`lucide-react`).
- **SEO Técnico:** Metadatos dinámicos por ruta, Open Graph, JSON-LD (`Schema.org/Person`), `sitemap.xml` y `robots.txt` generados dinámicamente.

### Estructura del Proyecto

```text
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts       # Endpoint de contacto con validación, anti-spam y despacho real (Webhook/Resend)
│   │   ├── proyectos/[slug]/page.tsx  # Páginas estáticas de detalle de cada proyecto (SSG)
│   │   ├── globals.css                # Sistema visual Dark Premium Tech y soporte reduced-motion
│   │   ├── layout.tsx                 # Layout raíz, fuentes optimizadas y JSON-LD SEO
│   │   ├── page.tsx                   # Página principal con todas las secciones integradas
│   │   ├── sitemap.ts                 # Sitemap XML dinámico
│   │   └── robots.ts                  # Reglas de indexación
│   ├── components/
│   │   ├── layout/                    # Navbar interactivo con indicador de sección activa y Footer
│   │   ├── sections/                  # Secciones modulares (Hero, About, Specialties, Projects, Ecosystem, Experience, Services, Contact)
│   │   └── ui/                        # Componentes base reutilizables (SectionHeader)
│   ├── config/
│   │   └── site.ts                    # Configuración centralizada (enlaces, placeholders explícitos y SEO)
│   ├── content/
│   │   ├── projects.ts                # Catálogo desacoplado de los 5 proyectos reales (preparado para i18n es/en)
│   │   └── portfolio-data.ts          # Datos estructurados de especialidades, ecosistema tecnológico, experiencia y consultoría
│   ├── lib/
│   │   └── utils.ts                   # Utilidades de clases
│   └── types/
│       └── portfolio.ts               # Esquemas e interfaces estrictas de TypeScript
├── Dockerfile                         # Imagen multi-stage optimizada para producción
├── docker-compose.yml                 # Orquestación lista para despliegue en contenedor
└── .env.example                       # Plantilla de variables de entorno
```

---

## 3. Gestión de Contenido y Actualización de Placeholders

El contenido está **100% desacoplado de los componentes visuales** para permitir actualizaciones inmediatas sin tocar la interfaz:

1. **Actualizar enlaces de contacto (LinkedIn, GitHub, Correo):**
   Edita [`src/config/site.ts`](./src/config/site.ts) en el bloque `contact`.
2. **Agregar o editar proyectos:**
   Edita [`src/content/projects.ts`](./src/content/projects.ts). Cada objeto cumple la interfaz `Project` definida en [`src/types/portfolio.ts`](./src/types/portfolio.ts) y genera automáticamente su tarjeta en el catálogo, su ruta en `/proyectos/[slug]` y su entrada en `/sitemap.xml`.
3. **Actualizar empresas o fechas en la línea de tiempo de experiencia:**
   Edita `experienceTimeline` en [`src/content/portfolio-data.ts`](./src/content/portfolio-data.ts). Los campos provisionales están claramente identificados con `[EDITABLE EN src/content/portfolio-data.ts]`.

---

## 4. Configuración del Formulario de Contacto en Producción

El formulario (`/api/contact`) incluye validación en cliente y servidor, campo *honeypot*, validación de tiempo mínimo de llenado contra bots y límite de peticiones por IP. **No simula envíos falsos.**

Para activar el despacho en vivo, crea un archivo `.env.local` basado en `.env.example` y configura una de las dos opciones:

- **Opción A — Webhook de n8n / Power Automate (Recomendada):**
  ```env
  CONTACT_WEBHOOK_URL="https://tu-instancia-n8n.com/webhook/contacto-portafolio"
  CONTACT_WEBHOOK_SECRET="tu-token-opcional"
  ```
- **Opción B — Resend Email API:**
  ```env
  RESEND_API_KEY="re_xxxxxxxxxxxx"
  CONTACT_RECEIVER_EMAIL="tu-correo@dominio.com"
  ```

Si ninguna variable está definida aún, el formulario valida todos los datos y muestra un aviso transparente indicando qué variable falta configurar, ofreciendo además un botón directo `mailto:` con el mensaje pre-cargado.

---

## 5. Instalación, Desarrollo y Compilación Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo (http://localhost:3000)
npm run dev

# 3. Verificar tipos de TypeScript
npm run typecheck

# 4. Ejecutar linter
npm run lint

# 5. Compilar para producción
npm run build

# 6. Iniciar servidor de producción
npm run start
```

---

## 6. Despliegue con Docker

El proyecto está configurado con `output: 'standalone'` en `next.config.mjs` y cuenta con un `Dockerfile` multi-etapa ligero basado en `node:20-alpine`.

```bash
# Construir y levantar con Docker Compose
docker compose up -d --build
```

La aplicación quedará disponible en `http://localhost:3000`.
