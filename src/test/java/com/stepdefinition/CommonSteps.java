package com.stepdefinition;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Then;

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description common step after integrate all part
 *
 */
public class CommonSteps extends BaseClass {
	
	PageObjectManager pom= new PageObjectManager();
	
	/**
	 * 
	 * @param VerifyMessage
	 * @creationDate 25/06/2022
     * @Description User should verify successfully login message {string}
	 */

	@Then("User should verify successfully login message {string}")
	public void userShouldVerifySuccessfullyLoginMessage(String VerifyMessage) {
		
		String verifymsg = getAttributeValue(pom.getLoginPage().getVerifyMessage());
		System.out.println(verifymsg);
		Assert.assertEquals("verified", VerifyMessage, verifymsg);

	}

}
