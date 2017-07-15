function app(key, name, date, stat) {
	this.app_id= key;
	this.app_name= name;
	this.sub_date= date;
	this.stat= stat;
}
/*
function myFunction() {
/*	if(window.localstorage)
{
	console.log("Yes");
}
else{
	console.log("No");
}
    var table = document.getElementById("View_Table");
	var row = table.insertRow(0);
	row.style.backgroundColor ="#CCCCCC";
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = "&#9660; Application ID".bold();
	cell2.innerHTML = "&#9660; Applicant Name".bold();
	cell3.innerHTML = "&#9660; Submitted Date".bold();
	cell4.innerHTML = "&#9660; Status".bold();
	for(var i=1;i<=4;i++)
	{
		var A = new app("1","Pankaj Bhomia","12/10/2013","Declined");
		//var app_id = A["app_id"];
		//ID_JSON = JSON.stringify(app_id);
		var row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = "&nbsp &nbsp" + A["app_id"].link("../../View Application Detail/Html/View_App_Det.html");
		cell2.innerHTML = A["app_name"];
		cell3.innerHTML = A["sub_date"];
		cell4.innerHTML = A["stat"];
		//localstorage.setItem("App_ID",ID_JSON);		
	}
}*/
function check() {
	var Obj = [{ "app_id": "435678","app_name": "Vinay","sub_date": "10/12/2014","stat": "Approved"},
				{ "app_id": "435674","app_name": "Saurabh","sub_date": "17/11/2007","stat": "Declined"},
				{ "app_id": "435672","app_name": "Kriti","sub_date": "03/07/2012","stat": "Approved"},
				{ "app_id": "435671","app_name": "Dinesh","sub_date": "07/02/2001","stat": "Approved"},
				{ "app_id": "435673","app_name": "Lalit","sub_date": "25/05/2004","stat": "Declined"},
				{ "app_id": "435675","app_name": "Pavan","sub_date": "29/02/2004","stat": "Approved"},
	];
	var myJSON = JSON.stringify(Obj);
	/*xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = JSON.parse(this.responseText);
	    }
	}
	xmlhttp.open("POST", "http://localhost:8080/CounterWebApp/application/submission/status", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send();
	var myObj = localStorage.getItem("localdata");
	console.log(myObj);*/
	var myObj = JSON.parse(myJSON);
	var table = document.getElementById("View_Table");
	var row = table.insertRow(0);
	row.style.backgroundColor ="#CCCCCC";
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = "&#9660; Application ID".bold();
	cell2.innerHTML = "&#9660; Applicant Name".bold();
	cell3.innerHTML = "&#9660; Submitted Date".bold();
	cell4.innerHTML = "&#9660; Status".bold();
	for(var i=1;i<=myObj.length;i++)
	{
		var row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		//cell1.innerHTML = "&nbsp &nbsp" + myObj[i-1].app_id.link(test(myObj[i-1].app_id));
		/*a = document.createElement('a');
		a.href = "javascript:delay('../../View Application Detail/Html/View_App_Det.html')";//'../../View Application Detail/Html/View_App_Det.html';
		a.innerHTML = myObj[i-1].app_id;
		a.onclick = 'return test(myObj[i-1].app_id)';
		cell1.appendChild(a);*/
		var key = myObj[i-1].app_id;
		cell1.innerHTML = '<a href="javascript:delay()" onclick= "test(' + key + ')">' + myObj[i-1].app_id + '</a>'
		cell2.innerHTML = myObj[i-1].app_name;
		cell3.innerHTML = myObj[i-1].sub_date;
		cell4.innerHTML = myObj[i-1].stat;
		//localstorage.setItem("App_ID",ID_JSON);
	}

}
function test(x) {
	console.log(x);
	var xJSON = JSON.stringify(x);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "http://localhost:8080/CounterWebApp/application/submission/status/inquiry", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(xJSON);
	return true;
}
function delay () {
    setTimeout( function() { window.location = '../../pages/View_App_Det.jsp' },0);
}