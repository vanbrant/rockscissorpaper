const game = () => {
var newPlayScore = 0;
var newCompScore = 0;
    for (let i = 0;i<10; i++){
let play = function(a,b){
    
var playerScore = 0;
var compScore = 0;  


let playerPlay= prompt ("Do you want to play rock, paper or scissor?", "Please input lowercase only.");

function checkInput (event) {
if (playerPlay === "rock" || playerPlay === "paper" || playerPlay === "scissors"){
    playerPlay = `${playerPlay}`;
    console.log(`Round ${i+1}: You play: ${playerPlay}`);
}    else {
    console.log("Invalid value. Please choose again.");
    prompt ("Do you want to play rock, paper or scissor?", "Please input lowercase only.")
    event.break;
};
}
checkInput();
let compPlay = Math.random()
if (compPlay < .33) {
    compPlay = "rock";
    console.log("Computer plays:", compPlay)
} else if (compPlay >=.33 && compPlay <.67) {
    compPlay = "paper";
    console.log("Computer plays:", compPlay)
} else {
    compPlay = "scissors";
    console.log("Computer plays:", compPlay)
} ;

if (playerPlay === compPlay){
    const tie = "It's a tie.";
    console.log(tie);
} else if (
    playerPlay === "rock" && compPlay === "paper" || playerPlay === "paper" && compPlay === "scissors" || playerPlay === "scissors" && compPlay === "rock") {
        const lost = "You lost.";
        compScore = ++compScore;
        newCompScore = `${++newCompScore}`;
        // console.log(`Computer score: ${compScore}, Your score: ${playerScore}`);
        console.log(`Computer score: ${newCompScore}, Your score: ${newPlayScore}`)
    } else{
        const won = "You won.";
        playerScore = ++playerScore;
        newPlayScore = `${++newPlayScore}`;
        // console.log(`Computer score: ${compScore}, Your score: ${playerScore}`);
        console.log(`Computer score: ${newCompScore}, Your score: ${newPlayScore}`)
    };
}
play();
    }
console.log("Computer score:", newCompScore);
console.log("Your score:", newPlayScore);
if (newCompScore === newPlayScore) {
    console.log("It's a tie. Good job!");
} else if (newCompScore > newPlayScore) {
    console.log("You lost. Try again next time.");
} else{
    console.log("You won! Congratulations!");
}
}

