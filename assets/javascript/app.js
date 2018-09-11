var startScreen;
var gameHTML;
var counter =  30;
var question = [];
var answer = [];
var image = [];
var correctAnswers = [];
var questionCounter = 0;
var selectAnswer;
var clock;
var correct = 0;
var incorrectAnswer = 0;
var unansweredAnswer = 0;
// var click sound = source file

// Create function to start the initial screen
// $(document).ready(function() {
//     function initialScreen() {
//         startScreen = <p tag with classes>Button;
//         $(".mainArea).html(startScreen);
//     }
//  

// create function, generateHTML triggered by start button
// //* I know you won't know this code, so here it is for you
// $("body").on("click", ".start-button", function(event){
//     event.preventDefault();
//     clickSound.play();
//     generateHTML();

//     timeWrapper();
// });

// create function, answered question as true, alert with right answer, else wrong answer
// $("body").on("click", ".answer", function(event) {
//     clickSound.play();
//     selectedAnswer = $(this).text();
//     if(selectedAnswer === correctAnswers[questionCounter]) {
//         clearInterval(clock);
//         generateWin();
//     }
//     else {
//         clearInterval(clock);
//         generateLoss();
//     }
// });

// $("body").on("click", ".reset-button", function(event){
//     clickSound.play();
//     resetGame();
// });
//  });
// //*  

$(document.ready(function() {
    function initialScreen() {
        startScreen = <p></p>   // HTML code goes here
        $(".mainArea").html(startScreen);
    }
    initialScreen();

    function generateHTML() {
        $("body").on("click", ".start-button", function(event) {
            event.preventDetault();
            clickSound.play();
            generateHTML();
            
            timeWrapper();
        });
    }
    function answeredQuestion() {
        $("body").on("click", ".answer", function(event){
            clickSound.play();
            selectAnswer = $(this).text();
            if(selectAnswer === correctAnswers[questionCounter]) {
                clearInterval(clock);
                generateWin(); // need to create this function
            }
            else {
                clearInterval(clock);
                generateLoss(); // need to create this function
            }
        });
    }
    $("body").on("click", ".reset-button", function(event) {
        clickSound.play();
        resetGame(); // need to create this function
    });
}));

// function to generateloss due to timeout
//     unanswered questions plus plus
//     gameHTML = <p tag with classes>time remaining <spans> + counter + <span>
//     <p tag with classes> span You run out of time: + correct answer [with question counter inside brackets] +
//     <p tag with classes> with image source file 
//     $ id tag with .main Area .html with (gameHTML inside parenthesis)
//     set timeout (wait, 4000)

    function generateLossToTimeOut() {
        unansweredQuestion++;
        gameHTML = "<p>Time remaining: </p> <span>" + counter "</span>" + "<p>You've run out of time: </p>" + correctAnswers[questionCounter] + "<p>//image source file"
        $(".mainArea").html(gameHTML);
        setTimeout (wait, 4000);
    };
    
    // function to generate win
    //     correct answer plus plus
    //     gameHTML = <p tag with classes> time remaining inside span + counter +
    //     <p tag with classes> The correct answer is + correct answer var with [question counter inside brackets] +
    //     <image array with [question counter inside brackets];

    function generateWin() {
        correct++;
        gameHTML = "<p>Time remaining: </p> <span>" + counter "</span>" + "<p>The correct answer is: </p>" + correctAnswers[questionCounter] + "<p>//image source file"
    };

    // function to generate loss
    //     incorrect answer plus plus
    //     gameHTML = "<p tag with classes, time remaining + counter variable inside span tag +
    //     <p tag with classes + correct answers [question counter inside brackets] +
    //     <p tag with classes + <img tag with wrong answer
    //     Id tag with .mainArea and .html with (gameHTML inside parenthesis)
    //     setTimeout(wait, 4000); //* you can change this information to a different amount

    function generateLoss() {
        incorrectAnswer++;
        gameHTML = "<p>Time remaining: </p> <span>" + counter "</span>" + "<p>Correct answers: </p>" + correctAnswers[questionCounter] + "<p>//image source file"
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    };

    // function to generate html
    //     gameHTML = '<p> tag with classes and span, add counter inside the span, plus <p> tag with class plus question array [with question counter inside brackets] var, 
    //     plus wrong answer var, plus answer array with [question counter inside brackets][identify the position of the answer with the index number] continue showing 
    //     all the answers for all the arrays
    //     add in with id selector mainarea id and .html after parenthesis with gameHTML inside parenthesis

    function generateHTML() {
        gameHTML = "<p>Time remaining: </p> <span>" + counter "</span>" + "<p>Correct answers: </p>" + question[questionCounter] + wrongAnswer + answer[0]"<p>//image source file</p>"
        $(".mainArea").html(gameHTML);
    };

    // function wait
    //     if statement with (questioncounter variable less than < 7) {
    //         questioncounter plus plus
    //         generteHTML function
    //         counter set to 30
    //         timwrapper function
    //     }
    //     else {
    //         final screen function 
    //     }
    //     }

    function wait() {
        if(questionCounter < 7) {
            questionCounter++;
            generateHTML();
            counter = 30;
            timeWrapper();
        }
        else {
            finalScreen();
        }
    };

    // function timeWrapper
    //     the clock variable = setInterval(thirtySeconds, 1000);
    //     function thirtySeconds() {
    //         if (counter var equals to 0) {
    //             clearInterval(the clock variable);
    //             generateloss due to timeout function
    //         }
    //         if(counter var > 0) {
    //             counter minus minus
    //         }
    //         $ timer id with .html and counter var inside parenthesis
    //     }

    function timeWrapper() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter = 0) {
                clearInterval(clock);
                generateLossToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    };

    function finalScreen() {
        gameHTML = "<p><span>" + counter "</span>""<p><span>" + correct + wrongAnswer + unansweredAnswer "</p>"
    }



// function final screen
//     gameHTML = '<p> tag with classes and span, add counter inside the span, plus <p> tag with class plus correct ansewer var, plus wrong answer var, plus unanswered var 
//     add in with id selector main id and .html after parenthesis with gameHTML inside parenthesis

// function reset game 
//     questioncounter set to 0
//     correct answer set to 0
//     incorrect answer set to 0
//     unanswered question set to 0
//     generateHTML function()
//     timeWrapper function()



// time from class

// const timers = {
//     counter: function() {
//         setInterval(...function() {
//             console.log(this.time);
//         });
//     }
// }