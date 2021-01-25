$(document).ready(function () {


    let DateTime  = luxon.DateTime;
    let localDatetime = DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

    let hour = DateTime.local().hour;
    //display current date
    $("#currentDay").text(localDatetime);
  



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
//test data for LS
    localStorage.setItem("time", hour);
    // localStorage.setItem("text", 'some text again');
    // console.log(localStorage);

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
        textSec.attr("data-text", workingHours.mhour);
        // created and appended buttons

        var btnSec = $("<button>").addClass("saveBtn col-1 fa fa-lock");
        row.append(btnSec);
        //assign buttons data-time element to give buttons meaning
        btnSec.attr("data-time", workingHours.mhour);
        //save text based on clicking lock button.
        $("<button>").on("click", function() {
        //    var timeSolts = $("<button>");
           const textInput = $("<textarea>").value;
           alert(textInput);
        //    localStorage.setItem('time', input.value());
            console.log(textInput);
          
           
        });

        
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

        // function display () {
            var display = localStorage.getItem("time");
            console.log(display);
        $("data-text").text(display);

        // }
        // display();

    });






})
