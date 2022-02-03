module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  overrides: [
    {
      files: ["**/*.{js,jsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
  rules: {
    "selector-class-pattern": null,
    "at-rule-empty-line-before": null,
    "at-rule-allowed-list": [
      "import",
      "media",
      "supports",
      "keyframes",
      "extend",
    ],
    "at-rule-no-unknown": null,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "selector-nested-pattern": "^&",
    "number-leading-zero": null,
    "unit-allowed-list": [
      "deg",
      "em",
      "ms",
      "rem",
      "s",
      "%",
      "pt",
      "px",
      "vh",
      "vw",
      "fr",
      "ch",
    ],
    "no-descending-specificity": null,
  },
}
