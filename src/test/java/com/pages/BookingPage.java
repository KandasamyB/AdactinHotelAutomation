package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description Here contains Booking Page Locators and Getter method 
 *
 */
public class BookingPage extends BaseClass {
	
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Default Constructor PageFactory
	 */
	public BookingPage() {
		PageFactory.initElements(driver, this);
	}

	/**
	 * @creationDate 26/06/2022
	 * @Description here Locators and regarding getters maintained 
	 */
	@FindBy(id = "first_name")
	private WebElement txtFirstname;
	@FindBy(id = "last_name")
	private WebElement txtLastname;
	@FindBy(id = "address")
	private WebElement txtAddress;
	@FindBy(id = "cc_num")
	private WebElement txtCCnum;
	@FindBy(id = "cc_type")
	private WebElement ddnCCtype;
	@FindBy(id = "cc_exp_month")
	private WebElement ddnExpmonth;
	@FindBy(id = "cc_exp_year")
	private WebElement ddnExpyear;
	@FindBy(id = "cc_cvv")
	private WebElement txtCVV;
	@FindBy(xpath = "//input[@id=\"book_now\"]")
	private WebElement btnBook;

@FindBy(xpath = "//td[text()='Booking Confirmation ']")
private WebElement verrifyMessage;

	
	@FindBy(id = "first_name_span")
	private WebElement firstnameError;
	

	@FindBy(id = "last_name_span")
	private WebElement lastnameError;
	@FindBy(id = "address_span")
	private WebElement addressError;
	@FindBy(id = "cc_num_span")
	private WebElement ccNumError;
	@FindBy(id = "cc_type_span")
	private WebElement ccTypeError;
	@FindBy(id = "cc_expiry_span")
	private WebElement ccExpiryError;
	@FindBy(id = "cc_cvv_span")
	private WebElement cvvError;
	
	public WebElement getVerrifyMessage() {
		return verrifyMessage;
	}

	public WebElement getFirstnameError() {
		return firstnameError;
	}

	public WebElement getLastnameError() {
		return lastnameError;
	}

	public WebElement getAddressError() {
		return addressError;
	}

	public WebElement getCcNumError() {
		return ccNumError;
	}

	public WebElement getCcTypeError() {
		return ccTypeError;
	}

	public WebElement getCcExpiryError() {
		return ccExpiryError;
	}

	public WebElement getCvvError() {
		return cvvError;
	}




	public WebElement getTxtFirstname() {
		return txtFirstname;
	}

	public WebElement getTxtLastname() {
		return txtLastname;
	}

	public WebElement getTxtAddress() {
		return txtAddress;
	}

	public WebElement getTxtCCnum() {
		return txtCCnum;
	}

	public WebElement getDdnCCtype() {
		return ddnCCtype;
	}

	public WebElement getDdnExpmonth() {
		return ddnExpmonth;
	}

	public WebElement getDdnExpyear() {
		return ddnExpyear;
	}

	public WebElement getTxtCVV() {
		return txtCVV;
	}

	public WebElement getBtnBook() {
		return btnBook;
	}
	
	/**
	 * 
	 * @param firstname
	 * @param lastname
	 * @param address
	 * @param creditcardnumber
	 * @param creditcardtype
	 * @param expirymonth
	 * @param expiryyear
	 * @param cvv
	 * @creationDate 26/06/2022
	 * @Description booking hotel with valid credentials 
	 */

	public void bookHotel(String firstname, String lastname, String address, String creditcardnumber,
			String creditcardtype, String expirymonth, String expiryyear, String cvv) {
		sendKeys(getTxtFirstname(), firstname);
		sendKeys(getTxtLastname(), lastname);
		sendKeys(getTxtAddress(), address);
		sendKeys(getTxtCCnum(),creditcardnumber);
		SelectByText(getDdnCCtype(),  creditcardtype);
		SelectByText(getDdnExpmonth(),  expirymonth);
		SelectByText(getDdnExpyear(), expiryyear);
		sendKeys(getTxtCVV(),  cvv);
		click(getBtnBook());

	}
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Booking hotel without filling any details 
	 */

	public void bookHotel() {
		click(getBtnBook());

	}

}
