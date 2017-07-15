package com.mkyong.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class ApplicationDetails
{
       private String first_Name;
       private String middle_Name;
       private String last_Name;
       private String dob;
       private String marital_Status;
       private String ssn;
       private long loan_Amount;
       private String loan_Purpose;
       private String home_Add_Line1;
       private String home_Add_Line2;
       private String home_City;
       private String home_State;
       private int home_Zip;
       private long ph_Home;
       private long ph_Office;
       private long mobile;
       private String email;
       private String description;
       private String emp_Name;
       private long ann_Sal;
       private int work_Ex_Year;
       private int work_Ex_Mon;
       private String designation;
       private String emp_Add_Line1;
       private String emp_Add_Line2;
       private String emp_City;
       private String emp_State;
       private int emp_Zip;
       
       public String getFirst_Name() {
             return first_Name;
       }
       public void setFirst_Name(String first_Name) {
             this.first_Name = first_Name;
       }
       public String getMiddle_Name() {
             return middle_Name;
       }
       public void setMiddle_Name(String middle_Name) {
             this.middle_Name = middle_Name;
       }
       public String getLast_Name() {
             return last_Name;
       }
       public void setLast_Name(String last_Name) {
             this.last_Name = last_Name;
       }
       public String getDob() {
             return dob;
       }
       public void setDob(String dob) {
             this.dob = dob;
       }
       public String getMarital_Status() {
             return marital_Status;
       }
       public void setMarital_Status(String marital_Status) {
             this.marital_Status = marital_Status;
       }
       public String getSsn() {
             return ssn;
       }
       public void setSsn(String ssn) {
             this.ssn = ssn;
       }
       public long getLoan_Amount() {
             return loan_Amount;
       }
       public void setLoan_Amount(long loan_Amount) {
             this.loan_Amount = loan_Amount;
       }
       public String getLoan_Purpose() {
             return loan_Purpose;
       }
       public void setLoan_Purpose(String loan_Purpose) {
             this.loan_Purpose = loan_Purpose;
       }
       public String getHome_Add_Line1() {
             return home_Add_Line1;
       }
       public void setHome_Add_Line1(String home_Add_Line1) {
             this.home_Add_Line1 = home_Add_Line1;
       }
       public String getHome_Add_Line2() {
             return home_Add_Line2;
       }
       public void setHome_Add_Line2(String home_Add_Line2) {
             this.home_Add_Line2 = home_Add_Line2;
       }
       public String getHome_City() {
             return home_City;
       }
       public void setHome_City(String home_City) {
             this.home_City = home_City;
       }
       public String getHome_State() {
             return home_State;
       }
       public void setHome_State(String home_State) {
             this.home_State = home_State;
       }
       public int getHome_Zip() {
             return home_Zip;
       }
       public void setHome_Zip(int home_Zip) {
             this.home_Zip = home_Zip;
       }
       public long getPh_Home() {
             return ph_Home;
       }
       public void setPh_Home(long ph_Home) {
             this.ph_Home = ph_Home;
       }
       public long getPh_Office() {
             return ph_Office;
       }
       public void setPh_Office(long ph_Office) {
             this.ph_Office = ph_Office;
       }
       public long getMobile() {
             return mobile;
       }
       public void setMobile(long mobile) {
             this.mobile = mobile;
       }
       public String getEmail() {
             return email;
       }
       public void setEmail(String email) {
             this.email = email;
       }
       public String getDescription() {
             return description;
       }
       public void setDescription(String description) {
             this.description = description;
       }
       public String getEmp_Name() {
             return emp_Name;
       }
       public void setEmp_Name(String emp_Name) {
             this.emp_Name = emp_Name;
       }
       public long getAnn_Sal() {
             return ann_Sal;
       }
       public void setAnn_Sal(long ann_Sal) {
             this.ann_Sal = ann_Sal;
       }
       public int getWork_Ex_Year() {
             return work_Ex_Year;
       }
       public void setWork_Ex_Year(int work_Ex_Year) {
             this.work_Ex_Year = work_Ex_Year;
       }
       public int getWork_Ex_Mon() {
             return work_Ex_Mon;
       }
       public void setWork_Ex_Mon(int work_Ex_Mon) {
             this.work_Ex_Mon = work_Ex_Mon;
       }
       public String getDesignation() {
             return designation;
       }
       public void setDesignation(String designation) {
             this.designation = designation;
       }
       public String getEmp_Add_Line1() {
             return emp_Add_Line1;
       }
       public void setEmp_Add_Line1(String emp_Add_Line1) {
             this.emp_Add_Line1 = emp_Add_Line1;
       }
       public String getEmp_Add_Line2() {
             return emp_Add_Line2;
       }
       public void setEmp_Add_Line2(String emp_Add_Line2) {
             this.emp_Add_Line2 = emp_Add_Line2;
       }
       public String getEmp_City() {
             return emp_City;
       }
       public void setEmp_City(String emp_City) {
             this.emp_City = emp_City;
       }
       public String getEmp_State() {
             return emp_State;
       }
       public void setEmp_State(String emp_State) {
             this.emp_State = emp_State;
       }
       public int getEmp_Zip() {
             return emp_Zip;
       }
       public void setEmp_Zip(int emp_Zip) {
             this.emp_Zip = emp_Zip;
       }
       
       @Override
       public String toString() {
             return "ApplicationDetails [first_Name=" + first_Name + ", middle_Name=" + middle_Name + ", last_Name="
                           + last_Name + ", dob=" + dob + ", marital_Status=" + marital_Status + ", ssn=" + ssn + ", loan_Amount="
                           + loan_Amount + ", loan_Purpose=" + loan_Purpose + ", home_Add_Line1=" + home_Add_Line1
                           + ", home_Add_Line2=" + home_Add_Line2 + ", home_City=" + home_City + ", home_State=" + home_State
                           + ", home_Zip=" + home_Zip + ", ph_Home=" + ph_Home + ", ph_Office=" + ph_Office + ", mobile=" + mobile
                           + ", email=" + email + ", description=" + description + ", emp_Name=" + emp_Name + ", ann_Sal="
                           + ann_Sal + ", work_Ex_Year=" + work_Ex_Year + ", work_Ex_Mon=" + work_Ex_Mon + ", designation="
                           + designation + ", emp_Add_Line1=" + emp_Add_Line1 + ", emp_Add_Line2=" + emp_Add_Line2 + ", emp_City="
                           + emp_City + ", emp_State=" + emp_State + ", emp_Zip=" + emp_Zip + "]";
       }
}
