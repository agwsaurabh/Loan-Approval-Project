package com.mkyong.controller;
import java.sql.*;
public class Driver 
{
    //public static void main(String[] args) {

	String dbUrl = "jdbc:mysql://localhost:3306/loandb";
	String user = "root";
	String pass = "root";

	

	   public BureauData getBData(int ssn)
	   {
		   BureauData bd = new BureauData();
		   try 
			{
			   
			   Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/loandb", "root", "root");
			   Statement myStmt = myConn.createStatement();
			   
			   ResultSet myRes = myStmt.executeQuery("select * from bureau_data where id= "+ssn);
			   //System.out.println(myRes);
			   while(myRes.next()) 
			   {
				   bd.setMths_since_last_delinq(myRes.getInt("mths_since_last_delinq"));
				   bd.setInq_last_6mths(Integer.parseInt(myRes.getString("inq_last_6mths")));
				   bd.setDelinq_2yrs(Integer.parseInt(myRes.getString("delinq_2yrs")));
				   bd.setAgeon_file(Integer.parseInt(myRes.getString("ageon_file")));
				   bd.setRevol_util(Double.parseDouble(myRes.getString("revol_util")));
				   bd.setOpen_acc(Integer.parseInt(myRes.getString("open_acc")));
				   bd.setPub_rec(Integer.parseInt(myRes.getString("pub_rec")));
				   bd.setId(Integer.parseInt(myRes.getString("id"))); 
			   }
			   myRes.close();
			   
			}
			catch (Exception e) 
			{
				e.printStackTrace();
		    }
		   return bd;
	   }
	   


	   public int insertDetails(ApplicationDetails application)
	   {
		   int id=0;
		   try 
			{
			   Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
			   Statement myStmt = myConn.createStatement();
			   
			   String sql = "insert into application_details"
			                             + " (first_Name,middle_name,last_Name,dob,marital_Status,ssn,loan_Amount,loan_Purpose,description,home_Add_Line1,home_Add_Line2,home_City,home_State,home_Zip,ph_Home,ph_Office,mobile,email,emp_Name,ann_Sal,designation,emp_Add_Line1,emp_add_Line2,emp_City,emp_State,work_Ex_Year,work_Ex_Mon,emp_Zip)"
                                         + "values('"+application.getFirst_Name()+"','"+application.getMiddle_Name()+"','"+application.getLast_Name()+"','"+application.getDob()+"','"+application.getMarital_Status()+"','"+application.getSsn()+"','"+application.getLoan_Amount()+"','"+application.getLoan_Purpose()+"','"+application.getDescription()+"','"+application.getHome_Add_Line1()+"','"+application.getHome_Add_Line2()+"','"+application.getHome_City()+"','"+application.getHome_State()+"','"+application.getHome_Zip()+"','"+application.getPh_Home()+"','"+application.getPh_Office()+"','"+application.getMobile()+"','"+application.getEmail()+"','"+application.getEmp_Name()+"','"+application.getAnn_Sal()+"','"+application.getDesignation()+"','"+application.getEmp_Add_Line1()+"','"+application.getEmp_Add_Line2()+"','"+application.getEmp_City()+"','"+application.getEmp_State()+"','"+application.getWork_Ex_Year()+"','"+application.getWork_Ex_Mon()+"','"+application.getEmp_Zip()+"')";

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
   
	   public void updateDetails(int id, double scor, String s)
	   {
		   
		   try 
			{
			   Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
			   Statement myStmt = myConn.createStatement();
			   String sql="update application_details"+" set score="+scor+", decline_Reason='"+s+"' where application_id="+id;
			   myStmt.executeUpdate(sql);
			} 
		   catch (Exception e) 
		   {
			   e.printStackTrace();
		   }
	   }

   /*DELETE
   String sql="delete from temp"+" where FirstName='ben'"; int rowsAffected=
   myStmt.executeUpdate(sql); System.out.println(rowsAffected);*/
   
	   /*public void selectStatus(ApplicationStatus as)
	   {
		   
		   try 
			{
			   Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
			   Statement myStmt = myConn.createStatement();
			   ResultSet myRes = myStmt.executeQuery("select * from application_status");
			   while(myRes.next()) 
			   {
				   System.out.println(myRes.getString("first_name")+" "+myRes.getString("last_name")); 
			   }
			} 
		   catch (Exception e) 
		   {
			   e.printStackTrace();
		   }
	   }*/
   
	  public void insertStatus(ApplicationStatus as)
	  {
		  try 
			{
			  Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
			   Statement myStmt = myConn.createStatement();
			   
          String sql = "insert into application_status" + " (applicant_name,submit_date,status,application_id)" + "values('"+as.getApplicant_name()+"','"+as.getSubmit_date()+"','"+as.getStatus()+"','"+as.getApplication_id()+"')";
          myStmt.executeUpdate(sql);
          
	  } 
		catch (Exception e) 
		{
			e.printStackTrace();
	    }
	  }
   
	/*  public void updateStatus(int id, float score)
	  {
		  try 
			{
			  Class.forName("com.mysql.jdbc.Driver");  
			   Connection myConn = DriverManager.getConnection(dbUrl, user, pass);
			   Statement myStmt = myConn.createStatement();
			   
		  String sql="update application_status"+" set as.Score=score"+" where FirstName='ben'";
		  myStmt.executeUpdate(sql); System.out.println("Update Complete");
		  
	  } 
		catch (Exception e) 
		{
			e.printStackTrace();
	    }
      }*/

    

}


