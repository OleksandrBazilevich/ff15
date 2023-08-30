module.exports = {
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    },
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": ["off"]
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "i18next",
    "react-hooks",
    "prettier"
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "i18next/no-literal-string": ["warn"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", "jsx", ".tsx"] }],
    "react/display-name": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": 0,
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/ban-ts-comment": 1,
    "react-hooks/exhaustive-deps": "warn"
  }
};
