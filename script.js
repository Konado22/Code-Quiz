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
    incorrect3: "incorrect3",
    answer: "all the above",
  },
  {
    question: "question 3",
    answer: "correct-answer3",
    incorrect: "incorrect1",
    incorrect2: "incorrect2",
    incorrect3: "incorrect3",
  },
  {
    question: "question 4",
    answer: "correct-answer4",
    incorrect: "incorrect1",
    incorrect2: "incorrect2",
    incorrect3: "incorrect3",
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
  questionCnt++;
}
function BlowMyMind (event){
    const text = event.target.innerText;
    console.log(text)
    if (array1[questionCnt].answer===text){
        document.getElementById("answer-result").textContent="correct"
    }
    else {
        document.getElementById("answer-result").textContent="incorrect"
    }
    getQuestion();
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
