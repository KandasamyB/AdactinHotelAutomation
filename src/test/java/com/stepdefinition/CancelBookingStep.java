package com.stepdefinition;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Then;

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description cancel booking scenarios
 *
 */
public class CancelBookingStep extends BaseClass {

	PageObjectManager pom = new PageObjectManager();

	
		/**
		 * @creationDate 25/06/2022
		 * @Description User should cancel generated order id after booking confirmation
		 */
	@Then("User should cancel generated order id after booking confirmation")
	public void userShouldCancelGeneratedOrderIdAfterBookingConfirmation() {

		String orderId = pom.getBookingConfirmationPage().getOrderId();
		pom.getCancelBookingPage().cancelBooking(orderId);

	}
	
	/**
	 * 
	 * @param SearchResultError
	 * @creationDate 25/06/2022
	 * @Description User should verify cancel message after cancelling {string}
	 */

	@Then("User should verify cancel message after cancelling {string}")
	public void userShouldVerifyCancelMessageAfterCancelling(String SearchResultError) {

		String searcherror = getText(pom.getCancelBookingPage().getSearchResultError());

		System.out.println(searcherror);

		Assert.assertEquals("verify", SearchResultError, searcherror);

	}
	
	/**
	 * 
	 * @param orderID
	 * @creationDate 25/06/2022
	 * @Description User should cancel existing order {string} after sucessfully login
	 */

	@Then("User should cancel existing order {string} after sucessfully login")
	public void userShouldCancelExistingOrderAfterSucessfullyLogin(String orderID) {
		pom.getCancelBookingPage().cancelBooking(orderID);

	}
}
