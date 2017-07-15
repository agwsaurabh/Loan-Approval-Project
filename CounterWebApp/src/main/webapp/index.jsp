<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
	<head>
		<title>Lena Bank Ltd</title>
		<!-- <link rel="stylesheet" href="resources/webpage/css/Welcome_Page.css"> -->
		<spring:url value="/resources/webpage/css/Welcome_Page.css" var="crunchifyCSS" />
		<link href="${crunchifyCSS}" rel="stylesheet" />
	</head>
	
	<body class="MainBody">
		<div>
			<img style="float: left" src='images/logofg.jpg' alt="Lena Bank Logo" width="250" height="180"/>
			<h1 class="BankName" align="right">Lena Bank</h1>
			<p class="Description" align="right">Loan Processing Application</p>
		</div>

		<div>
		<br>
			<hr size= "7px" noshade align= "right" >
			
			<h1 class= "Welcome"> 
				Welcome, Now get your Loan approved instantly !!!!
			</h1>
			
			<p class= "Paragraph">	
				Welcome to  Bank Loan processing system. Now get your loan approved immediately using 
				this cool and fully automated application.
			</p>
			<!--<form action = "application">
			<a class= "Link" href="application" target="_self">Submit an Application</a>
			</form>!-->
			<a class="link" href="application"> Submit an Application</a>
			
			<p class= "Paragraph">
				In order to Submit a new loan request, click on "Submit an application" link
			</p>
			
			<a class= "Link" href="application/submission/status" target="_self">View Applications</a>
			
			<p class= "Paragraph">
				For viewing existing loan applications, click on "View Applications" link
			</p>
			
			<a class= "Link" href="../../Dashboard Page/Html/Dashboard_Page.html" target="_self">Dashboard</a>
			
			<p class= "Paragraph">
				For viewing application monitoring information, click on "Dashboard" link
			</p>
		</div>
		
	</body>
</html>