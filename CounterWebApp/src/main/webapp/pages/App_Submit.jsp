<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
	<head>
		<title>View Application</title>
		<spring:url value="/resources/webpage/css/App_Submit.css" var="crunchifyCSS" />
		<link href="${crunchifyCSS}" rel="stylesheet" />
		<spring:url value="/resources/webpage/js/App_Submit.js" var="crunchifyJS" />
		<script src="${crunchifyJS}"></script>
	</head>
	
	<body class="MainBody">
		<div class= "ViewHead">
			<h1 class= "ViewHead"> Application Submitted Successfully </h1>
			<p class= "Paragraph"> CONGRATULATIONS !!!! <br>Your application is submitted successfully. Our automated system will determine if your application is
accepted or not. </p>
		</div>
		<div align= "right">
			<br>
			<input class= "button_back" action="action" onclick="window.location.href='../index.jsp'" type="button" value="Home" />
			<input class= "button_back" action="action" onclick="window.location.href='View_Page.jsp'" type="button" value="View Applications" />
		</div>
	</body>
</html>