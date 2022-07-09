package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.reports.Reporting;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags= {"@SearchHotel"}, monochrome = true, plugin = { "pretty",
		"json:target/cucumber.json" }, dryRun = false, strict = true, snippets = SnippetType.CAMELCASE, features = "src/test/resources", glue = "com.stepdefinition")

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description integrated Module executed in TestRunnerClass 
 *
 */
public class TestRunnerClass {
	
	/**
	 * @creationDate 25/06/2022
	 * @Description this method create report after TestRunnerClass Execution
	 */
	@AfterClass
	public static void afterClass() {

		Reporting.generateJVMReport(System.getProperty("user.dir") + "/target/cucumber.json");

	}
}
