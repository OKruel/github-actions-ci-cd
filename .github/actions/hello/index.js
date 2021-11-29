// As .gitignore prevents to upload the node_modules folder, the libraries do not exist in the Virtual Machine. Solutions in the actions.yaml file
//! GETTING TO KNOW THE CORE AND GITHUB PACKAGES FUNCTIONALITIES
const core = require("@actions/core");
const github = require("@actions/github");

//! How to communicate ERRORS in the LOGS of the WORKFLOW
// To enable a better DEBUG experience a environment variable must be set in the repository.
// The variable must be called ACTIONS_STEP_DEBUG and its value must be set to true.
// To be able to create error log messages in the log of the virtual machine, the core package can be used.
try {
  // This functions will only run the DEBUG mode is active in the repository.
  // It can be activated be setting a environment variable in form of a secret.
  // The variable must be called ACTIONS_STEP_DEBUG and its value must be set to true.
  //! DEBUG
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  //! INPUT
  const name = core.getInput("who-to-greet");
  //! SET SECRET
  //# The secret will appear as *** in the workflow log
  core.setSecret(name);
  console.log(`Hello ${name}. The name does not appear because it is a secret`);

  //! SET OUTPUT
  const currentTime = new Date();
  core.setOutput("time", currentTime.toTimeString());

  //! EXPAND LOG
  // This creates an arrow to expand the object to see better the logs
  core.startGroup("Logging github object");
  // The "/t" maked the output be formatted with tabs
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  //! SET VARIABLE
  // It is possible to set variable that be used in any SUBSEQUENT STEP in the workflow.
  core.exportVariable("JSVAR", "JS variable");
} catch (error) {
  // The workfolw can not detect the error in this JS file even if we thow it
  // The function below will MAKE THE ACTION FAIL and pass the error to the workflow.
  core.setFailed(error.message);
}
