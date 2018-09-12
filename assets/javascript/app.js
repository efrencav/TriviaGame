$(document).ready(function () {
    // Function that creates the start button and initial screen

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();

    // Function to generate HTML  that triggers the start button and generates the HTML

    $("body").on("click", ".start-button", function (event) {
        event.preventDefault();
        clickSound.play();
        generateHTML();

        timerWrapper();

    }); // Closes start-button click

    $("body").on("click", ".answer", function (event) {
        // AnsweredQuestion = true;
        clickSound.play();
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswersArray[questionCounter]) {
            // alert("correct");

            clearInterval(clock);
            generateWin();
        }
        else {
            // alert("wrong answer!");
            clearInterval(clock);
            generateLoss();
        }
    }); // Close .answer click

    $("body").on("click", ".reset-button", function (event) {
        clickSound.play();
        resetGame();
    }); // Closes reset function

}); // Closes JQuery wrapper

function generateLossDueToTimeOut() {
    unansweredAnswer++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}
function generateWin() {
    correctAnswer++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswersArray[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}
function generateLoss() {
    incorrectAnswer++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}
function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0]; + "</p><p class='answer'>B. " + answerArray[questionCounter][1]; + "</p><p class='answer'>C. " + answerArray[questionCounter][2]; + "</p><p class='answer'>D. " + answerArray[questionCounter][3]; + "</p>";
    $(".mainArea").html(gameHTML);
}
function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    }
    else {
        finalScreen();
    }
}
function timeWrapper() {
    clock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(clock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}
function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "</p><p class='summary-correct'>Correct Answers: " + correctAnswer + "</p>" + "<p>Wrong Answers: " + incorrectAnswer; + "</p>" + "<p>Unanswered: " + unansweredAnswer; + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainArea").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unansweredAnswer = 0;
    counter = 30;
    generateHTML();
    timeWrapper();
}

var startScreen;
var gameHTML;
var questionArray = [];
var answerArray = [];
var correctAnswersArray = [];
var imageArray = [];
var questionCounter = 0;
var counter = 30;
var selectAnswer;
var clock;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredAnswer = 0;
var clickSound = new Audio("../sound/button-click.mp3"); 
