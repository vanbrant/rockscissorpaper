let score = document.querySelector(".score")
let btn = document.querySelectorAll(".playerChoice")
let playerScore = 0;
let compScore = 0;
let round = document.querySelector(".round");
let roundNum = 0;
let choice = document.querySelector(".choice");
let color1 = Math.floor(Math.random()*255);
let color2 = Math.floor(Math.random()*255);
let color3 = Math.floor(Math.random()*255);
let h1 = document.querySelector("h1")
for (i=0; i< btn.length; i++){
    btn[i].addEventListener("click", {
        handleEvent: function (e){
    h1.style.color = `rgb(${color1},${color2},${color3})`;
    let playerChoice = e.target.id;
    e.target.setAttribute("style","transition-duration:.07s; transform:scale(1.1)")
    e.target.addEventListener("transitionend",()=>{
        e.target.removeAttribute("style","transition-duration:.07s; transform:scale(1.1)")
    })
    let compChoice = Math.random();
if (compChoice < .33) {
    compChoice = "ROCK";
} else if (compChoice >=.33 && compChoice <.67) {
    compChoice = "PAPER";
} else {
    compChoice = "SCISSORS";
} ;
round.textContent = `Round ${++roundNum}`;
round.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
compare(playerChoice,compChoice);
if (roundNum === 10){
    endGame()
    };
    }
    })
}


function compare(playerChoice,compChoice) {
    if (playerChoice === compChoice){
        score.textContent = `Player: ${playerScore} VS Computer: ${compScore}`;
        choice.textContent = `${playerChoice} VS ${compChoice}`;
        score.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
        choice.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)

    } else if (
        playerChoice === "ROCK" && compChoice === "PAPER" || playerChoice === "PAPER" && compChoice === "SCISSORS" || playerChoice === "SCISSORS" && compChoice === "ROCK") {
            compScore = ++compScore;
            score.textContent = `Player: ${playerScore} VS Computer: ${compScore}`;
            choice.textContent = `${playerChoice} VS ${compChoice}`;
            score.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
            choice.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
    
            } else{
            playerScore = ++playerScore;
            score.textContent = `Player: ${playerScore} VS Computer: ${compScore}`;
            choice.textContent = `${playerChoice} VS ${compChoice}`;
            score.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
            choice.setAttribute("style",`color:rgb(${color1},${color2},${color3})`)
    
            }
    };
    
    
function endGame() {
    if (playerScore === compScore){
        alert ("It's a tie. Good job!")
    } else if (playerScore > compScore) {
        alert (`You won ${playerScore} to ${compScore} . Congratulations!`);
    } else {
        alert (`You lost ${playerScore} to ${compScore}. Try better next time.`);
    }
    let input = prompt ("GAME OVER", "Do you want to play again? Y/N");
    if (input === "y") {
        playerScore = 0;
        compScore = 0;
        roundNum = 0;
    } else {
        for(i=0; i< btn.length; i++){
            btn[i].disabled = true;
            if (btn[i].disabled = true){
                btn[i].setAttribute("style", "border: 1px black solid; background-color:gray; color: white")
            }
        }
    }
}


