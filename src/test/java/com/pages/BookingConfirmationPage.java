package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description Here all locators and getter method maintained regarding BookingConfirmationPage 
 *
 */
public class BookingConfirmationPage extends BaseClass {

	/**
	 * @creationDate 26/06/2022
	 * @Description Default constructor PageFactory  
	 */
	public BookingConfirmationPage() {

		PageFactory.initElements(driver, this);
	}

	public static String orderId;

	
	/**
	 * @creationDate 26/06/2022
	 * @Description Default 
	 * Locators and Getter method maintained here with page itself
	 */
	@FindBy(id = "order_no")
	private WebElement orderNo;

	public WebElement getOrderNo() {
		return orderNo;
	}
	
	/**
	 * 
	 * @return String
	 * @creationDate 26/06/2022
	 * @Description get order id  
	 */

	public String getOrderId() {
		orderId = getAttributeValue(getOrderNo());
		return orderId;

	}

}
