<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>	<html>
		<head>
			<title>View Application</title>
			<spring:url value="/resources/webpage/css/View_App_Det.css" var="crunchifyCSS" />
			<link href="${crunchifyCSS}" rel="stylesheet" />
			
		</head>
		
		<body class="MainBody">
			<div class= "ViewHead">
				<h1 class= "ViewHead"> View Application Details </h1>
			</div>
			<div class="wrap">
				<div class="fleft_top">
					<p>Application ID</p>	
					<p>Application Status</p>	
					<p>Score</p>	
					<p>Decline Reason</p>
				</div>			
				<div class="fright_top">			
					<p id= "App_ID">435672</p>	
					<p id= "App_Stat">APPROVED</p>	
					<p id= "Score">630</p>	
					<p id= "Reason">None</p>
				</div>
			</div>
			
			<div>
			<p class= "Paragraph">Original Application</p>
			<hr size= "3px" noshade align= "right" color= "black">
			
			</div>
			<div class="wrap">
				<div class="fleft">
					
						<label class= "Left_Label">First Name</label><p id= "fname" class= "Left_Input" name="First_Name" name= "First_Name">Kriti</p>
						<label class= "Left_Label">Middle Name</label><p id= "mname" class= "Left_Input" name= "Middle_Name"><p>
						<label class= "Left_Label">Last Name</label><p id= "lname" class= "Left_Input" name= "Last_Name">Jain</p>
						<label class= "Left_Label">Date of Birth</label><p id= "DoB" class= "Left_Input" name="DOB">12/04/1939</p>
						<label class= "Left_Label">	Marital Status</label><p id= "mar_stat" class= "Left_Input" name="Mar_Stat">Married</p>
						<label class= "Left_Label">SSN Number</label><p id= "ssn" class= "Left_Input"name= "SSN">435-34-3422</p>
						<label class= "Left_Label">Loan Amount</label><p id= "lamount" class= "Left_Input" name= "Loan_Amount">5,000</p>
						<label class= "Left_Label">	Loan Purpose</label><p id= "loan_pur" class= "Left_Input" name="Loan_Pur">House Loan</p>
				</div>
				<div class="fright">
					<p class= "Heading"> &nbsp &nbsp Address </p>
				</div>
				<div class="fright_box">
					<div>
							<label class= "Right_Label">Address Line 1</label><p id= "hom_add1" class= "Right_Input" name= "Home_Add_Line1">12 Quicny Street </p>		
							<label class= "Right_Label">Address Line 2</label><p id= "hom_add2" class= "Right_Input" name= "Home_Add_Line2">Rapid City, SD, USA</p>
							<label class= "Right_Label">City</label><p id= "hom_city" class= "Right_Input" name= "Home_City" >Rapid City</p>
							<label class= "Right_Label">State</label><p id= "hom_state" class= "Right_Input" name="Home_State" >South Dakota</p>
							<label class= "Right_Label">Postal Code</label><p id= "hom_zip" class= "Right_Input" name="Home_Zip">57701</p>
					</div>
				</div>
					
				<div class="fright">
					<br>
					<p class= "Heading">  &nbsp &nbsp Contact Information</p>
				</div>
				<div class="fright_box">
					<div>
							<label class= "Right_Label">Home Phone</label><p id= "ph_hom" class= "Right_Input" name= "Ph_Home">647-345-7201</p>			
							<label class= "Right_Label">Office Phone</label><p id= "ph_off" class= "Right_Input" name= "Ph_Office">647-234-3257</p>
							<label class= "Right_Label">Mobile</label><p id= "mob" class= "Right_Input" name= "Mobile">746-342-3248</p>
							<label class= "Right_Label">Email Address</label><p id= "email" class= "Right_Input" name="Email">kriti@gmail.com</p>
					</div>
				</div>
			</div>
			
			<div>
				<label name= "Desc" class= "Left_Label" style= "height:10px">Description</label><p id= "desc" class= "Desc_Input" name= "Desc">Constructing house for my family</p>	
			</div>
			<div>
			<br><br><br><br><br><br>
					<p class= "Heading">  Employment Details</p>
			</div>
			
			<div class= "Employment">
				<div class="wrap">
					<div class="Employ_fleft">
							<label class= "Employ_Label">Employer Name</label><p id = "emp_name" class= "Left_Input" name= "Emp_Name">FICO</p>
							<label class= "Employ_Label">Annual Salary</label><p id = "ann_sal" class= "Left_Input" name= "Ann_Sal">1,00,000</p>
					</div>
					<div class="Employ_fright">
						
							<label class= "Employ_Label">Work Experience</label>
							<p id = "work_yr" class= "Right_Input" style= "margin-right: 10px; width:55px; margin-top:19px"name= "Work_Ex_Year">4</p> <p id = "work_mon" class= "Right_Input" style= "width:55px; margin-top:19px" name= "Work_Ex_Mon">3</p>
							<label class= "Employ_Label">Designation</label><p id = "des" style="margin-top:19px" class= "Right_Input" name= "Des">Senior Software Engineer</p>
						
					</div>
					<br><br><br><br><br><br><br><br>
					<p class= "Heading" style= "margin-top:-1px; font-weight: bold ">Address</p>
					
						<label class= "Add_Label">Address Line 1</label><p id = "emp_add1" class= "Add_Input" name= "Emp_Add_Line1">San Jose</p>			
						<label class= "Add_Label">Address Line 2</label><p id = "emp_add2" class= "Add_Input" name= "Emp_Add_Line2">California</p>
						<label class= "Add_Label">Ciy</label><p id = "emp_city" class= "Add_Input" name= "Emp_City">San Jose</p>
						<label class= "Add_Label">State</label><p id = "emp_state" class= "Add_Input" name= "Emp_State">California</p>
						<label class= "Add_Label">Postal Code</label><p id = "emp_zip" class= "Add_Input" name= "Emp_Zip">54501</p>
				</div>
			</div>
			<br><br>
			<input class= "button_back" action="action" onclick="window.history.go(-1); return false;" type="button" value="Back" style="float:right"/>
			<spring:url value="/resources/webpage/js/View_App_Det.js" var="crunchifyJS" />
			<script src="${crunchifyJS}"></script>
		</body>
	</html>