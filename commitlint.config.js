// This is the configuration file to implement the commit lint package.
// Commit lint is package to enforce the patterns of commit messages.
// https://github.com/conventional-changelog/commitlint
// It uses another package called HUSKY in the version 4.
// Husky has a hook that reaches to commit message before the commit is executed and run the commit lint.
// The config-conventional is a part of the commit lint package that contains the rules for the commits.
module.exports = { extends: ["@commitlint/config-conventional"] };
