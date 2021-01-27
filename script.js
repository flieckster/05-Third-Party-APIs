$(document).ready(function () {
    //starts after page is loaded
    display();
  


    let DateTime = luxon.DateTime;
    let hour = DateTime.local().hour;


    //sets the time
    function tickingTime() {
        //display current date with time DATETIME_FULL_WITH_SECONDS
        let localDatetime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
        $("#currentDay").text(localDatetime);

    };



    // keeps the clock ticking
    setInterval(function () {
        tickingTime();
    }, 1000);


    //arry of times to make the  jquery genarated time blocks
    var workingHours = [
        {
            hourid: "9",
            hourName: "9 am"
        },
        {
            hourid: "10",
            hourName: "10 am"
        },
        {
            hourid: "11",
            hourName: "11 am"
        },
        {
            hourid: "12",
            hourName: "12 pm"
        },
        {
            hourid: "13",
            hourName: "1 pm"
        },
        {
            hourid: "14",
            hourName: "2 pm"
        },
        {
            hourid: "15",
            hourName: "3 pm"
        },
        {
            hourid: "16",
            hourName: "4 pm"
        },
        {
            hourid: "17",
            hourName: "5 pm"
        },
        {
            hourid: "18",
            hourName: "6 pm"
        }
    ];



    workingHours.forEach(function (workingHours) {

        $(".container").addClass("time-block");
        //create row
        var row = $("<article>").addClass("row");
        $(".container").append(row);
        //create time section
        var timeSec = $("<section>").addClass("hour col-1");
        timeSec.text(workingHours.hourName);
        row.append(timeSec);
        // created and appended textarea
        var textSec = $("<textarea>").addClass("textarea col-10 description");
        row.append(textSec);
        textSec.attr("id", workingHours.hourid);
        // created and appended buttons
        var btnSec = $("<button>").addClass("saveBtn col-1 fa fa-lock");
        row.append(btnSec);
    });

    // display items from local storage
    function display() {

        var nine = localStorage.getItem("9 am");
        // console.log(nine);
        $("#9").val(nine);

        var ten = localStorage.getItem("10 am");
        // console.log(ten);
        $("#10").val(ten);

        var eleven = localStorage.getItem("11 am");
        $("#11").val(eleven);

        var twelve = localStorage.getItem("12 pm");
        $("#12").val(twelve);

        var one = localStorage.getItem("1 pm");
        $("#13").val(one);

        var two = localStorage.getItem("2pm");
        $("#14").val(two);

        var three = localStorage.getItem("3 pm");
        $("#15").val(three);

        var four = localStorage.getItem("4 pm");
        $("#16").val(four);

        var five = localStorage.getItem("5 pm");
        $("#17").val(five);

        var six = localStorage.getItem("6 pm");
        $("#18").val(six);
    };


    display();


    //updateding the time blocks with the css color coding
    $(".description").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        if (hour < blockHour) {
            $(this).addClass("future");
        } else if (blockHour == hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past")
        }

    });

    // set button to save text from text input text
    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var hour = $(this).siblings(".hour").text();
        localStorage.setItem(hour, description);

    });



    //don't touch this
});
