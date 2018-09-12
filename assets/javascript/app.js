var startScreen;
var gameHTML;
var questionArray = ["Rap was just becoming well known in the 90s. Which artist had the first number one rap single?", "Novelty children shows were also a big hit. Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini?", "Which famous girl group of the 90s sung the theme song to the hit sketch comedy TV show 'All That'?", "Which record company had huge success in the 90s with artists such as the Notorious BIG, Mase, and Total?", "Teenybopper pop was big in the late 90s. Which teen pop idol was NOT in the 'Mickey Mouse Club'?", "'Clueless' was a cult hit in the 90s. Which cast member of 'Clueless' was NOT featured in the 'Clueless' TV series?", "What year was JonBenet Ramsey murdered?", "Which NBA team did NOT win a championship in the 90s?", "What group had the hit wonder in the 90s by the name of 'Lovefool'?", "These two best friends came together to write the Oscar winning movie, 'Good Will Hunting'?"];
var answerArray = [["Kriss Kross","MC Hammer","Vanilla Ice","DJ Jazzy Jeff and the Fresh Prince"],["Saved By the Bell","The Mighty Morphin Power Rangers","Beverly Hills 90210","All That"],["TLC","Envogue","Destiny's Child","3LW"],["Motown", "Death Row", "Murder Inc.","Bad Boy"],["Jessica Simpson","JC Chasez","Britney Spears","Justin Timberlake"],["Stacey Dash","Elisa Donovan","Donald Faison","Alicia Silverstone"],["1995","1996","1998","1997"],["Los Angeles Lakers","Detroit Pistons","Houston Rockets","San Antonio Spurs"],["The Corrs","Chumbawumba","Was Not Was","The Cardigans"],["Ben Stiller and Owen Wilson","Ben Affleck and Matt Damon","Jim Carey and Will Smith","Demi Moore and Bruce Willis"]];
var correctAnswersArray = [];
var imageArray = [];
var questionCounter = 0;
var counter = 30;
var selectAnswer;
var clock;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredAnswer = 0;
var clickSound = new Audio("https://github.com/efrencav/TriviaGame/blob/master/assets/sound/button-click.mp3"); 


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
        clickSound.play;
        generateHTML();

        timerWrapper();

    }); // Closes start-button click

    $("body").on("click", ".answer", function (event) {
        // AnsweredQuestion = true;
        clickSound.play;
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
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/x.png'>";
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
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}
function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
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

