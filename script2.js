
    let game = function () {
    let play = document.querySelectorAll(".play")
    let compScore = 0;
    let cScore = document.querySelector(".compScore");
    let playerScore = 0;
    let pScore = document.querySelector(".playerScore");
    let round = 0;
    let roundNumber = document.querySelector(".round");
    let choice = document.querySelector(".choice");

    play.forEach((option) => {
    option.addEventListener("click", (event) => {
        for(i=0; i<play.length; i++){
        play[i].setAttribute("style", "transition-duration:.07s; transform: scale(1.1)");
        }
        let playerChoice = event.target.id;
        option.addEventListener("transitionend", () => {
        for(i=0; i<play.length; i++){
        play[i].removeAttribute("style", "transition-duration:.07s; transform: scale(1.1)");
        }})
        //Randomly draw computer's choice
        let compChoice = Math.random();
        if (compChoice < .33) {
                compChoice = "rock";
                // console.log("Computer plays: ", compChoice);
                } else if (compChoice >= .33 && compChoice < .67) {
                compChoice = "paper";
                // console.log("Computer plays: ", compChoice);
                } else {
                compChoice = "scissors";
                // console.log("Computer plays: ", compChoice);
                };
        choice.textContent = `${playerChoice.toUpperCase()} VS ${compChoice.toUpperCase()}`;     
        //Compare the choices
        if (compChoice === playerChoice) {
        // console.log(`Computer plays ${compChoice}. You play ${playerChoice}`);
        // console.log("It's a tie.");
        
        // console.log(`Computer score: ${compScore}. Your score: ${playerScore}`);
    } else if (compChoice === "rock" && playerChoice === "paper" || compChoice === "paper" && playerChoice === "scissors" || compChoice === "scissors" && playerChoice === "rock") {
        // console.log(`Computer plays ${compChoice}. You play ${playerChoice}`);
        ++playerScore;
        // console.log(`Computer score: ${compScore}. Your score: ${playerScore}`);
    } else {
        // console.log(`Computer plays ${compChoice}. You play ${playerChoice}`);
        ++compScore;
        // console.log(`Computer score: ${compScore}. Your score: ${playerScore}`);
    };
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;

    //Count the "Round number"
    roundNumber.textContent = `
    Round ${++round}`;
    if (round == 10) {
        compare()
        gameOver()
    }
    
});
   
    //Function when the game ends
    let gameOver = function() {
        let playAgain = prompt("GAME OVER", "Do you want to play again? Y/N");
    if (playAgain === "y") {
        playerScore = compScore = round = 0;
        for (i=0; i<play.length; i++){
        play[i].removeAttribute("disabled")}
    } else {
        for(i=0; i<play.length; i++){
        play[i].setAttribute("style", "color:lightgray; background-color: grey; border: solid 2px lightgray")
        play[i].setAttribute("disabled",1)}
        
    }
    }
    
})
    //Function to compare the final results
    function compare() {
        if (compScore === playerScore) {
            alert ("It's a tie. Try better next time.");
        } else if (compScore > playerScore) {
            alert (`You lost ${playerScore} to ${compScore}. Try again next time.`);
        } else {
            alert (`You won ${playerScore} to ${compScore}. Congratulations!`);
        }
            };
    }

    //Call the game function
    game();
   
    
        
        