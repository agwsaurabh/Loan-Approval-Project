function preventBack(){window.history.forward();}
  setTimeout("preventBack()", 0);
  window.onunload=function(){null};
  
/*function app(key, name, date, stat) {
	this.app_id= key;
	this.app_name= name;
	this.sub_date= date;
	this.stat= stat;
}
function myFunction() {
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
		var row = table.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = "&nbsp &nbsp" + A["app_id"].link("https://www.google.com");
		cell2.innerHTML = A["app_name"];
		cell3.innerHTML = A["sub_date"];
		cell4.innerHTML = A["stat"];	
	}
}*/