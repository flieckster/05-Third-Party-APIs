$(document).ready(function() {


let DateTime = luxon.DateTime;
// let DateTime = JSON.stringify(luxon.DateTime.DATETIME_FULL);

//get hour only





$(".container").addClass("time-block");
//create row
var row = $("<article>").addClass("row");
$(".container").append(row);
//create time section
var timeSec = $("<section>").addClass("hour col-1");
// timeSec.text(hours.hour);
row.append(timeSec);
// created and appended textarea
var textSec = $("<textarea>").addClass("textarea col-10 description");
row.append(textSec);
// created and appended buttons
var btnSec = $("<button>").addClass("saveBtn col-1 fa fa-lock");
row.append(btnSec);

let hour = DateTime.local().hour;
var h;
switch (hour) {
   
    case 0:
    h = "12:00 PM";
    break;
    case 1:
    h = "1:00 AM";
    break;
    case 2:
    h = "2:00 AM";
    break;
    case 3:
    h = "3:00 AM";
    break;
    case 4:
    h = "4:00 AM";
    break;
    case 5:
    h = "5:00 AM";
    break;
    case 6:
    h = "6:00 AM";
    break;
    case 6:
    h = "6:00 AM";
    break;
    case 7:
    h = "7:00 AM";
    break;
    case 8:
    h = "8:00 AM";
    break;
    case 9:
    h = "9:00 AM";
    break;
    case 9:
    h = "9:00 AM";
    break;
    case 9:
    h = "9:00 AM";
    break;
    case 10:
    h = "10:00 AM";
    break;
    case 11:
    h = "11:00 AM";
    break;
    case 12:
    h = "12:00 AM";
    break;
    case 13:
    h = "1:00 PM";
    break;
    case 14:
    h = "2:00 PM";
    break;
    case 15:
    h = "3:00 PM";
    $(textSec).addClass("current");
    break;
    case 16:
    h = "4:00 PM";
    break;

};

console.log("the hour is "+ h);





// $(textSec).addClass("past");
// $(textSec).addClass("future");
// $(textSec).addClass("current");



// let DateTime = luxon.DateTime;

// let today = DateTime.local();
// console.log(today);



})




