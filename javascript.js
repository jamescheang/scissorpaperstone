function getcomputerChoice() {
    let randomSelection = -1;
    let computerSelection = "";

    randomSelection = Math.floor(Math.random() * 3)

    switch (randomSelection) {
        case 0:
            return computerSelection = "Scissors";
        case 1:
            return computerSelection = "Paper";
        case 2:
            return computerSelection = "Stone";
        default:
            return computerSelection = "something went wrong";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    let roundResults = "You Win! " + playerSelection + " beats " + computerSelection;

    if (playerSelectionLower == computerSelectionLower) {
        roundResults = "Tie!"
        return roundResults;
    } else {
        if (playerSelectionLower == "paper" && computerSelectionLower == "stone") {
            // no change
        } else {
            if (playerSelectionLower == "stone" && computerSelectionLower == "scissors") {
                // no change
            } else {
                if (playerSelectionLower == "scissors" && computerSelectionLower == "paper") {
                    // no change
                } else {
                    roundResults = "You Lose! " + computerSelection + " beats " + playerSelection;
                }
            }

        }
    }
    return roundResults;
}


// const playerSelection = "Scissors";
// const computerSelection = getcomputerChoice();

// console.log(playerSelection);
// console.log(computerSelection);

// console.log(playRound(playerSelection, computerSelection));


function game(rounds) {
    var playerScore = 0;
    var computerScore = 0;
    var finalScore = "";

    for (let i = 1; i < rounds; i++) {
        console.log("Round " + i);
        var playerSelection = prompt("type in your selection");
        var computerSelection = getcomputerChoice();

        var roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.toLowerCase().includes("win")) {
            playerScore++;
        } else {
            if (roundResult.toLowerCase().includes("lose")) {
                computerScore++;
            }
        }
        console.log("Current Score: " + playerScore + "-" + computerScore);
    }

    if (playerScore > computerScore) {
        finalScore = "You Win! " + playerScore + "-" + computerScore;
    } else {
        if (playerScore = computerScore) {
            finalScore = "Tie! " + playerScore + "-" + computerScore;
        } else {
            if (playerScore < computerScore) {
                finalScore = "You Lose! " + playerScore + "-" + computerScore;
            }
        }
    }
    return finalScore
}

console.log(game(6));