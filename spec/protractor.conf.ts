import { browser } from "protractor";
const env = require("../environment.js");

export let config = {

  allScriptsTimeout: 11000,

  directConnect: true,

  specs: [
    "home-items.spec.js",
    "home-actions.spec.js",
    "home-wait.spec.js",
    "external-functions.spec.js",
    "home-component.spec.js",
  ],

  framework: "jasmine",

  capabilities: env.capabilities,

  SELENIUM_PROMISE_MANAGER: false,

  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.manage().window().setSize(1680, 1050);
    browser.manage().timeouts().implicitlyWait(15000);

	var SpecReporter = require('jasmine-spec-reporter');
	jasmine.getEnv().addReporter(new SpecReporter({
		displayStacktrace: true
	})); 

	//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	//jasmine.getEnv().addReporter( new Jasmine2HtmlReporter({
	//	takeScreenshots: true,
	//	takeScreenshotsOnlyOnFailures: false
	//}));

  },

};