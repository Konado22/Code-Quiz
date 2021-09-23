var timerSet = 80;
var questionCnt = 0;
var array1 = [
  {
    question: "Commonly used data types do not include",
    answer: "alerts",
    incorrect: "strings",
    incorrect2: "booleans",
    incorrect3: "numbers",
  },
  {
    question: "Arrays in javascript can be used to store",
    incorrect: "numbers and strings",
    incorrect2: "other arrays",
    incorrect3: "booleans",
    answer: "all the above",
  },
  {
    question: "The condition of an if/else statement is stored in between:",
    answer: "parenthesis",
    incorrect: "curly brackets",
    incorrect2: "square brackets",
    incorrect3: "quotes",
  },
  {
    question: "string values must be closed within:",
    incorrect: "commas",
    answer: "quotes",
    incorrect2: "curly brackets",
    incorrect3: "question marks",
  },
  {
    question:"Thank you, your score is displayed below. Type your initials to save score"
  },
];
function getQuestion() {
  document.getElementById("question-line").textContent =
    array1[questionCnt].question;
  document.getElementById("answer-1").textContent =
    array1[questionCnt].incorrect;
  document.getElementById("answer-2").textContent =
    array1[questionCnt].incorrect3;
  document.getElementById("answer-3").textContent = array1[questionCnt].answer;
  document.getElementById("answer-4").textContent =
    array1[questionCnt].incorrect2;
}
function BlowMyMind (event){
    const text = event.target.innerText;
    console.log(array1[questionCnt].answer, text)
    if (array1[questionCnt].answer===text){
        document.getElementById("answer-result").textContent="correct";
        // document.getElementById("answer-result").style.fontcolor("green");
    }
    else {
        document.getElementById("answer-result").textContent="incorrect";
        // fontcolor("red");
        timerSet-=10;
    }
    questionCnt++;
    if (questionCnt>4){
      finishLine();
    }
    else{
      getQuestion()
    };
}

document.getElementById("answer-1").addEventListener("click", BlowMyMind);
document.getElementById("answer-2").addEventListener("click", BlowMyMind);
document.getElementById("answer-3").addEventListener("click", BlowMyMind);
document.getElementById("answer-4").addEventListener("click", BlowMyMind);
document.getElementById("start-button").addEventListener("click", function () {
  timer = setInterval(function () {
    document.getElementById("timer-slot").textContent = timerSet;
    if (timerSet > 0) {
      timerSet--;
    }
  }, 1000);
  document.getElementById("start-button").style.display = "none";
  getQuestion();
});
function finishLine(){
  document.getElementById("answer-1").style.display="none";
  document.getElementById("answer-2").style.display="none";
  document.getElementById("answer-3").style.display="none";
  document.getElementById("answer-4").styel.display="none";
  const score= timerSet;
      setTimeout(questionCnt==5);
      document.getElementById("start-button").style.display="block";
      document.getElementById("answer-result").textContent="Your score is:" + score;
      alert("please enter your initials to save highscore");
      var name = alert();
  window.localStorage("answer-result")
  window.localStorage(alert)
}
