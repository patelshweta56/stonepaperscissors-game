let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreSpan = document.querySelector("#userscore");
const compScoreSpan = document.querySelector("#compscore");

// function for game win
const showWinner = ((userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreSpan.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreSpan.innerHTML = compScore;
        msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }  
})

// function for draw game
const gameDraw = (() => {
    msg.innerHTML = "Game is draw. Play again!";
})

// function for computer choice
const getComputerChoice = (() => {
    const choicesArray = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choicesArray[randomChoice];
})

// play game function
const playGame = ((userChoice) => {
    // get computer choice
    const computerChoice = getComputerChoice();
    // statements for playing games
    if (userChoice === computerChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // paper, scissors
            userWin = (computerChoice === "scissors") ? true : false;
        }
        else if (userChoice === "paper"){
            // rock, scissors
            userWin = (computerChoice === "rock") ? true : false;
        }
        else{
            // rock, paper
            userWin = (computerChoice === "paper") ? true : false;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
})

// main function
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})