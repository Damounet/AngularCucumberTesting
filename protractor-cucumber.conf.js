// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./e2e/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "firefox" /* ,
    shardTestFiles: true,
    maxInstances: 3 */
  },
  //seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["cucumber/features/*.feature"],
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: ["json:cucumber/reports/json/result.json"],
    require: ["cucumber/step_definitions/*.ts"]
    //tags: '@dashboard'
  },
  onPrepare() {
    require("ts-node").register({
      project: "e2e/tsconfig.e2e.json"
    });
    /*jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));*/
  }
};
