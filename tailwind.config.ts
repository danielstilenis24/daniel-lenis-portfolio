import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#080D18',
          deep: '#050911',
          surface: '#0D1526',
          card: '#111B2C',
          elevated: '#162238',
          border: '#1E293B',
        },
        brand: {
          blue: '#3B82F6',
          blueGlow: '#2563EB',
          cyan: '#22D3EE',
          cyanGlow: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'radial-spotlight':
          'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.14) 0%, rgba(34, 211, 238, 0.05) 35%, rgba(8, 13, 24, 0) 70%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 50%, rgba(34,211,238,0.03) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(34, 211, 238, 0.22)',
        'panel': '0 20px 50px -15px rgba(2, 6, 23, 0.75)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
