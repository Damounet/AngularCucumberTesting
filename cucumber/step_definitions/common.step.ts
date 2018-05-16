import { browser } from 'protractor';

var { After, Status } = require('cucumber');

After(function(testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      world.attach(screenShot, 'image/png');
    });
  }
});
