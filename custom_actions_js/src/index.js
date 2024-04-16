const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Get inputs from workflow file
    const inputParam = core.getInput('who-to-greet');
    core.info(`Input parameter: ${inputParam}`);
	console.log(`Hello ${inputParam}, this is my first custom action`);
    // Access GitHub context and perform actions
    const context = github.context;
    core.info(`Event name: ${context.eventName}`);
    core.info(`Repository: ${context.repo.repo}`);
    core.info(`SHA: ${context.sha}`);
	const time = (new Date()).toTimeString();
    // Set outputs if needed
    core.setOutput('time', time);

    // Set action status
    core.info('Action completed successfully!');
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
