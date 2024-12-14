import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { json } from "stream/consumers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript'
    ],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-unescaped-entities': 'off'
    }
  })
]

export default eslintConfig;
