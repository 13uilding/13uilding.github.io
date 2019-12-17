// Variables
  // Buttons
var highScoreBtn = document.querySelector("button");
var startBtn = document.querySelector("h1");
  // Time
var timeEl = document.getElementById("timer");
var secondsLeft = 60;
  // Quiz
var quizQuestions = document.getElementById("questionWrapper");
var quizQ = quizQuestions.children[0];
var quizA0 = document.getElementById("A0")
var quizA1 = document.getElementById("A1")
var quizA2 = document.getElementById("A2")
var quizA3 = document.getElementById("A3")
const qArr = ["correct", "wrong1", "wrong2", "wrong3"];
  // Question 1
var q1 = {
  question: "Which method doesn't work on an array?", 
  correct: "The .split() method.",
  wrong1: "The .slice() method.",
  wrong2: "The .splice() method.",
  wrong3: "The .join() method."
  };
  // Score
var highScores = [];
var score;


// Buttons
highScoreBtn.addEventListener("click", function(e){
  e.preventDefault();
    console.log("you clicked me");
    score ++; //Remove this later
});

startBtn.addEventListener("click", function(e){
  e.preventDefault();
  setTime();
  runQuiz();
  console.log("Timer Started");
});

// Event Delegation
quizQuestions.addEventListener("click", function(e){
  e.preventDefault();
  if (e.target.matches("li")){
    var answerIndex = event.target.getAttribute("id");
    console.log(answerIndex);
    var answer = document.getElementById(answerIndex).textContent;
    if ( answer === q1.correct ){
      console.log("right");
    } else if ( answer !== q1.correct) {
      console.log("wrong");
    };
    // if ( )
  };
});

// Functions
// Quiz
function runQuiz(){
  quizQuestions.setAttribute("style", "display: block");
  // Create another instance of randomIndexArray on the questions
  // Then I loop through the questions var arr = [q1, q2, q3, ...]
  var options = randomIndexArray(qArr);
  // Turn this into a function or loop or both at some point transform?
  quizQ.textContent = q1.question;
  quizA0.textContent = q1[options[0]];
  quizA1.textContent = q1[options[1]];
  quizA2.textContent = q1[options[2]];
  quizA3.textContent = q1[options[3]];

};


// Timer
function setTime() {
  var timerInterval = setInterval(function() {
    score = 0;
    secondsLeft--;
    startBtn.setAttribute("style", "display: none");
    timeEl.textContent = "Timer: " + secondsLeft + "s";

    // Need this to end if we run out of questions
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      startBtn.setAttribute("style", "display: block");
      quizQuestions.setAttribute("style", "display: none");
      logScore();
      timeEl.textContent = "Timer: "
      secondsLeft = 60;
    }

  }, 1000);
}

// randomize the questions using this array
function randomIndexArray(arr){
  var qIndex = [];
  while ( qIndex.length !== arr.length ){
    var index = Math.floor(Math.random() * arr.length);
    if ( qIndex.includes(index) ) {
      continue;
    } else qIndex.push(index);
  };
  var options = []
  for (let i = 0; i < qIndex.length; i++){
    options.push(arr[qIndex[i]]);
  };
  return options;
};

// Going to need to change this to write to local storage instead
function logScore() {
  console.log(score.textContent);

  console.log("display input form for your score");
  console.log("take you back to the main screen");
//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   questionWrapper.appendChild(imgEl);

}