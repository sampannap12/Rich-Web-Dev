const { interval} = rxjs;
const {fromEvent } = rxjs; 
const { Observable, Subscriber } = rxjs; 
const { map,take} = rxjs.operators;

var startbtn = document.getElementById("timerButton");
rxjs.fromEvent(startbtn, "click").subscribe(() => time());

function start(time){
const durationInSeconds = time;

interval(1000).pipe(take(durationInSeconds), map(count => durationInSeconds - count)).subscribe(countdown => {
  const hrs  = (~~(countdown / 3600)).toString()
  const mins = (~~((countdown % 3600) / 60)).toString()
  const secs = (~~countdown % 60).toString()
  // Display the result
  document.getElementById("display").innerHTML = `${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`;
  if(secs <=1)
  {
  document.getElementById("display").innerHTML = `${'00'}:${'00'}:${'00'}`;
  }
      
   
 
})
}

function time() {
    var h = document.getElementById("hours").value;
    var m = document.getElementById("minutes").value;
    var s = document.getElementById("seconds").value;
    time = h*3600+ m*60 + s;
    start(time);
  }