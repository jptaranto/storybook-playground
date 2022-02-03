module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["jest-dom", "testing-library", "unused-imports"],
  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-empty": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-focus": "error",
    "jest-dom/prefer-in-document": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "jest-dom/prefer-to-have-class": "error",
    "jest-dom/prefer-to-have-style": "error",
    "jest-dom/prefer-to-have-text-content": "error",
    "jest-dom/prefer-to-have-value": "error",
    "no-console": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-container": "error",
    "testing-library/no-manual-cleanup": "error",
    "testing-library/no-debugging-utils": "error",
    "unused-imports/no-unused-imports": "error",
  },
  overrides: [
    {
      files: ["*.stories.@(js|jsx)"],
      extends: ["plugin:storybook/recommended", "prettier"],
    },
  ],
}
