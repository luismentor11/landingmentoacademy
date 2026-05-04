import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mento: {
          primary: '#2E4A6B',
          'primary-dark': '#1F3450',
          accent: '#7E3A5F',
          cta: '#C5577A',
          'cta-hover': '#D96B8E',
          bg: '#0B1827',
          surface: '#162539',
          elevated: '#15263B',
          text: '#E8ECF1',
          muted: '#8A9BB0',
          'light-bg': '#F8F6F4',
          'light-text': '#2E4A6B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display':   ['72px', { lineHeight: '1.05', letterSpacing: '-2px',   fontWeight: '800' }],
        'h1':        ['48px', { lineHeight: '1.1',  letterSpacing: '-1.5px', fontWeight: '800' }],
        'h2':        ['32px', { lineHeight: '1.2',  letterSpacing: '-1px',   fontWeight: '700' }],
        'h3':        ['24px', { lineHeight: '1.3',  letterSpacing: '-0.5px', fontWeight: '700' }],
        'body-lg':   ['18px', { lineHeight: '1.6',  letterSpacing: '0',      fontWeight: '400' }],
        'body':      ['15px', { lineHeight: '1.5',  letterSpacing: '0',      fontWeight: '400' }],
        'caption':   ['12px', { lineHeight: '1.4',  letterSpacing: '0',      fontWeight: '400' }],
        'label':     ['11px', { lineHeight: '1',    letterSpacing: '2px',    fontWeight: '700' }],
      },
      spacing: {
        'mento-xs':  '8px',
        'mento-sm':  '16px',
        'mento-md':  '24px',
        'mento-lg':  '32px',
        'mento-xl':  '48px',
        'mento-2xl': '64px',
        'mento-3xl': '80px',
        'mento-4xl': '96px',
      },
      borderRadius: {
        'mento-xs':   '4px',
        'mento-sm':   '8px',
        'mento-md':   '12px',
        'mento-lg':   '16px',
        'mento-xl':   '20px',
        'mento-full': '100px',
      },
      backgroundImage: {
        'gradient-azul-vino':    'linear-gradient(135deg, #2E4A6B, #7E3A5F)',
        'gradient-vino-magenta': 'linear-gradient(135deg, #7E3A5F, #C5577A)',
        'gradient-deep-azul':    'linear-gradient(135deg, #0B1827, #2E4A6B)',
        'gradient-azul-magenta': 'linear-gradient(135deg, #1F3450, #C5577A)',
      },
      boxShadow: {
        'mento-sm':  '0 4px 12px rgba(46, 74, 107, 0.15)',
        'mento-md':  '0 8px 24px rgba(46, 74, 107, 0.20)',
        'mento-lg':  '0 16px 48px rgba(46, 74, 107, 0.25)',
        'mento-glow': '0 0 32px rgba(197, 87, 122, 0.40)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
