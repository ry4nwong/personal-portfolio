import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin'


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { globals: globals.browser },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ["error", 2],
      "react/react-in-jsx-scope": "off",
    },
  },
]);