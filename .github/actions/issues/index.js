const core = require("@actions/core");
const github = require("@actions/github");

const runWorkflow = async () => {
  try {
    // Getting the inputs
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = github.getOctokit(token);
    // Request to Github API to create the issue
    const response = await octokit.rest.issues.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      title,
      body,
      assignees: assignees ? assignees.split(",") : undefined,
    });

    core.setOutput("issue", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
};

runWorkflow();
