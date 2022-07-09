package com.stepdefinition;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Then;


/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description search hotel scenario 
 *
 */
public class SearchHotelStep extends BaseClass {

	PageObjectManager pom = new PageObjectManager();

	@Then("User should  Search the Hotel after Sucessfully Login with {string},{string},{string},{string},{string},{string},{string}and{string}")
	public void userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String Location, String Hotel, String Roomtype,
			String Numberofrooms, String Checkindate, String Checkoutdate, String Adult, String Children) {

		pom.getSearchHotelPage().searchHotels(Location, Hotel, Roomtype, Numberofrooms, Checkindate, Checkoutdate,
				Adult, Children);

	}
	
	/**
	 * 
	 * @param verifyMessage
	 * @creationDate 25/06/2022
	 * @Description User should after verify successfully search message with {string} 
	 */

	@Then("User should after verify successfully search message with {string}")

	public void userShouldAfterVerifySuccessfullySearchMessageWith(String verifyMessage) {

                     String text = getText(pom.getSearchHotelPage().getVerifyMessage());
                     Assert.assertEquals("hy", verifyMessage, text);
                     
	}
	
	/**
	 * 
	 * @param Location
	 * @param Numberofrooms
	 * @param Checkindate
	 * @param Checkoutdate
	 * @param Adult
	 * @creationDate 25/06/2022
	 * @Description User should Search the Hotel after Sucessfully Login with Mandatory details {string},{string},{string},{string}and{string}
	 * 
	 */

	

	@Then("User should Search the Hotel after Sucessfully Login with Mandatory details {string},{string},{string},{string}and{string}")
	public void userShouldSearchTheHotelAfterSucessfullyLoginWithMandatoryDetailsAnd(String Location,
			String Numberofrooms, String Checkindate, String Checkoutdate, String Adult) {
		pom.getSearchHotelPage().searchHotels(Location, Numberofrooms, Checkindate, Checkoutdate, Adult);

	}
	
	/**
	 * 
	 * @param getCheckInError
	 * @param getCheckOutError
	 * @creationDate 25/06/2022
	 * @Description User should after verify  search get Error message  {string} ,{string}
	 * 	
	 */

	@Then("User should after verify  search get Error message  {string} ,{string}")
	public void userShouldAfterVerifySearchGetErrorMessage(String getCheckInError, String getCheckOutError) {
		
		implicitWait(30);
		String checkin = getText(pom.getSearchHotelPage().getCheckINError());
		 Assert.assertEquals("hy", getCheckInError, checkin);
		 
		 String checkout = getText(pom.getSearchHotelPage().getCheckOutError());
		 Assert.assertEquals("hy", getCheckOutError, checkout);

	}
	
	/**
	 * @creationDate 25/06/2022
	 * @Description User should Search the Hotel without select details after Sucessfully Login
	 */

	@Then("User should Search the Hotel without select details after Sucessfully Login")
	public void userShouldSearchTheHotelWithoutSelectDetailsAfterSucessfullyLogin() {
		pom.getSearchHotelPage().searchHotels();
	}

	
	
	/**
	 * 
	 * @param locationError
	 * @creationDate 25/06/2022
	 * @Description User should after verify  search get Error message {string}
	 */
	@Then("User should after verify  search get Error message {string}")
	public void userShouldAfterVerifySearchGetErrorMessage(String locationError) {
		
		String location = getText(pom.getSearchHotelPage().getLocationError());
		 Assert.assertEquals("hy", locationError, location);

		
	}

}
