module.exports = {
  env: {
    browser: true
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      pragma: "h",
      version: "detect"
    },
  },
  overrides: [
    {
      files: ["preact.config.js"],
      env: {
        browser: false,
        node: true
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off"
      }
    },
    {
      files: ["*.css.d.ts"],
      rules: {
        "@typescript-eslint/interface-name-prefix": "off"
      }
    }
  ]
};
