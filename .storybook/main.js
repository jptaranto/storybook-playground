module.exports = {
  // This setup will demo the nested component-named folder issue.
  // stories: ["../design-system/src/**/*.stories.*"],
  // This setup produces no stories at all.
  stories: [{ directory: "../design-system/src", files: "*.stories.*" }],
  core: {
    builder: "webpack5",
  },
  features: {
    storyStoreV7: true,
  },
}
