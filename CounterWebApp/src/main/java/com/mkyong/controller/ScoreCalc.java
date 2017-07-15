package com.mkyong.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public class ScoreCalc {

	public double getScore(ApplicationDetails ap, BureauData result)
	{	String purp = ap.getLoan_Purpose();
		double p;
		
		double loaninc_ratio = (ap.getLoan_Amount())/(ap.getAnn_Sal());
		
		int des=0;
		
		if(purp.equalsIgnoreCase("Car Loan"))
			 p=0.838;
		else if(purp.equalsIgnoreCase("Credit Card"))
			 p=0.877;
		else if(purp.equalsIgnoreCase("Debt Consolidation"))
			 p=0.831;
		else if(purp.equalsIgnoreCase("Educational Loan"))
			 p=0.810;
		else if(purp.equalsIgnoreCase("Home Improvement Loan"))
			 p=0.850;
		else if(purp.equalsIgnoreCase("House Loan"))
			 p=0.819;
		else if(purp.equalsIgnoreCase("Renewable Energy Loan"))
			 p=0.720;
		else if(purp.equalsIgnoreCase("Major Purchase Loan"))
			 p=0.887;
		else if(purp.equalsIgnoreCase("Medical Loan"))
			 p=0.788;
		else if(purp.equalsIgnoreCase("Moving Loan"))
			 p=0.789;
		else if(purp.equalsIgnoreCase("Small Business Loan"))
			 p=0.681;
		else if(purp.equalsIgnoreCase("Vacation Loan"))
			 p=0.839;
		else if(purp.equalsIgnoreCase("Wedding Loan"))
			 p=0.890;
		else
			p=0.815;
			
		double x = -0.30720295-(2.42709152*loaninc_ratio)-(1.61109691*0.01*ap.getWork_Ex_Year())+(2.04352172*0.001*result.getMths_since_last_delinq())-(1.99254429*0.1*result.getInq_last_6mths())-(1.05262637*0.1*result.getDelinq_2yrs())-(1.29378036*0.01*result.getOpen_acc())-(4.02421546*0.1*result.getPub_rec())-(1.41315905*result.getRevol_util())+(3.71048535*p)+(1.22659753*0.0001*result.getAgeon_file())-(6.17054018*0.01*des);
		 double  probability = 1/(1+Math.exp(-1*x));
		 double score =  probability*666.67;
		 return score;
	}
	
	public boolean frontEndRuleDeclined(ApplicationDetails application) throws ParseException
    {
		  int curYear = Calendar.getInstance().get(Calendar.YEAR);
          String dobYear = application.getDob();
          int age = curYear - Integer.parseInt(dobYear.substring(0,4));
          
          if(age > 65 || age < 18)
                 return true;
          
          int WorkExp = application.getWork_Ex_Year() * 12 + application.getWork_Ex_Mon();
          
          if(WorkExp < 6)
                 return true;
          
          if(application.getAnn_Sal() < 10000)
                 return true;
          
          return false;
    }

}
