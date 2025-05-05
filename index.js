let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


let countH = 0
let countG = 0 

//Home teams point functions
function plus1Home(){
    countH += 1
    homeScore.textContent = countH
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }
}
function plus2Home(){
    countH += 2
    homeScore.textContent = countH
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }
}
function plus3Home(){
    countH += 3
    homeScore.textContent = countH
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }
}


//Guest teams Point functions
function plus1Guest(){
    countG += 1
    guestScore.textContent = countG
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }
}
function plus2Guest(){
    countG += 2
    guestScore.textContent = countG
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }
}
function plus3Guest(){
    countG += 3
    guestScore.textContent = countG
    if(countH > countG){
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = "#080001"
    }
    else {
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.backgroundColor = "green"
    }

}

//restart
function newGame(){
    countH = 0
    countG = 0
    homeScore.textContent = countH
    guestScore.textContent = countG
    homeScore.style.backgroundColor = "#080001"
    guestScore.style.backgroundColor = "#080001"


}


/* //leading highlighter
window.onload = function leadingHighlighter(){

    while(countG > countH || countG < countH){
        if(countH > countG){
            homeScore.style.backgroundColor = "green"
            guestScore.style.backgroundColor = "#080001"
        }
        else {
            homeScore.style.backgroundColor = "#080001"
            guestScore.style.backgroundColor = "green"
        }
    }  
    
} */


    let timeLeft = 120; // 2 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 120;
  updateTimerDisplay();
}

// Initial display
updateTimerDisplay();
