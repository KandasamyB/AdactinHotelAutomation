package com.stepdefinition;

import java.awt.AWTException;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description login scenarios
 *
 */

public class LoginPageStep extends BaseClass {
	PageObjectManager pom= new PageObjectManager();
	
	
	/**
	 * 
	 * @throws FileNotFoundException
	 * @throws IOException
	 * @creationDate 25/06/2022
	 * @Description User is on the Adactinhotel Page 
	 */
	@Given("User is on the Adactinhotel Page")
	public void userIsOnTheAdactinhotelPage() throws FileNotFoundException, IOException {
		
	}
	/**
	 * 
	 * @param username
	 * @param password
	 * @creationDate 25/06/2022
	 * @Description User should Login  with {string}, {string} 
	 */

	@When("User should Login  with {string}, {string}")
	public void userShouldLoginWith(String username, String password) {
		pom.getLoginPage().login(username, password);
	}
	
	/**
	 * 
	 * @param username
	 * @param password
	 * @throws FileNotFoundException
	 * @throws AWTException
	 * @throws IOException
	 * @creationDate 25/06/2022
	 * @Description User should login with Enter Key {string},{string} 
	 */

	@When("User should login with Enter Key {string},{string}")
	public void userShouldLoginWithEnterKey(String username, String password) throws FileNotFoundException, AWTException, IOException {
		pom.getLoginPage().loginWithEnterKey(username,password);

	}
	
	
	/**
	 * 
	 * @param verifymessage
	 * @creationDate 25/06/2022
	 * @Description User should verify after login get error message contains {string} 
	 */

	@Then("User should verify after login get error message contains {string}")
	public void userShouldVerifyAfterLoginGetErrorMessageContains(String verifymessage) {
		
		String text = getText(pom.getLoginPage().getErrorMessage());
		Assert.assertTrue("hy",text.contains(verifymessage));
		
		
		

	}


}
