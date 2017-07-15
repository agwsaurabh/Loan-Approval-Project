package com.mkyong.controller;

import java.io.Console;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

//import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.ui.ModelMap;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.servlet.ModelAndView;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class BaseController {

               
               @RequestMapping(value="application")
           		public String submitpage()
           		{
           			return "pages/Submit_Page";
           		}
               
               @RequestMapping(value="application/submission/status")
               public String ApplicationStatus()
               {
            	   return "pages/View_Page";
               }
               

               
            	@RequestMapping(value="/application/submission", consumes= {"application/json", "text/plain", "*/*"}, produces= {"application/json; charset=UTF-8"}, method= {RequestMethod.POST})
           		public @ResponseBody ApplicationStatus save(@RequestBody ApplicationDetails application) 
               {
            		Driver dbConnect = new Driver();
                    ScoreCalc sc = new ScoreCalc();
                    ApplicationStatus appStatus = new ApplicationStatus();
                    
                    
                    BureauData bd =dbConnect.getBData(Integer.parseInt(application.getSsn()));
                    appStatus.setApplication_id(dbConnect.insertDetails(application));
                    
                    int id=appStatus.getApplication_id();
                    
                    appStatus.setApplicant_name(application.getFirst_Name()+" "+application.getMiddle_Name()+" "+application.getLast_Name());
                    
                    DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
                    Date date = new Date();
            		appStatus.setSubmit_date(dateFormat.format(date));
                    
                    
                    
                    try {
						if(!sc.frontEndRuleDeclined(application)){
						         double score= sc.getScore(application, bd);
						         
						         if(score>=400){
						                dbConnect.updateDetails(id, score,  "None");
						                appStatus.setStatus("Approved");
						                
						         }else{
						                
						                dbConnect.updateDetails(id, score, "Low Score");
						                appStatus.setStatus("Declined");
						         }
						   }
						   else{
							   
							   dbConnect.updateDetails(id, 0, "Not Eligible");
							   appStatus.setStatus("Declined");
             }
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
                       
                       
                       dbConnect.insertStatus(appStatus);
                 
                 
                 return appStatus;
          }

            	
 }
