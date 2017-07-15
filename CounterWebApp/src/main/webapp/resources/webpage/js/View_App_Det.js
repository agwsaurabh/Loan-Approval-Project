/*
var stat = {
	App_ID: localstorage.getItem("App_ID"),
	App_Stat: "In Progress",
	Score: "498",
	Reason: "Defaulted"
};
var app_data = {
	First_Name: "Nipun",
	Middle_Name: "-",
	Last_Name: "Kumar",
	DOB: "16/2/2014",
	Marital_Status: "Single",
	SSN: 5649879231,
	Loan_Amount: "46546541",
	Loan_Purpose: "Personal Loan",
	Home_Add_Line1: "abc",
	Home_Add_Line2: "xyz",
	Home_City: "Mumbai",
	Home_State: "Maharashtra",
	Home_Zip: "400083",
	Ph_Home: "871923",
	Ph_Office: "12434",
	Mobile: "2141",
	email: "jfandkjn@fdsn.com",
	Desc: "iaufnsklm ",
	Emp_Name: "sdf",
	Ann_Sal: "23423",
	Work_Ex_Year: "3",
	Work_Ex_Mon: "4",
	Des: "sdfsg",
	Emp_Add_Line1: "dgsgs",
	Emp_Add_Line2: "dsg",
	Emp_City: "sdg",
	Emp_State: "sdg",
	Emp_Zip: "sdgsdg"
};
*/
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
		document.getElementById("App_ID").innerHTML = myObj.name;
		/*document.getElementById("App_ID").innerHTML = myObj.App_ID;
		document.getElementById("App_Stat").innerHTML = myObj.App_Stat;
		document.getElementById("Score").innerHTML = myObj.Score;
		document.getElementById("Reason").innerHTML = myObj.Reason;
		document.getElementById("fname").innerHTML = myObj.First_Name;
		document.getElementById("mname").innerHTML = myObj.Middle_Name;
		document.getElementById("lname").innerHTML = myObj.Last_Name;
		document.getElementById("mar_stat").innerHTML = myObj.Marital_Status;
		document.getElementById("DoB").innerHTML = myObj.DOB;
		document.getElementById("ssn").innerHTML = myObj.SSN;
		document.getElementById("lamount").innerHTML = myObj.Loan_Amount;
		document.getElementById("loan_pur").innerHTML = myObj.Loan_Purpose;
		document.getElementById("hom_add1").innerHTML = myObj.Home_Add_Line1;
		document.getElementById("hom_add2").innerHTML = myObj.Home_Add_Line2;
		document.getElementById("hom_city").innerHTML = myObj.Home_City;
		document.getElementById("hom_state").innerHTML = myObj.Home_State;
		document.getElementById("hom_zip").innerHTML = myObj.Home_Zip;
		document.getElementById("ph_hom").innerHTML = myObj.Ph_Home;
		document.getElementById("ph_off").innerHTML = myObj.Ph_Office;
		document.getElementById("mob").innerHTML = myObj.Mobile;
		document.getElementById("email").innerHTML = myObj.email;
		document.getElementById("desc").innerHTML = myObj.Desc;
		document.getElementById("emp_name").innerHTML = myObj.Emp_Name;
		document.getElementById("ann_sal").innerHTML = myObj.Ann_Sal;
		document.getElementById("work_yr").innerHTML = myObj.Work_Ex_Year;
		document.getElementById("work_mon").innerHTML = myObj.Work_Ex_Mon;
		document.getElementById("des").innerHTML = myObj.Des;
		document.getElementById("emp_add1").innerHTML = myObj.Emp_Add_Line1;
		document.getElementById("emp_add2").innerHTML = myObj.Emp_Add_Line2;
		document.getElementById("emp_city").innerHTML = myObj.Emp_City;
		document.getElementById("emp_state").innerHTML = myObj.Emp_State;
		document.getElementById("emp_zip").innerHTML = myObj.Emp_Zip; */
    }
}
xmlhttp.open("POST", "https://www.w3schools.com/Js/json_demo.txt", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
/*
document.getElementById("App_ID").innerHTML = stat.App_ID;
document.getElementById("App_Stat").innerHTML = stat.App_Stat;
document.getElementById("Score").innerHTML = stat.Score;
document.getElementById("Reason").innerHTML = stat.Reason;
document.getElementById("fname").innerHTML = app_data.First_Name;
document.getElementById("mname").innerHTML = app_data.Middle_Name;
document.getElementById("lname").innerHTML = app_data.Last_Name;
document.getElementById("mar_stat").innerHTML = app_data.Marital_Status;
document.getElementById("DoB").innerHTML = app_data.DOB;
document.getElementById("ssn").innerHTML = app_data.SSN;
document.getElementById("lamount").innerHTML = app_data.Loan_Amount;
document.getElementById("loan_pur").innerHTML = app_data.Loan_Purpose;
document.getElementById("hom_add1").innerHTML = app_data.Home_Add_Line1;
document.getElementById("hom_add2").innerHTML = app_data.Home_Add_Line2;
document.getElementById("hom_city").innerHTML = app_data.Home_City;
document.getElementById("hom_state").innerHTML = app_data.Home_State;
document.getElementById("hom_zip").innerHTML = app_data.Home_Zip;
document.getElementById("ph_hom").innerHTML = app_data.Ph_Home;
document.getElementById("ph_off").innerHTML = app_data.Ph_Office;
document.getElementById("mob").innerHTML = app_data.Mobile;
document.getElementById("email").innerHTML = app_data.email;
document.getElementById("desc").innerHTML = app_data.Desc;
document.getElementById("emp_name").innerHTML = app_data.Emp_Name;
document.getElementById("ann_sal").innerHTML = app_data.Ann_Sal;
document.getElementById("work_yr").innerHTML = app_data.Work_Ex_Year;
document.getElementById("work_mon").innerHTML = app_data.Work_Ex_Mon;
document.getElementById("des").innerHTML = app_data.Des;
document.getElementById("emp_add1").innerHTML = app_data.Emp_Add_Line1;
document.getElementById("emp_add2").innerHTML = app_data.Emp_Add_Line2;
document.getElementById("emp_city").innerHTML = app_data.Emp_City;
document.getElementById("emp_state").innerHTML = app_data.Emp_State;
document.getElementById("emp_zip").innerHTML = app_data.Emp_Zip;*/
