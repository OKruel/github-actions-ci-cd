// This is the basic configuration to work with semantic-release.
// https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/OKruel/github-actions-ci-cd",
  // Each plugin is reponsible to add a task to the release workflow.
  // Every plugin can receive a options object.
  // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/plugins.md
  plugins: [
    // This is reponsible for analyze the commits and create the release version (major, minor, patch)
    // This has priority over all the plugins
    "@semantic-release/commit-analyzer",
    // Responsible for generating the content notes of the release.
    "@semantic-release/release-notes-generator",
    // This would create a release version in your npm (using npm api) package.
    //?  "@semantic-release/npm",
    // Resposible to create the release in Github (using github api)
    // This is the syntax to configure options in the plugin.
    [
      "@semantic-release/github",
      // Option to configure which assets to upload to the release.
      // This MUST be a file, MUST NOT be a folder
      {
        assets: [
          // This files in the path must be ziped in the workflow.
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
