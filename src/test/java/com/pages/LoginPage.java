package com.pages;

import java.awt.AWTException;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

/**
 * 
 * @author ELCOT
 * @creationDate 26/06/2022
 * @Description Here LoginPage Locators and Getter method maintained
 *
 */

public class LoginPage extends BaseClass {

	/**
	 * @creationDate 26/06/2022
	 * @Description Default Constructor PageFactory
	 */
	public LoginPage() {
		PageFactory.initElements(driver, this);

	}

	/**
	 * @creationDate 26/06/2022
	 * @Description Locators and GetterMethod maintained
	 */

	@FindBy(id = "username")
	private WebElement txtuserName;

	@FindBy(id = "password")
	private WebElement txtpassWord;

	@FindBy(id = "login")
	private WebElement btnlogin;

	@FindBy(id = "username_show")
	private WebElement verifyMessage;

	public WebElement getVerifyMessage() {
		return verifyMessage;
	}

	@FindBy(xpath = "//div[@class='auth_error']")
	private WebElement errorMessage;

	public WebElement getTxtuserName() {
		return txtuserName;
	}

	public WebElement getTxtpassWord() {
		return txtpassWord;
	}

	public WebElement getBtnlogin() {
		return btnlogin;
	}

	public WebElement getErrorMessage() {
		return errorMessage;
	}

	/**
	 * 
	 * @param username
	 * @param password
	 * @Description login using username and password
	 * @creationDate 26/06/2022
	 */
	public void login(String username, String password) {
		sendKeys(getTxtuserName(), username);
		sendKeys(getTxtpassWord(), password);
		click(getBtnlogin());

	}

	/**
	 * 
	 * @param username
	 * @param password
	 * @throws AWTException
	 * @Description login with Enter key using username and password
	 * @creationDate 26/06/2022
	 */

	public void loginWithEnterKey(String username, String password) throws AWTException {
		sendKeys(getTxtuserName(), username);
		sendKeys(getTxtpassWord(), password);
		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.keyRelease(KeyEvent.VK_ENTER);

	}

	/**
	 * @Description login without enter details
	 * @creationDate 26/06/2022
	 */
	public void login() {
		click(getBtnlogin());

	}
}
