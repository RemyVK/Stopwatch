var countMinute =0;
var countSecond = 0;

var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

// Calling Event listners
startBtn.addEventListener("click",onStart);
stopBtn.addEventListener("click",onStop);
resetBtn.addEventListener("click",onReset);

// Defining Events
function onStart(){
    stopwatch = true;
    setTimer();
}

function onStop(){
    stopwatch = false;
    startBtn.innerHTML = "Continue";  
}

function onReset(){
    stopwatch = false;
    countMinute = 0;
    countSecond = 0;
    stopBtn.classList.add('fade');
    startBtn.innerHTML = "Start";
    document.getElementById("min").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
}

function setTimer(){
    if(stopwatch){
        countSecond += 1;
        if(countSecond == 60){
            countMinute+=1;
            countSecond = 0;
        }
        let seconds = countSecond < 10 ? `0`+ countSecond : countSecond;
        let minute = countMinute < 10 ? `0` + countMinute : countMinute;
    
        document.getElementById('min').innerHTML = minute;
        document.getElementById('sec').innerHTML = seconds;
        setTimeout(setTimer, 1000);
    }
}

function fadeOut(btn) {
    var otherBtns = document.querySelectorAll('.button-container button:not(fade)');
    for (var i = 0; i < otherBtns.length; i++) {
      otherBtns[i].classList.remove('fade');
    }
    btn.classList.add('fade');
  }

