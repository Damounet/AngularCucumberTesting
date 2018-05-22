import { browser } from 'protractor';

var { After, Status, setDefinitionFunctionWrapper } = require('cucumber');

After(function(testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      world.attach(screenShot, 'image/png');
    });
  }
});

/* function takeScreenshotToReport() {
  var world = this;
  return browser.takeScreenshot().then(function(screenShot) {
    // screenShot is a base-64 encoded PNG
    world.attach(screenShot, 'image/png');
  });
}

setDefinitionFunctionWrapper(function(fn) {
  fn = takeScreenshotToReport();
  return fn;
}); */
