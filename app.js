var counter = 0;
var timeLeft = 60;
var running = false;
var timer = $("#timer");
var button = $("starter");
var progress = $("#prog");
var score = 0;


function convertSecs(s) {
    var seconds = s;
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    var t = hh + ":" + mm + ":" + ss;
    return t;
}
$("#starter").click(function () {
    if (!running) {
        running = !running;
        var interval = setInterval(function () {
            counter++;
            timer.html(convertSecs(timeLeft - counter));
            var percent = (counter / timeLeft)*100;
            progress.css({width:`${percent}%`});
            if (counter == timeLeft) {
                clearInterval(interval);
                timeLeft += 60;
                timer.html(convertSecs(timeLeft));
                counter = 0;
                new Audio("bell.mp3").play();
                running = !running;


            }
        }, 1000);
    }
})