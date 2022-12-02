var startbtn = document.getElementById("timerButton");
rxjs.fromEvent(startbtn, "click").subscribe(() => time());

function time() {
    var h = document.getElementById("hours").value;
    var m = document.getElementById("minutes").value;
    var s = document.getElementById("seconds").value;
    time = h * 3600 + m * 60 + s;
    start(time);
  }