<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
	<head>
		<title>View Application</title>
		<spring:url value="/resources/webpage/css/View_Page.css" var="crunchifyCSS" />
		<link href="${crunchifyCSS}" rel="stylesheet" />
		<spring:url value="/resources/webpage/js/View_Page.js" var="crunchifyJS" />
		<script src="${crunchifyJS}"></script>
	</head>
	
	<body class="MainBody" onload="check()">
		<div>
			<h1 class= "ViewHead"> View Applications </h1>
			<p class= "Paragraph">	
				You can view the applications here
			</p>
		</div>
		<br><br>
		<table id="View_Table">
			   
		</table>
		<br>
		<input class= "button_back" action="action" onclick="window.history.go(-1); return false;" type="button" value="Back" style="float:right"/>
	</body>
</html>