  
var zamanbasla = null; 
var zamandur = null; 
var durmasüresi = 0; 
var baslaaraligi = null; 
var flag = false; 

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function()
{
  if(!flag)
  {
    startTimer();
    flag = true;
  }
  else
  {
    stopTimer();
    flag = false;
  }
})

timerContainer.addEventListener("dblclick", function()
{
  resetTimer();
})

function startTimer()
{
  if(zamanbasla === null)
    timeBegan = new Date();

  if(zamanbasla !== null)
    durmasüresi += (new Date() - zamandur);

  baslaaraligi = setInterval(clockRunning, 10);
}

function stopTimer()
{
  zamandur = new Date();
  clearInterval(baslaaraligi);
}

function clockRunning()
{
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - timeBegan - durmasüresi);

  var minutes = timeElapsed.getUTCMinutes();
  var seconds = timeElapsed.getUTCSeconds();
  var milliseconds = timeElapsed.getUTCMilliseconds();

  milliseconds = Math.floor(milliseconds/10);

  document.getElementById("timer-display").innerHTML = 
  (minutes = minutes < 10 ? '0' + minutes:minutes) + ":"+
  (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
  (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

function resetTimer()
{
  clearInterval(baslaaraligi);
  zamanbasla = null;
  zamandur = null;
  durmasüresi = 0;
  document.getElementById("timer-display").innerHTML = "00:00:00";
  flag = false;
}