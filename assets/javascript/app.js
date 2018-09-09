// Create function to start the initial screen
// $(document).ready(function() {
//     function initialScreen() {
//         startScreen = <p tag with classes>Button;
//         $(".mainArea).html(startScreen);
//     }
//     initialScreen();

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

// function to generateloss due to timeout
//     unanswered questions plus plus
//     gameHTML = <p tag with classes>time remaining <spans> + counter + <span>
//     <p tag with classes> span You run out of time: + correct answer [with question counter inside brackets] +
//     <p tag with classes> with image source file 
//     $ id tag with .main Area .html with (gameHTML inside parenthesis)
//     set timeout (wait, 4000)

// function to generate win
//     correct answer plus plus
//     gameHTML = <p tag with classes> time remaining inside span + counter +
//     <p tag with classes> The correct answer is + correct answer var with [question counter inside brackets] +
//     <image array with [question counter inside brackets];


// function to generate loss
//     incorrect answer plus plus
//     gameHTML = "<p tag with classes, time remaining + counter variable inside span tag +
//     <p tag with classes + correct answers [question counter inside brackets] +
//     <p tag with classes + <img tag with wrong answer
//     Id tag with .mainArea and .html with (gameHTML inside parenthesis)
//     setTimeout(wait, 4000); //* you can change this information to a different amount

// function to generate html
//     gameHTML = '<p> tag with classes and span, add counter inside the span, plus <p> tag with class plus question array [with question counter inside brackets] var, 
//     plus wrong answer var, plus answer array with [question counter inside brackets][identify the position of the answer with the index number] continue showing 
//     all the answers for all the arrays
//     add in with id selector mainarea id and .html after parenthesis with gameHTML inside parenthesis

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

// var start screen //* null
// var gameHTML; //* null
// var counter with 30 seconds
// var question array with list of all questions
// var answer array with list of all answers
// var image array with img tag, class and source file
// var correct answers array with A, B, C, D, before the correct answer
// var question counter = 0
// var select answer; //* null
// var clock; //* null
// var correct answer = 0
// var incorrect answer = 0
// var unanswered answer = 0;
// var click sound = source file

