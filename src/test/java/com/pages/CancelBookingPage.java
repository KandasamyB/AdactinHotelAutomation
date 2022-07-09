package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description Here CancelBookingPage Locators and Getter methods maintained 
 *
 */
public class CancelBookingPage extends BaseClass {
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Default constructor PageFactory
	 */

	public CancelBookingPage() {

		PageFactory.initElements(driver, this);
	}
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Locators and Getters method maintained
	 */

	@FindBy(id = "order_no")
	private WebElement orderNo;

	@FindBy(xpath ="//a[text()='Booked Itinerary']")
	private WebElement btnMyItinerary;

	@FindBy(id = "order_id_text")
	private WebElement orderSearch;

	@FindBy(id = "search_hotel_id")
	private WebElement searchHotelId;

	

	@FindBy(xpath = "//input[contains(@value,'Cancel ')]")
	private WebElement cancelorderid;
	
	@FindBy(id = "search_result_error")
	private WebElement searchResultError;

	public WebElement getSearchResultError() {
		return searchResultError;
	}

	public WebElement getOrderNo() {
		return orderNo;
	}

	public WebElement getBtnMyItinerary() {
		return btnMyItinerary;
	}

	public WebElement getOrderSearch() {
		return orderSearch;
	}

	public WebElement getSearchHotelId() {
		return searchHotelId;
	}

	

	public WebElement getCancelorderid() {
		return cancelorderid;
	}
	
	/**
	 * 
	 * @param orderNo
	 * @creationDate 26/06/2022
	 * @Description Cancel Booking order
	 */

	public void cancelBooking(String orderNo) {
		click(getBtnMyItinerary());
		sendKeys(getOrderSearch(), orderNo);
		click(getOrderSearch());
		click(getCancelorderid());
		acceptAlert();
	}

}
