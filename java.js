
document.getElementById("start-button").addEventListener("click",function(){
    var timerSet= 80
timer= setInterval(function(){
    console.log("timerSet", timerSet);
    document.getElementById("timer-slot").textContent = timerSet
    if (timerSet>0){
        timerSet--;
    }}, 1000)
    document.getElementById("start-button").style.display= "none"
})
document.getElementById("start-button").addEventListener("click",function (){
    document.getElementById("question-line").textContent="Commonly used data types do NOT include:";
    document.getElementById("answer-1").textContent = "Strings";
    document.getElementById("answer-2").textContent= "Booleans"
    document.getElementById("answer-3").textContent = "Alerts"; 
    document.getElementById("answer-4").textContent = "Numbers";
})


