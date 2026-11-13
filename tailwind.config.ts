import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#050816',
          900: '#070B1A',
          800: '#0B123B',
          700: '#0F172A',
        },
        paper: {
          50: '#F7F8FC',
          100: '#EEF1F8',
          200: '#E5E9F2',
        },
        ink: {
          900: '#0B1020',
          700: '#1F2937',
          500: '#475569',
          400: '#64748B',
          300: '#94A3B8',
        },
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        verified: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(37,99,235,0.45)',
        'glow-accent': '0 0 60px -15px rgba(6,182,212,0.5)',
        card: '0 24px 60px -30px rgba(11,16,32,0.25)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        marquee: 'marquee 34s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}