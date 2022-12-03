const { interval} = rxjs;
const {fromEvent } = rxjs; 
const { Observable, Subscriber } = rxjs; 
const { map,take} = rxjs.operators;


var startbtn = document.getElementById("timerButton");
rxjs.fromEvent(startbtn, 'click').subscribe(() => time());





function start(time){
const durationInSeconds = time;
console.log (time)
interval(1000).pipe(take(durationInSeconds), map(count => durationInSeconds - count)).subscribe(countdown => {
  const hrs  =  (Math.floor(countdown  / (3600))).toString()
  const mins =  (Math.floor((countdown % (3600)) / ( 60))).toString()
  const secs = (Math.floor(countdown % (60))) .toString()

  document.getElementById("display").innerHTML = `${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`;
  console.log(countdown)
 
  if (countdown == 1 )
  {
    var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  document.getElementById("display").innerHTML = `${'00'}`;
}, delayInMilliseconds);
    
  }
  
 
})
}
// Display the result
  



function time() {
    
    var h = document.getElementById("hours").value;
    var m = document.getElementById("minutes").value;
    var s = document.getElementById("seconds").value;

    

    if(h < 0 || m < 0 || s < 0) {
        alert("An error has occured. Please enter a numerical value for the follwing columns\n\nHour: Less than 24\nMinute: Less than 60\nSecond: Less than 60");
        startbtn.disabled = false;
        return;
    }
    else {
      time = (h*3600+(m*60+(s*1)));
      
      start(time);
    }
    
  }