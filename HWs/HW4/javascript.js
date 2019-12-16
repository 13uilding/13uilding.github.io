var highScoreBtn = document.querySelector("button");
var startBtn = document.querySelector("h1");
var timeEl = document.getElementById("timer");
var questionWrapper = document.getElementById("main");
var secondsLeft = 60;
var highScores = [];
var score;

highScoreBtn.addEventListener("click", function(){
    console.log("you clicked me");
    score ++; //Remove this later
});

startBtn.addEventListener("click", function(){
    console.log("Timer Started");
    setTime();
});



// Timer
function setTime() {
  var timerInterval = setInterval(function() {
    score = 0;
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft + "s";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      logHighScore();
      timeEl.textContent = "Timer: "
      secondsLeft = 60;
    }

  }, 1000);
}

// Going to need to change this to write to local storage instead
function logHighScore() {
  console.log(score.textContent);

  console.log("display input form for your score");
  console.log("take you back to the main screen");
//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   questionWrapper.appendChild(imgEl);

}
