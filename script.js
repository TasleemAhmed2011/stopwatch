window.onload = function() {
    var min = 0;
    var sec = 0;
    var msec = 0;
    var appendmsec = document.getElementById("msec");
    var appendsec = document.getElementById("sec");
    var appendmin = document.getElementById("min");
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var resetbtn = document.getElementById("reset");
    var interval;

    startbtn.onclick= function() {
        clearInterval(interval);
        interval= setInterval(startTimer, 10);
    }
    stopbtn.onclick= function() {
        clearInterval(interval);
    }
    resetbtn.onclick= function() {
        clearInterval(interval);
        msec = 0;
        sec = 0;
        min = 0;
        appendmsec.innerHTML = "00";
        appendsec.innerHTML = "00";
        appendmin.innerHTML = "00";
    }

    function startTimer() {
        msec++;
        if(msec<=9){
            appendmsec.innerHTML= "0"+ msec;
        }
            if(msec> 9){
                appendmsec.innerHTML= msec;
        }

        if(msec > 99) {
            sec++;
            msec = 0;
            appendmsec.innerHTML = "00";
            if (sec <= 9) {
                appendsec.innerHTML = "0" + sec;
            } else {
                appendsec.innerHTML = sec;
            }
        }
        if(sec > 59) {
            min++;
            sec = 0;
            appendsec.innerHTML = "00";
            if (min <= 9) {
                appendmin.innerHTML = "0" + min;
            } else {
                appendmin.innerHTML = min;
            }
        }
        }
    }
