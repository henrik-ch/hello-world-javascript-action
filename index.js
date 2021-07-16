const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    const limitPrice = core.getInput('limit-price');
    const currentPrice = core.getInput('current-price');
    const previousPrice = core.getInput('previous-price');
    const numLimitPrice = parseFloat(limitPrice);
    const numCurrentPrice = parseFloat(currentPrice);
    const numPreviousPrice = parseFloat(previousPrice);

    console.log(`Hello ${nameToGreet}!`);
    console.log(`Limit price: ${limitPrice}`);
    console.log(`Current price: ${currentPrice}`);
    console.log(`Previous price: ${previousPrice}`);

    console.log(`num Limit price: ${numLimitPrice}`);
    console.log(`num Current price: ${numCurrentPrice}`);
    console.log(`num Previous price: ${numPreviousPrice}`);


    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.setOutput("limit-event", true);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
  