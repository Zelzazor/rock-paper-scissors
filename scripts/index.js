const options = document.querySelector("#rockPaperScissors").options;
const btnCalc = document.querySelector("#btnCalc");
const result = document.querySelector("#result");

const victory = "went victorius! Well deserved!";
const tie = "were tied! Everybody home!";
const defeat = "were defeated! How pity!"


//Determines value of result
function playRound(playerSelection, computerSelection) {
    result.textContent = "You ";
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                result.textContent += tie;
            }
            else if (computerSelection === "paper") {
                result.textContent += defeat;
            }
            else {
                result.textContent += victory
            }
            break;
        case "paper":
            if (computerSelection === "paper") {
                result.textContent += tie;
            }
            else if (computerSelection === "rock") {
                result.textContent += defeat;
            }
            else {
                result.textContent += victory
            }
            break;
        case "scissors":
            if (computerSelection === "scissors") {
                result.textContent += tie;
            }
            else if (computerSelection === "rock") {
                result.textContent += defeat;
            }
            else {
                result.textContent += victory
            }
            break;
    }
    result.textContent += ` The computer selected ${computerSelection}!`
}


//Determines the selection of the computer, at random
function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}


//Event for the button, looks for the value of the selected item in combobox and pass as argument on playRound()
btnCalc.addEventListener('click', () => {
    const selected = document.querySelector("#rockPaperScissors").selectedIndex;
    playRound(options[selected].value, computerPlay());
});
