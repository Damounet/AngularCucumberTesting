var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber/reports/json/result.json',
  output: 'cucumber/reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    Browser: 'Chrome  54.0.2840.98',
    Platform: 'MAC OS X',
    Parallel: 'Scenarios',
    Executed: 'Remote'
  }
};

reporter.generate(options);
