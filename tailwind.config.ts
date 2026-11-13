import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        forest: { 50: '#eef1ed', 100: '#dce3db', 300: '#9eae9d', 500: '#627b66', 700: '#355a45', 900: '#244331' },
        paper: { 50: '#f6f4ee', 100: '#efeee6', 200: '#edeae0' },
        ink: { 900: '#1e2d25', 700: '#39473e', 500: '#536158', 400: '#778078' },
        ochre: { 400: '#c9a673', 500: '#c08a52', 700: '#926f47' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
