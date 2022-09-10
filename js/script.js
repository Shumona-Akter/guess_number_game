const container = document.querySelector(".container");
const body = document.querySelector("body");
const playAgain = document.querySelector(".play_again");
const betweenPart = document.querySelector(".between_part");

const gameTitle = document.querySelector(".game_title");
const CorrectNumber = document.querySelector(".Correct_number");

const input = document.querySelector("input");
const btnCheck = document.querySelector(".btn_check");

const textGuess = document.querySelector(".text_guess");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high_score");


function DisplayGuessText(text) {
    textGuess.textContent = (text);
}

let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

btnCheck.addEventListener("click", function () {
    const inputNumber = Number(input.value);

    // there is no  input
    if (!inputNumber) DisplayGuessText("Please Enter a Number.....");

    // 
    else if (inputNumber === SECRET_NUMBER) {
        DisplayGuessText("You Are Win 🥰🥰.....");
        // correct ans hole show korbe
        CorrectNumber.textContent = SECRET_NUMBER;
        CorrectNumber.style.background = "#f1f1f1";
        container.style.background = "darkorange ";
        body.style.background = " rgb(15, 158, 146) ";

        if (SCORE > HIGH_SCORE) {
            HIGH_SCORE = SCORE;
            highScore.textContent = HIGH_SCORE;
        }
    }
    else if (inputNumber !== SECRET_NUMBER) {
        if (SCORE > 1) {
            DisplayGuessText(
                inputNumber > SECRET_NUMBER ? 'Too High' : ' Too Low'
            );
            SCORE--;
            score.textContent = SCORE;
        }
        else {
            DisplayGuessText("Game is over😓....");
            score.textContent = 0;
        }
    }
    
});
playAgain.addEventListener('click', function () {
    SCORE = 20;
    SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
    DisplayGuessText("Start Guessing Number........");
    CorrectNumber.textContent = "❔";
    CorrectNumber.style.background = "#353535";
    container.style.background = "rgb(15, 158, 146)";
    score.textContent = SCORE;
    body.style.background = "rgb(132, 152, 160)";
    input.value = " ";
})