package com.reports;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
/**
 * 
 * @author ELCOT
 * @creationDate 25/06/2022
 * @Description Making report for Adactin hotel Automation 
 *
 */
public class Reporting {
	
	/**
	 * 
	 * @param jsonFile
	 * @creationDate 25/06/2022
	 * @Description generate JVM Report 
	 */
	public static void generateJVMReport(String jsonFile) {

		File file=new File(System.getProperty("user.dir")+"/target");
		
		Configuration config= new Configuration(file, "AdactinHotelAutomation");
		
		config.addClassifications("OS", "Windows10");
		config.addClassifications("Browser", "Chrome");
		config.addClassifications("Version", "10");
		config.addClassifications("Sprint", "33");
		
		List<String> jsonfiles= new ArrayList<String>();
		jsonfiles.add(jsonFile);
		
		ReportBuilder builder= new ReportBuilder(jsonfiles, config);
		
		builder.generateReports();
		
		
	}

}
