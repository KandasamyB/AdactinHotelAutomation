package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;


/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description SearchHotelPage Locators and Getter Methods Maintained
 *
 */
public class SearchHotelPage extends BaseClass {
	
	/**
	 * @creationDate 26/06/2022
	 * @Description Default Constructor PageFactory
	 */
	public SearchHotelPage() {
		PageFactory.initElements(driver, this);

	}

	/**
	 * @creationDate 26/06/2022
	 * @Description Locators and Getter Method Maintained Here
	 */
	@FindBy(id = "location")
	private WebElement ddnLocation;

	@FindBy(id = "hotels")
	private WebElement ddnHotel;

	@FindBy(id = "room_type")
	private WebElement ddnRoomtype;

	@FindBy(id = "room_nos")
	private WebElement ddnRoomno;

	@FindBy(id = "datepick_in")
	private WebElement inDate;

	@FindBy(id = "datepick_out")
	private WebElement outDate;

	@FindBy(id = "adult_room")
	private WebElement ddnAdult;

	@FindBy(id = "child_room")
	private WebElement ddnChild;

	@FindBy(id = "Submit")
	private WebElement btnSearch;

	@FindBy(xpath = "//td[text()='Select Hotel ']")
	private WebElement verifyMessage;

	@FindBy(xpath = "//span[@id='checkin_span']")
	private WebElement checkINError;
	
	@FindBy(xpath = "//span[@id='checkout_span']")
	private WebElement checkOutError;
	
	@FindBy(id = "location_span")
	private WebElement locationError;

	
	public WebElement getLocationError() {
		return locationError;
	}

	public WebElement getDdnLocation() {
		return ddnLocation;
	}

	public WebElement getDdnHotel() {
		return ddnHotel;
	}

	public WebElement getDdnRoomtype() {
		return ddnRoomtype;
	}

	public WebElement getDdnRoomno() {
		return ddnRoomno;
	}

	public WebElement getInDate() {
		return inDate;
	}

	public WebElement getOutDate() {
		return outDate;
	}

	public WebElement getDdnAdult() {
		return ddnAdult;
	}

	public WebElement getDdnChild() {
		return ddnChild;
	}

	public WebElement getBtnSearch() {
		return btnSearch;
	}

	public WebElement getVerifyMessage() {
		return verifyMessage;
	}

	public WebElement getCheckINError() {
		return checkINError;
	}

	public WebElement getCheckOutError() {
		return checkOutError;
	}
/**
 * 
 * @param location
 * @param hotel
 * @param roomtype
 * @param roomno
 * @param indate
 * @param outdate
 * @param adult
 * @param child
 * @creationDate 26/06/2022
 * @Description search hotel with valid credentials
 */
	// 1 and 3(invalid date)
	public void searchHotels(String location, String hotel, String roomtype, String roomno, String indate,
			String outdate, String adult, String child) {

		SelectByText(getDdnLocation(), location);
		SelectByText(getDdnHotel(), hotel);
		SelectByText(getDdnRoomtype(), roomtype);
		SelectByText(getDdnRoomno(), roomno);
		clear(getInDate());
		sendKeys(getInDate(), indate);
		clear(getOutDate());
		sendKeys(getOutDate(), outdate);
		SelectByText(getDdnAdult(), adult);
		SelectByText(getDdnChild(), child);
		click(getBtnSearch());
	}

	/**
	 * 
	 * @param location
	 * @param roomno
	 * @param indate
	 * @param outdate
	 * @param adult
	 * @creationDate 26/06/2022
	 * @Description search hotel with mandatory details
	 */
	// 2
	public void searchHotels(String location, String roomno, String indate, String outdate, String adult) {

		SelectByText(getDdnLocation(), location);
		SelectByText(getDdnRoomno(), roomno);
		sendKeys(getInDate(), indate);
		sendKeys(getOutDate(), outdate);
		SelectByText(getDdnAdult(), adult);
		click(getBtnSearch());
	}

	/**
	 * @creationDate 26/06/2022
	 * @Description search hotel without filling any details
	 */
	// 4
	public void searchHotels() {
		click(getBtnSearch());

	}

}
