function getComputerChoice() {
    let random = Math.random();
    if (random >= 0 && random <= 0.3)
        return "Rock";
    else if (random >= 0.4 && random <= 0.6)
        return "Paper";
    else return "Scissors";
}

function getHumanChoice(choice) {
    choice = prompt(`what is your choice`);
    return choice;
}


//scores
let humanScore = 0;
let computerScore = 0;


//game logic
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tai!"
    }
    else if (humanChoice === "Rock" & computerChoice === "Paper") {
        computerScore++;
        return `paper covers rock, computer wins this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else if (humanChoice === "Paper" & computerChoice === "Rock") {
        humanScore++;
        return `paper covers rock, you win this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else if (humanChoice === "Paper" & computerChoice === "Scissors") {
        computerScore++;
        return `Scissors cuts paper, computer wins this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else if (humanChoice === "Scissors" & computerChoice === "paper") {
        humanScore++;
        return `Scissors cuts paper, you win this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else if (humanChoice === "Scissors" & computerChoice === "Rock") {
        computerScore++;
        return `Rock beats Scissors, computer wins this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else if (humanChoice === "Rock" & computerChoice === "Scissors") {
        humanScore++;
        return `Rock beats Scissors, you win this round. 
        your score ${humanScore}
        computer score ${computerScore}`;
    }
    else return "invalid input";
}


//game loop
function gameLoop() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        console.log(playRound(humanSelection, computerSelection));

    }
}

gameLoop()
