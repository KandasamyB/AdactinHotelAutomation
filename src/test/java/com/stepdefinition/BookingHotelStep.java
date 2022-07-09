package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.base.BaseClass;
import com.pagemanager.PageObjectManager;

import cucumber.api.java.en.Then;

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description booking hotel step scenarios 
 *
 */
public class BookingHotelStep extends BaseClass {

	PageObjectManager pom = new PageObjectManager();
	
	/**
	 * 
	 * @param firstname
	 * @param lastname
	 * @param address
	 * @param dataTable
	 * @creationDate 25/06/2022
	 * @Description User should Book the Hotel after successfully select hotel  using {string},{string},{string} and save the generated orderId
	 */

	@Then("User should Book the Hotel after successfully select hotel  using {string},{string},{string} and save the generated orderId")
	public void userShouldBookTheHotelAfterSuccessfullySelectHotelUsingAndSaveTheGeneratedOrderId(String firstname,
			String lastname, String address, io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> m = dataTable.asMaps();

		pom.getBookingPage().bookHotel(firstname, lastname, address, m.get(2).get("creditcardnumber"),
				m.get(2).get("creditcardtype"), m.get(2).get("expirymonth"), m.get(2).get("expiryyear"),
				m.get(2).get("cvv"));

	}
	
	/**
	 * 
	 * @param VerifyMessage
	 *  @creationDate 25/06/2022
	 * @Description User should verify after Sucessfully Book hotel get message {string}
	 */

	@Then("User should verify after Sucessfully Book hotel get message {string}")
	public void userShouldVerifyAfterSucessfullyBookHotelGetMessage(String VerifyMessage) {

		System.out.println(getText(pom.getBookingPage().getVerrifyMessage()));
		String verifymsg = getText(pom.getBookingPage().getVerrifyMessage());
		Assert.assertEquals("verify", VerifyMessage, verifymsg);

	}
	
	/**
	 *  @creationDate 25/06/2022
	 * @Description User Should Book the Hotel after successfully without filling details
	 */

	@Then("User Should Book the Hotel after successfully without filling details")
	public void userShouldBookTheHotelAfterSuccessfullyWithoutFillingDetails() {
		pom.getBookingPage().bookHotel();

	}
	
	/**
	 * 
	 * @param FirstnameError
	 * @param LastnameError
	 * @param AddressError
	 * @param CcNumError
	 * @param CcTypeError
	 * @param CcExpiryError
	 * @param CvvError
	 * @creationDate 25/06/2022
	 * @Description User should after verify Book hotel get error message {string},{string},{string},{string},{string},{string}and{string}
	 */

	@Then("User should after verify Book hotel get error message {string},{string},{string},{string},{string},{string}and{string}")
	public void userShouldAfterVerifyBookHotelGetErrorMessageAnd(String FirstnameError, String LastnameError,
			String AddressError, String CcNumError, String CcTypeError, String CcExpiryError, String CvvError) {

		String firstname = getText(pom.getBookingPage().getFirstnameError());
		Assert.assertEquals("verified", FirstnameError, firstname);

		String lastname = getText(pom.getBookingPage().getLastnameError());
		Assert.assertEquals("verified", LastnameError, lastname);
		String address = getText(pom.getBookingPage().getAddressError());
		Assert.assertEquals("verified", AddressError, address);
		String cardnumber = getText(pom.getBookingPage().getCcNumError());
		Assert.assertEquals("verified", CcNumError, cardnumber);
		String cardtype = getText(pom.getBookingPage().getCcTypeError());
		Assert.assertEquals("verified", CcTypeError, cardtype);
		String expiry = getText(pom.getBookingPage().getCcExpiryError());
		Assert.assertEquals("verified", CcExpiryError, expiry);
		String cvv = getText(pom.getBookingPage().getCvvError());
		Assert.assertEquals("verified", CvvError, cvv);

	}

}
