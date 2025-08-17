# Code Challenge
Code challenge which contains two automated tests using WebDriverIO


## Pre requisites
1. Install NodeJs [NodeJs](https://nodejs.org/en)
2. Verify the installation was successful, execute: `node -v` you should see the installed version

### Install the required dependencies of the project
1. Open the termine in the project root
2. Run `npm install`
3. Wait until the installation completes

## Running the automated tests:
1. To execute the API suite run: `npm run test-api` from the terminal in the root of the project
2. To execute the AUI suite run: `npm run test-ui` from the terminal in the root of the project


### Assumptions
1. Google's recaptcha cannot be disabled since I don't have control over it however information about it can be found here: [Frequently Asked Questions](https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha-v2-do-you-have-any-suggestions)
2. Since recaptcha cannot be disabled sometimes manual interaction is required (I am aware this shouldn't be case but since we don't own Google's infraestructure we cannot modify it)
