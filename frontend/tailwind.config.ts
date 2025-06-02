import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'media', // or 'class'
  theme: {
    extend: {},
  },
  content: ['./src/app/**/*.{ts,tsx}'],
  plugins: [typography],
};
export default config;