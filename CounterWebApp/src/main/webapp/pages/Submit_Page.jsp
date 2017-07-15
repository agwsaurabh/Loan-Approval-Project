<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
	<head>
		<title>Submit Application</title>
		<!-- <link rel="stylesheet" href="../CSS/Submit_Page.css"> -->
		<spring:url value="/resources/webpage/css/SubmitPage.css" var="crunchifyCSS" />
		<link href="${crunchifyCSS}" rel="stylesheet" />
	</head>
	
<body class="MainBody">
		<div>
			<h1 class= "SubmitHead"> Submit New Application </h1>
		</div>
<br>	
	<form name="Sub_App" id="Sub_App">		
		<div class="wrap">
			<div class="fleft">
					<span class= "span">
					<label class= "Left_Label">First Name</label><input  class= "Left_Input" id="First_Name" type="text" name= "First_Name" placeholder="First Name" maxlength="255" onblur="validateForm1(this)"> 
					<p id="ID1" class= "iderror"> </p>
					</span>
					<span class= "span">
					<label class= "Left_Label">Middle Name</label><input class= "Left_Input" type = "text" name= "Middle_Name" placeholder="Middle Name" maxlength="255" onblur="validateForm2(this)"> <p id="ID2" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Left_Label">Last Name</label><input  class= "Left_Input" type="text" name= "Last_Name" placeholder="Last Name" maxlength="255" onblur= "validateForm3(this)"> <p id="ID3" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Left_Label">Date of Birth</label><input class= "DoB" type="date" name="DOB" onblur= "validateForm4(this)"> <p id="ID4" class= "iderror"></p>
					</span>
					<span class= "span">
						<label class= "Left_Label" style= "width: 100%">	Marital Status
							<select style= "width: 32%" name="Marital_Status" class= "Box" onblur= "validateForm5(this)"> 
								<option value="Options" style= "width: 30%">Options</option>
								<option value="Single">Single</option>
								<option value="Married">Married</option>
								<option value="Separated">Separated</option>
								<option value="Divorced">Divorced</option>
								<option value="Widowed">Widowed</option>
							</select><p id="ID5" style= "width: 50%" class= "iderror"></p>
						</label> 
					</span>
					<span class= "span">
					<label class= "Left_Label">SSN Number</label><input class= "Left_Input" type="number" name= "SSN" placeholder="SSN Number" onblur= "validateForm6(this)"> <p id="ID6" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Left_Label">Loan Amount</label><input class= "Left_Input" type="number" name= "Loan_Amount" placeholder="Loan Amount" onblur= "validateForm7(this)"> <p id="ID7" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Left_Label" style= "width: 100%">	Loan Purpose
						<select name="Loan_Purpose" style= "width: 32%" class= "Box" onblur= "validateForm8(this)">
							<option value="Options">Options</option>
							<option value="debt_consolidation">Debt Consolidation</option>
							<option value="car">Car Loan</option>
							<option value="credit_card">Credit Card</option>
							<option value="educational">Educational Loan</option>
							<option value="home_improvement">Home Improvement Loan</option>
							<option value="house">House Loan</option>
							<option value="renewable_energy">Renewable Energy Loan</option>
							<option value="major_purchase">Major Purchase Loan</option>
							<option value="medical">Medical Loan</option>
							<option value="moving">Moving Loan</option>
							<option value="small_business">Small Business Loan</option>
							<option value="vacation">Vacation Loan</option>
							<option value="wedding">Wedding Loan</option>
							<option value="other">Other</option>
						</select><p id="ID8" style= "width: 50%" class= "iderror"></p>
					</label>
					</span>
			</div>
			<div class="fright">
				<p class= "Heading"> &nbsp Address </p>
			</div>
			<div class="fright_box">
				<div>
					<span class= "span">
					<label class= "Right_Label">Address Line 1</label><input class= "Right_Input" type="text" name= "Home_Add_Line1" placeholder="Address Line 1" maxlength="255" onblur= "validateForm9(this)"> <p id="ID9" class= "iderror"></p>				
					</span>
					<span class= "span">
					<label class= "Right_Label">Address Line 2</label><input class= "Right_Input" type = "text" name= "Home_Add_Line2" placeholder="Address Line 2" maxlength="255" onblur= "validateForm10(this)"> <p id="ID10" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Right_Label">City</label><input class= "Right_Input" type="text" name= "Home_City" placeholder="City" maxlength="100" onblur= "validateForm11(this)"> <p id="ID11" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Right_Label">State</label><input class= "Right_Input" type="text" name="Home_State" placeholder="State" maxlength="100" onblur= "validateForm12(this)"> <p id="ID12" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Right_Label">Postal Code</label><input class= "Right_Input" type="number" name="Home_Zip" placeholder="123456" onblur= "validateForm13(this)"> <p id="ID13" class= "iderror"></p>
					</span>
				</div>
			</div>
				
			<div class="fright">
				<br>
				<p class= "Heading">  &nbsp Contact Information</p>
			</div>
			<div class="fright_box">
				<div>
						<span class= "span">
						<label class= "Right_Label">Home Phone</label><input class= "Right_Input" type="number" name= "Ph_Home" placeholder="1234567890" onblur= "validateForm14(this)"> <p id="ID14" class= "iderror"></p> 				
						</span>
						<span class= "span">
						<label class= "Right_Label">Office Phone</label><input class= "Right_Input" type = "number" name= "Ph_Office" placeholder="1234567890" onblur= "validateForm15(this)"> <p id="ID15" class= "iderror"></p>
						</span>
						<span class= "span">
						<label class= "Right_Label">Mobile</label><input class= "Right_Input" type="number" name= "Mobile" placeholder="1234567890" onblur= "validateForm16(this)"> <p id="ID16" class= "iderror"></p>
						</span>
						<span class= "span">
						<label class= "Right_Label">Email Address</label><input class= "Right_Input" type="email" name="email" placeholder="test@test.com" onblur= "validateForm17(this)"> <p id="ID17" class= "iderror"></p>
						</span>	
				</div>
			</div>
		</div>
		
		<div>
			<label name= "Description" class= "Left_Label" style= "height:10px">Description</label><textarea rows="5" cols="145" class= "Description_Input" type="text" name= "Description" placeholder= "Describe the reason why you are applying for the loan "></textarea>	
		</div>
		<div>
		<br><br><br><br><br><br>
				<p class= "Heading">  Employment Details</p>
		</div>
		
		<div class= "Employment">
			<div class="wrap">
				<div class="Employ_fleft">
						<span class= "span">
						<label class= "Employ_Label">Employer Name</label><input class= "Left_Input" type="text" name= "Emp_Name" placeholder="Name" maxlength="255" onblur= "validateForm18(this)"> <p id="ID18" class= "iderror"></p>				
						</span>
						<span class= "span">
						<label class= "Employ_Label">Annual Salary</label><input class= "Left_Input" type = "number" name= "Ann_Sal" placeholder="Annual Salary" onblur= "validateForm19(this)"> <p id="ID19" class= "iderror"></p>
						</span>
				</div>
				<div class="Employ_fright">
						<span class= "span">
						<label class= "Employ_Label">Work Experience</label>
						<input class= "Right_Input" style= "margin-right: 10px; width:55px" type="number" name= "Work_Ex_Year" placeholder="Year" onblur= "validateForm26(this)"><input class= "Right_Input" style= "width:55px" type="number" name= "Work_Ex_Mon" placeholder="Month" onblur= "validateForm27(this)">			
						<p id="ID26" class= "iderror"></p> <p id="ID27" class= "iderror"></p>
						</span>
						<span class= "span">
						<label class= "Employ_Label">Designation</label><input class= "Right_Input" type = "text" name= "Designation" placeholder="Designation" maxlength="255" onblur= "validateForm20(this)"> <p id="ID20" class= "iderror"></p>
						</span>
				</div>
			
				<p class= "Heading" style= "margin-top:-1px">Address</p>
				<div class= "Emp_Add">
					<span class= "span">
					<label class= "Add_Label">Address Line 1</label><input class= "Add_Input" type="text" name= "Emp_Add_Line1" placeholder="Address Line 1" maxlength="255" onblur= "validateForm21(this)"> <p id="ID21" class= "iderror"></p>				
					</span>
					<span class= "span">
					<label class= "Add_Label">Address Line 2</label><input class= "Add_Input" type = "text" name= "Emp_Add_Line2" placeholder="Address Line 2" maxlength="255" onblur= "validateForm22(this)"> <p id="ID22" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Add_Label">Ciy</label><input class= "Add_Input" type="text" name= "Emp_City" placeholder="City" maxlength="100" onblur= "validateForm23(this)"> <p id="ID23" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Add_Label">State</label><input class= "Add_Input" type = "text" name= "Emp_State" placeholder="State" maxlength="100" onblur= "validateForm24(this)"> <p id="ID24" class= "iderror"></p>
					</span>
					<span class= "span">
					<label class= "Add_Label">Postal Code</label><input class= "Add_Input" type="number" name= "Emp_Zip" placeholder="123456" onblur= "validateForm25(this)"> <p id="ID25" class= "iderror"></p>
					</span>
				</div>
			</div>
		</div>
		<div align= "center">
				<p id= "Error" style= "color:RED;font-family:arial;" > </p>
				<br>
					<input class= "button_submit" type="button" value="Submit" onclick= "validate()">
					<input class= "button_cancel" action="action" onclick="window.history.go(-1); return false;" type="button" value="Cancel"/>
		</div>
	</form>
	<!--<input class= "button_submit" type="submit" value="Submit" onclick= "validate()"> -->
	<spring:url value="/resources/webpage/js/Submit_Page.js" var="crunchifyJS" />
	<script src="${crunchifyJS}"></script>
	</body>
</html>