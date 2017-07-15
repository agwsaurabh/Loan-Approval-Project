//  Check 'e' in type Number
if(window.localStorage)
{console.log("YES");
}
else 
{
	console.log("NO");
}
function myFunction() {
	var x = document.forms["Sub_App"];
	var app_data = {
		first_Name: x[0].value,
		middle_Name: x[1].value,
		last_Name: x[2].value,
		dob: x[3].value,
		marital_Status: x[4].value,
		ssn: x[5].value,
		loan_Amount: x[6].value,
		loan_Purpose: x[7].value,
		home_Add_Line1: x[8].value,
		home_Add_Line2: x[9].value,
		home_City: x[10].value,
		home_State: x[11].value,
		home_Zip: x[12].value,
		ph_Home: x[13].value,
		ph_Office: x[14].value,
		mobile: x[15].value,
		email: x[16].value,
		description: x[17].value,
		emp_Name: x[18].value,
		ann_Sal: x[19].value,
		work_Ex_Year: x[20].value,
		work_Ex_Mon: x[21].value,
		designation: x[22].value,
		emp_Add_Line1: x[23].value,
		emp_Add_Line2: x[24].value,
		emp_City: x[25].value,
		emp_State: x[26].value,
		emp_Zip: x[27].value
	};	
	var myJSON = JSON.stringify(app_data);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "http://localhost:8080/CounterWebApp/application/submission", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(myJSON);
	
	/*
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			txt += "<table border='1'>"
			for (x in myObj) {
				txt += "<tr><td>" + myObj[x].name + "</td></tr>";
			}
			txt += "</table>" 
			document.getElementById("demo").innerHTML = txt;
		}
	}
	xmlhttp.open("POST", "json_demo_db_post.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("x=" + dbParam);
	*/
	console.log(myJSON);
}

validate = function(){
	var error="";
	if(document.forms["Sub_App"]["First_Name"].value==""){
		error+="First Name is required <br>";
		
	} 
	if(document.forms["Sub_App"]["Last_Name"].value==""){
		error+="Last Name is required <br>";
		
	}
	if(document.forms["Sub_App"]["DOB"].value==""){
		error+="Date Of Birth is required <br>";
		
	}
	if(document.forms["Sub_App"]["Marital_Status"].value=="Options"){
		error+="Marital Status is required <br>";
		
	}
	if(document.forms["Sub_App"]["SSN"].value==""){
		error+="SSN Number is required <br>";
		
	}
	if(document.forms["Sub_App"]["Loan_Amount"].value==""){
		error+="Loan Amount is required <br>";
		
	}	
	if(document.forms["Sub_App"]["Loan_Purpose"].value=="Options"){
		error+="Loan Purpose is required <br>";
		
	}
	if(document.forms["Sub_App"]["Home_Add_Line1"].value==""){
		error+="Home Add Line1 is required <br>";
		
	}
	if(document.forms["Sub_App"]["Home_City"].value==""){
		error+="Home City is required <br>";
		
	}
	if(document.forms["Sub_App"]["Home_State"].value==""){
		error+="Home State is required <br>";
		
	}
	if(document.forms["Sub_App"]["Home_Zip"].value==""){
		error+="Postal Code is required <br>";
		
	}
	if(document.forms["Sub_App"]["Ph_Home"].value==""){
		error+="Home Phone is required <br>";
		
	}
	if(document.forms["Sub_App"]["Mobile"].value==""){
		error+="Mobile is required <br>";
		
	}
	if(document.forms["Sub_App"]["email"].value==""){
		error+="Email is required <br>";
		
	}
	if(document.forms["Sub_App"]["Emp_Name"].value==""){
		error+="Employer Name is required <br>";
		
	}
	if(document.forms["Sub_App"]["Ann_Sal"].value==""){
		error+="Annual Salary is required <br>";
		
	}
	if(document.forms["Sub_App"]["Work_Ex_Year"].value==""){
		error+="Work experience in years is required <br>";
		
	}
	if(document.forms["Sub_App"]["Work_Ex_Mon"].value==""){
		error+="Work experience in months is required <br>";
		
	}
	if(document.forms["Sub_App"]["Emp_Add_Line1"].value==""){
		error+="Employer Address Line 1 is required <br>";
		
	}	
	if(document.forms["Sub_App"]["Emp_City"].value==""){
		error+="Employer City is required <br>";
		
	}
	if(document.forms["Sub_App"]["Emp_State"].value==""){
		error+="Employer State is required <br>";
		
	}
	if(document.forms["Sub_App"]["Emp_Zip"].value==""){
		error+="Employer Postal Code is required <br>";
		
	}  //Form is submitted even if number is not a 5 digit number
	if(           validateForm1(document.forms["Sub_App"]["First_Name"])&&
                              validateForm2(document.forms["Sub_App"]["Middle_Name"])&&
                              validateForm3(document.forms["Sub_App"]["Last_Name"])&&
                              validateForm4(document.forms["Sub_App"]["DOB"])&&
                              validateForm5(document.forms["Sub_App"]["Marital_Status"])&&
                              validateForm6(document.forms["Sub_App"]["SSN"])&&
                              validateForm7(document.forms["Sub_App"]["Loan_Amount"])&&
                              validateForm8(document.forms["Sub_App"]["Loan_Purpose"])&&
                              validateForm9(document.forms["Sub_App"]["Home_Add_Line1"])&&
                              validateForm10(document.forms["Sub_App"]["Home_Add_Line2"])&&
                              validateForm11(document.forms["Sub_App"]["Home_City"])&&
                              validateForm12(document.forms["Sub_App"]["Home_State"])&&
                              validateForm13(document.forms["Sub_App"]["Home_Zip"])&&
                              validateForm14(document.forms["Sub_App"]["Ph_Home"])&&
                              validateForm15(document.forms["Sub_App"]["Ph_Office"])&&
                              validateForm16(document.forms["Sub_App"]["Mobile"])&&
                              validateForm17(document.forms["Sub_App"]["email"])&&
                              validateForm18(document.forms["Sub_App"]["Emp_Name"])&&
                              validateForm19(document.forms["Sub_App"]["Ann_Sal"])&&
                              validateForm20(document.forms["Sub_App"]["Designation"])&&
                              validateForm21(document.forms["Sub_App"]["Emp_Add_Line1"])&&
                              validateForm22(document.forms["Sub_App"]["Emp_Add_Line2"])&&
                              validateForm23(document.forms["Sub_App"]["Emp_City"])&&
                              validateForm24(document.forms["Sub_App"]["Emp_State"])&&
                              validateForm25(document.forms["Sub_App"]["Emp_Zip"])&&
                              validateForm26(document.forms["Sub_App"]["Work_Ex_Year"])&&
                              validateForm27(document.forms["Sub_App"]["Work_Ex_Mon"])
                             
               )
	{
		myFunction();
		window.location = "javascript:delay()";
	}
	document.getElementById("Error").innerHTML =error;	
}
function delay () {
    setTimeout( function() { window.location = 'pages/App_Submit.jsp' }, 1000 );
}

function validateForm1(x) {
   // var x = document.forms["Per_Det"]["First_Name"].value;
    if (x.value == "") {
		 document.getElementById("ID1").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>254){
	 document.getElementById("ID1").innerHTML = " Less than 255 characters only" ;
        return false;
		}
	else if(!(/^[a-zA-Z]+$/.test(x.value))){
	 document.getElementById("ID1").innerHTML = " Only characters" ;
        return false;
		}
	document.getElementById("ID1").innerHTML = ""
		return true;		
}
function validateForm2(x) {
    if(x.value.length>254){
	 document.getElementById("ID2").innerHTML = "Less than 255 characters" ;
        return false;
		}
	else if(!(/^[a-zA-Z]+$/.test(x.value))&&x.value.length!=0){
	 document.getElementById("ID2").innerHTML = " Only characters" ;
        return false;
		}
	document.getElementById("ID2").innerHTML = ""
		return true;		
}
function validateForm3(x) {
    if (x.value == "") {
		 document.getElementById("ID3").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>254){
	 document.getElementById("ID3").innerHTML = "Less than 255 characters" ;
        return false;
		}
	else if(!(/^[a-zA-Z]+$/.test(x.value))){
	 document.getElementById("ID3").innerHTML = " Only characters" ;
        return false;
		}
	document.getElementById("ID3").innerHTML = ""
		return true;		
}
function validateForm4(x) {
    if (x.value == "") {
		 document.getElementById("ID4").innerHTML = "Required" ;
        return false;
    }
	document.getElementById("ID4").innerHTML = ""
		return true;		
}
function validateForm5(x) {
    if (x.value == "Options") {
		 document.getElementById("ID5").innerHTML = "Required" ;
        return false;
    }
	document.getElementById("ID5").innerHTML = ""
		return true;		
}
function validateForm6(x) {
    if (x.value == "") {
		 document.getElementById("ID6").innerHTML = "Required" ;
        return false;
    }
	else if(x.value.length>=9){
	 document.getElementById("ID6").innerHTML = "Can't be Greater than 9 didgits" ;
        return false;
		}
	document.getElementById("ID6").innerHTML = ""
		return true;		
}
function validateForm7(x) {
    if (x.value == "") {
		 document.getElementById("ID7").innerHTML = "Required" ;
        return false;
    }
	document.getElementById("ID7").innerHTML = ""
		return true;		
}
function validateForm8(x) {
    if (x.value == "Options") {
		 document.getElementById("ID8").innerHTML = "Required" ;
        return false;
    }
	document.getElementById("ID8").innerHTML = ""
		return true;		
}
function validateForm9(x) {
    if (x.value == "") {
		 document.getElementById("ID9").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>254){
	 document.getElementById("ID9").innerHTML = "Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID9").innerHTML = ""
		return true;		
}
function validateForm10(x) {
    if(x.value.length>254){
	 document.getElementById("ID10").innerHTML = "Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID10").innerHTML = ""
		return true;		
}
function validateForm11(x) {
    if (x.value == "") {
		 document.getElementById("ID11").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>99){
	 document.getElementById("ID11").innerHTML = "Less than 100 characters" ;
        return false;
		}
	document.getElementById("ID11").innerHTML = ""
		return true;		
}
function validateForm12(x) {
    if (x.value == "") {
		 document.getElementById("ID12").innerHTML = "Required" ;
        return false;
    }
	else if(x.value.length>99){
	 document.getElementById("ID12").innerHTML = "Less than 100 characters" ;
        return false;
		}
	document.getElementById("ID12").innerHTML = ""
		return true;		
}
function validateForm13(x) {
    if (x.value == "") {
		 document.getElementById("ID13").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length!=5){
	 document.getElementById("ID13").innerHTML = "Must have 5 didgits" ;
        return false;
		}
	document.getElementById("ID13").innerHTML = ""
		return true;		
}
function validateForm14(x) {
    if (x.value == "") {
		 document.getElementById("ID14").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length!=10){
	 document.getElementById("ID14").innerHTML = "Must have 10 didgits" ;
        return false;
		}
	document.getElementById("ID14").innerHTML = ""
		return true;		
}
function validateForm15(x) {
	if(x.value.length!=10&&x.value.length!=0){
	 document.getElementById("ID15").innerHTML = "Must have 10 didgits" ;
        return false;
		}
	document.getElementById("ID15").innerHTML = ""
		return true;		
}
function validateForm16(x) {
    if (x.value == "") {
		 document.getElementById("ID16").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length!=10){
	 document.getElementById("ID16").innerHTML = "Must have 10 didgits" ;
        return false;
		}
	document.getElementById("ID16").innerHTML = ""
		return true;		
}
function validateForm17(x) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // return re.test(x.value);
    if (x.value == "") {
		 document.getElementById("ID17").innerHTML = "Required" ;
        return false;
    }	
	else if(!(re.test(x.value))){
	 document.getElementById("ID17").innerHTML = "Write a vaild email" ;
        return false;
		}
	document.getElementById("ID17").innerHTML = ""
		return true;		
}
function validateForm18(x) {
   // var x = document.forms["Per_Det"]["First_Name"].value;
    if (x.value == "") {
		 document.getElementById("ID18").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>254){
	 document.getElementById("ID18").innerHTML = " Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID18").innerHTML = ""
		return true;		
}
function validateForm19(x) {
   // var x = document.forms["Per_Det"]["First_Name"].value;
    if (x.value == "") {
		 document.getElementById("ID19").innerHTML = "Required" ;
        return false;
    }
	document.getElementById("ID19").innerHTML = ""
		return true;		
}
function validateForm20(x) {
	if(x.value.length>254){
	 document.getElementById("ID20").innerHTML = "Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID20").innerHTML = ""
		return true;		
}
function validateForm21(x) {
    if (x.value == "") {
		 document.getElementById("ID21").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>254){
	 document.getElementById("ID21").innerHTML = "Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID21").innerHTML = ""
		return true;		
}
function validateForm22(x) {
    if(x.value.length>254){
	 document.getElementById("ID22").innerHTML = "Less than 255 characters" ;
        return false;
		}
	document.getElementById("ID22").innerHTML = ""
		return true;		
}
function validateForm23(x) {
    if (x.value == "") {
		 document.getElementById("ID23").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>99){
	 document.getElementById("ID23").innerHTML = "Less than 100 characters" ;
        return false;
		}
	document.getElementById("ID23").innerHTML = ""
		return true;		
}
function validateForm24(x) {
    if (x.value == "") {
		 document.getElementById("ID24").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length>99){
	 document.getElementById("ID24").innerHTML = "Less than 100 characters" ;
        return false;
		}
	document.getElementById("ID24").innerHTML = ""
		return true;		
}
function validateForm25(x) {
    if (x.value == "") {
		 document.getElementById("ID25").innerHTML = "Required" ;
        return false;
    }	
	else if(x.value.length!=5){
	 document.getElementById("ID25").innerHTML = "Must have 5 didgits" ;
        return false;
		}
	document.getElementById("ID25").innerHTML = ""
		return true;		
}
function validateForm26(x) {
    if (x.value == "") {
		 document.getElementById("ID26").innerHTML = "Year Required" ;
        return false;
    }
	else if (x.value<0) {
		 document.getElementById("ID26").innerHTML = "Year can't be negative" ;
        return false;
    }
	document.getElementById("ID26").innerHTML = ""
		return true;		
}
function validateForm27(x) {
    if (x.value == "") {
		 document.getElementById("ID27").innerHTML = "Month Required" ;
        return false;
    }
	else if (x.value<0) {
		 document.getElementById("ID27").innerHTML = "Month can't be negative" ;
        return false;
    }
	document.getElementById("ID27").innerHTML = ""
		return true;		
}