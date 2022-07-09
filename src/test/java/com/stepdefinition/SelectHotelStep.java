package com.stepdefinition;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Then;


/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description Select hotel step scenarios
 *
 */
public class SelectHotelStep extends BaseClass {
	
	PageObjectManager pom= new PageObjectManager();
	
	/**
	 * @creationDate 25/06/2022
	 * @Description User should Select the Hotel and continue After successfully search
	 */
	
	@Then("User should Select the Hotel and continue After successfully search")
	public void userShouldSelectTheHotelAndContinueAfterSuccessfullySearch() {
		pom.getSelectHotelPage().selectAndContinueHotel();

	}
	
	/**
	 * 
	 * @param verifyMessage
	 * @creationDate 25/06/2022
	 * @Description User should after verify successfully select hotel get message {string}
	 */

	@Then("User should after verify successfully select hotel get message {string}")
	public void userShouldAfterVerifySuccessfullySelectHotelGetMessage(String verifyMessage) {
		
		String verifymsg = getText(pom.getSelectHotelPage().getVerifyMessage());
		System.out.println(verifymsg);
		Assert.assertEquals("hy", verifyMessage, verifymsg);
		  

	}
	
	
	/**
	 * @creationDate 25/06/2022
	 * @Description User should without Select the Hotel and continue After successfully search
	 */

	@Then("User should without Select the Hotel and continue After successfully search")
	public void userShouldWithoutSelectTheHotelAndContinueAfterSuccessfullySearch() {
		pom.getSelectHotelPage().withoutSelectHotel();

	}

	
	/**
	 * 
	 * @param BtnErrorMsg
	 * @creationDate 25/06/2022
	 * @Description User should  verify after  continue get Error message {string}
	 */
	@Then("User should  verify after  continue get Error message {string}")
	public void userShouldVerifyAfterContinueGetErrorMessage(String BtnErrorMsg) {
		
		String btnerror = getText(pom.getSelectHotelPage().getBtnErrorMsg());
		Assert.assertEquals("hy", BtnErrorMsg, btnerror);
		  
		

	}

}
