module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/OKruel/github-actions-ci-cd/",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    //  "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
