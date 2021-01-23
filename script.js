$(document).ready(function () {


    let DateTime = luxon.DateTime;

    let hour = DateTime.local().hour;
    
    // let DateTime = JSON.stringify(luxon.DateTime.DATETIME_FULL);
    console.log(DateTime);


    var workingHours = [

        {
            hour: "9:00 am",
            mhour: "9"
        },

        {
            hour: "10:00 am",
            mhour: "10"
        },

        {
            hour: "11:00 am",
            mhour: "11"
        },

        {
            hour: "12:00 pm",
            mhour: "12"
        },

        {
            hour: "1:00 pm",
            mhour: "13"
        },

        {
            hour: "2:00 pm",
            mhour: "14"
        },

        {
            hour: "3:00 pm",
            mhour: "15"
        },

        {
            hour: "4:00 pm",
            mhour: "16"
        },

        {
            hour: "5:00 pm",
            mhour: "17"
        },

        {
            hour: "6:00 pm",
            mhour: "18"
        }

    ];



    workingHours.forEach(function (workingHours) {
        // console.log(workingHours);

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

        // genarate all the hourly slots based on Array and update class to show color also insert time

        if (hour < workingHours.mhour) {
            $(textSec).addClass("future");
            $(timeSec).text(workingHours.hour);
        }

        if (hour > workingHours.mhour) {
            $(textSec).addClass("past");
            $(timeSec).text(workingHours.hour);
        }

        else if (hour = workingHours.mhour) {
            $(textSec).addClass("present");
            $(timeSec).text(workingHours.hour);
        }

    });






})
