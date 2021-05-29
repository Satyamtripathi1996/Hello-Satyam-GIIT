import core from '@actions/core';
import * as steps from './steps';

(async () => {
  try {
    const heroku = steps.getHerokuConfig();

    // Pipeline
    steps.loginToHeroku(heroku) &&
    steps.justLogin(heroku)
  } catch (error) {
    core.setFailed(
      "stderr" in error 
      ? error.stderr.toString() 
      : error.message.toString()
    );
  }
})();