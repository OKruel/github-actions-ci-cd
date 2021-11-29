// As .gitignore prevents to upload the node_modules folder, the libraries do not exist in the Virtual Machine.
// Solutions in the actions.yaml file
const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");

  console.log(`Hello ${name}`);

  // Setting the output variables
  const currentTime = new Date();
  core.setOutput("time", currentTime.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  // The workfolw can not detect the error in this JS file even if we thow it
  // The function below will inform and pass the error to the workflow.
  core.setFailed(error.message);
}
