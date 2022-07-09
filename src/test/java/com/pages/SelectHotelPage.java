package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description Select Hotel page Locators and Getter method maintained 
 *
 */
public class SelectHotelPage extends BaseClass {
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Default constructor PageFactory
	 */

	public SelectHotelPage() {
		PageFactory.initElements(driver, this);

	}
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Locators and Getter method maintained
	 */
	
	@FindBy(id="radiobutton_0")
	private WebElement btnRadio;
	
	@FindBy(id="continue")
	private WebElement btnContinue;
	
	@FindBy(xpath = "//td[text()='Book A Hotel ']")
	private WebElement verifyMessage;
	
	@FindBy(id="radiobutton_span")
	private WebElement btnErrorMsg;
	
	
	
	public WebElement getBtnErrorMsg() {
		return btnErrorMsg;
	}
	public WebElement getVerifyMessage() {
		return verifyMessage;
	}
	public WebElement getBtnRadio() {
		return btnRadio;
	}
	public WebElement getBtnContinue() {
		return btnContinue;
	}
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Select and continue
	 */
	
	public void selectAndContinueHotel() {
		click(getBtnRadio());
		click(getBtnContinue());

	}
	
	/**
	 * @creationDate 26/06/2022
	 * @Description without selecting hotel continue
	 */
	
	public void withoutSelectHotel() {
		click(getBtnContinue());
	}

}
