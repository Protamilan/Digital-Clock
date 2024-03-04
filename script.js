const hr = new Date();
var hur = hr.getHours() - 12;
var hour = "0" + hur;
document.getElementById("#hr").innerHTML = hr.getHours() > 12 ? hour : hr.getHours() - 12;
const min = new Date();
document.querySelector(".min").innerHTML = min.getMinutes() < 10 ? "0" + min.getMinutes() : min.getMinutes();
if (hr.getHours() > 12) {
    document.querySelector(".cu").style.color = "#A25772";
}
else {
    document.querySelector(".co").style.color = "#A25772";
}
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const week = new Date();
let day = weekday[week.getDay()];
switch (day) {
    case "Sunday":
        document.querySelector(".sun").classList.add("day");
        break;
    case "Monday":
        document.querySelector(".mon").classList.add("day");
        break;
    case "Tuesday":
        document.querySelector(".tue").classList.add("day");
        break;
    case "Wednesday":
        document.querySelector(".wed").classList.add("day");
        break;
    case "Thursday":
        document.querySelector(".thu").classList.add("day");
        break;
    case "Friday":
        document.querySelector(".fri").classList.add("day");
        break;
    case "Saturday":
        document.querySelector(".sat").classList.add("day");
        break;
}
const num = new Date();
var today = num.getDate();
var month = num.getMonth() + 1;
var mon = "Januray"; 
switch (month) {
    case 1:
        mon = "January";
        break;
    case 2:
        mon = "February";
        break;
    case 3:
        mon = "March";
        break;
    case 4:
        mon = "April";
        break;
    case 5:
        mon = "May";
        break;
    case 6:
        mon = "June";
        break;
    case 7:
        mon = "July";
        break;
    case 8:
        mon = "August";
        break;
    case 9:
        mon = "September";
        break;
    case 10:
        mon = "October";
        break;
    case 11:
        mon = "November";
        break;
    case 12:
        mon = "December";
        break;
}  
document.querySelector(".date").innerHTML="It's "+mon+" "+today;    













