package com.mkyong.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;



    //public static void main(String[] args) {

public class TestObj {

	static String dbUrl = "jdbc:mysql://localhost:3306/loandb";
	static String user = "root";
	static String pass = "root";
	
	   
		public static int insertDetails()
		   {
			   int id=0;
			   try 
				{
				   Class.forName("com.mysql.jdbc.Driver");  
				   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
				   Statement myStmt = myConn.createStatement();
				   ApplicationDetails ad = new ApplicationDetails();
				   ad.setFirst_Name("saurabh");
				   
				   String sql = "insert into application_details"
				                             + " (first_Name,middle_name,last_Name,dob,marital_Status,ssn,loan_Amount,loan_Purpose,description,home_Add_Line1,home_Add_Line2,home_City,home_State,home_Zip,ph_Home,ph_Office,mobile,email,emp_Name,ann_Sal,designation,emp_Add_Line1,emp_add_Line2,emp_City,emp_State,work_Ex_Year,work_Ex_Mon,emp_Zip)"
	                                         + "values( '"+ad.getFirst_Name()+"' , 'haha','jk','1223-09-09','hj','5',56,'56','44','77','8','hj','hj',54,9867465,648,64,'hj','hj',268345,'hj','hj','hj','hj','hj',6513,36845631,36512)";

				   myStmt.executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);//update
				     ResultSet rs = myStmt.getGeneratedKeys();
				     
				     while (rs.next()) {
				                  
				                           id = rs.getInt(1);
				              } 
				              rs.close();
				              
				} 
			   catch (Exception e) 
			   {
				   e.printStackTrace();
			   }
			   return id;
		   }
   
	
	
	public static void main(String args[])
	{
		int r=insertDetails();
		System.out.println(r);
	}


}
