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

window.addEventListener('click', function (e) {
    if (e.explicitOriginalTarget.classList[0] !== 'selection') return;
    const playerSelection = e.explicitOriginalTarget.attributes.value.value;
    const computerSelection = getcomputerChoice();
    // instead of logging, update DOM to reflect results.
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    this.document.getElementsByClassName('result')[0].innerHTML = result;
    // console.log(this.document.getElementsByClassName('result'));
    // this.document.getElementById('results').innerHTML = "test";
    this.document.getElementsByClassName('player-selection')[0].innerHTML = playerSelection;
    this.document.getElementsByClassName('computer-selection')[0].innerHTML = computerSelection;
    if (result.includes("Win")) {
        playerScore++;
        this.document.getElementsByClassName('player-score')[0].innerHTML = playerScore;
        if (checkWinner(playerScore, computerScore)) {
            this.window.alert("You won 5 matches!");
        }

    } else if (result.includes("Lose")) {
        computerScore++;
        this.document.getElementsByClassName('computer-score')[0].innerHTML = computerScore;
        if (checkWinner(playerScore, computerScore)) {
            this.window.alert("You lost 5 matches!");
        }
    } else {
        return;
    }
});

// console.log(game(6));

var playerScore = 0;
var computerScore = 0;

document.getElementsByClassName('player-score')[0].innerHTML = playerScore;
document.getElementsByClassName('computer-score')[0].innerHTML = computerScore;

function checkWinner(humanScore, aiScore) {
    console.log(humanScore);
    console.log(aiScore);
    console.log(humanScore == 5 || aiScore == 5);
    if (humanScore == 5 || aiScore == 5) {
        return true;
    }

    return false;
}