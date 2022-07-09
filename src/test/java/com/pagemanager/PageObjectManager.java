package com.pagemanager;

import com.pages.BookingConfirmationPage;
import com.pages.BookingPage;
import com.pages.CancelBookingPage;
import com.pages.LoginPage;
import com.pages.SearchHotelPage;
import com.pages.SelectHotelPage;

/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description All scenario integrated in PageObjectManager 
 *
 */
public class PageObjectManager {
	private LoginPage loginPage;
	private SearchHotelPage searchHotelPage;
	private SelectHotelPage selectHotelPage;
	private BookingPage bookingPage;
	private BookingConfirmationPage bookingConfirmationPage;
	private CancelBookingPage cancelBookingPage;
	
	/**
	 * 
	 * @return LoginPage
	 * @creationDate 25/06/2022
	 * @Description create object for LoginPage 
	 */
	public LoginPage getLoginPage() {
		return (loginPage==null)? loginPage =new LoginPage():loginPage;
	}
	
	
	/**
	 * 
	 * @return SearchHotelPage
	 * @creationDate 25/06/2022
	 * @Description create object for SearchHotelPage
	 */
	public SearchHotelPage getSearchHotelPage() {
		return (searchHotelPage==null)? searchHotelPage =new SearchHotelPage():searchHotelPage;
	}
	
	/**
	 * 
	 * @return SelectHotelPage
	 * @creationDate 25/06/2022
	 * @Description create object for SelectHotelPage 
	 */
	public SelectHotelPage getSelectHotelPage() {
		return (selectHotelPage==null)? selectHotelPage=new SelectHotelPage():selectHotelPage;
	}
	
	/**
	 * 
	 * @return BookingPage
	 * @creationDate 25/06/2022
	 * @Description create object for BookingPage 
	 */
	public BookingPage getBookingPage() {
		return (bookingPage==null)? bookingPage=new BookingPage():bookingPage;
	}
	
	/**
	 * 
	 * @return BookingConfirmationPage
	 * @creationDate 25/06/2022
	 * @Description create object for BookingConfimationPage 
	 */
	public BookingConfirmationPage getBookingConfirmationPage() {
		return (bookingConfirmationPage==null)? bookingConfirmationPage=new BookingConfirmationPage():bookingConfirmationPage;
	}
	/**
	 * 
	 * @return CancelBookingPage
	 * @creationDate 25/06/2022
	 * @Description CancelBookingPage
	 */
	public CancelBookingPage getCancelBookingPage() {
		return (cancelBookingPage==null)? cancelBookingPage=new CancelBookingPage():cancelBookingPage;
	}
	
	

}
