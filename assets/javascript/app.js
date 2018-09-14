var startScreen;
var gameHTML;

// Game questions array
var questionArray = ["<span class='text-black text-large padding-10px-bottom'><strong>Question 1</strong></span><br/><p class='text-medium text-center'>Rap was just becoming well known in the 90s.<br/> Which artist had the first number one rap single?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 2</strong></span><br/><p class='text-medium text-center'>Novelty children shows were also a big hit. Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 3</strong></span><br/><p class='text-medium text-center'>Which famous girl group of the 90s sung the theme song to the hit sketch comedy TV show 'All That'?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 4</strong></span><br/><p class='text-medium text-center'>Which record company had huge success in the 90s with artists such as the Notorious BIG, Mase, and Total?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 5</strong></span><br/><p class='text-medium text-center'>Teenybopper pop was big in the late 90s. Which teen pop idol was NOT in the 'Mickey Mouse Club'?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 6</strong></span><br/><p class='text-medium text-center'>'Clueless' was a cult hit in the 90s. Which cast member of 'Clueless' was NOT featured in the 'Clueless' TV series?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 7</strong></span><br/><p class='text-medium text-center'>What year was JonBenet Ramsey murdered?", "Which NBA team did NOT win a championship in the 90s?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 8</strong></span><br/><p class='text-medium text-center'>Which NBA team did NOT win a championship in the 90s?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 9</strong></span><br/><p class='text-medium text-center'>What group had the hit wonder in the 90s<br/>by the name of 'Lovefool'?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 10</strong></span><br/><p class='text-medium text-center'>These two best friends came together to write the Oscar winning movie, 'Good Will Hunting'?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 11</strong></span><br/><p class='text-medium text-center'>Which phrase is a common catchphrase on 'South Park'?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 12</strong></span><br/><p class='text-medium text-center'>Which movie did NOT star actor Brad Pitt?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 13</strong></span><br/><p class='text-medium text-center'>Who sang the 'Star Spangled Banner' at the Super Bowl XXV?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 14</strong></span><br/><p class='text-medium text-center'>The 1990s was a golden age for modern Disney movies. Which Disney Movie did NOT debut in the 90s?</p>",
    "<span class='text-black text-large padding-10px-bottom'><strong>Question 15</strong></span><br/><p class='text-medium text-center'>Country Music became very big in the 90s. Which country music star had a popular television show on 'PAX TV'?</p>"];

    // Answer options array
var answerArray = [
    ["Kriss Kross", "MC Hammer", "Vanilla Ice", "DJ Jazzy Jeff and the Fresh Prince"],
    ["Saved By the Bell", "The Mighty Morphin Power Rangers", "Beverly Hills 90210", "All That"],
    ["TLC", "Envogue", "Destiny's Child", "3LW"], ["Motown", "Death Row", "Murder Inc.", "Bad Boy"],
    ["Jessica Simpson", "JC Chasez", "Britney Spears", "Justin Timberlake"],
    ["Stacey Dash", "Elisa Donovan", "Donald Faison", "Alicia Silverstone"],
    ["1995", "1996", "1998", "1997"], ["Los Angeles Lakers", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
    ["The Corrs", "Chumbawumba", "Was Not Was", "The Cardigans"],
    ["Ben Stiller and Owen Wilson", "Ben Affleck and Matt Damon", "Jim Carey and Will Smith", "Demi Moore and Bruce Willis"],
    ["'Screw you guys...I'/m going home.'", "You are dead ducks boys!", "Oh no silly gooses!", "Kick it and kick it good."],
    ["28 Days", "Seven Years in Tibet", "Se7en", "Twelve Monkeys"],
    ["Celine Dion", "Toni Braxton", "Mariah Carey", "Whitney Houston"],
    ["The Little Mermaid", "The Lion King", "Beauty and the Beast", "Tarzan"],
    ["Shania Twain", "Billy Ray Cyrus", "Garth Brooks", "Faith Hill"]
];

// Correct answers array
var correctAnswersArray = ["<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>C. Vanilla Ice</strong></h3><br/><p class='text-center'>There were many popular rap hit throughout the early nineties.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>B. The Mighty Morphin Power Rangers</strong></h3><br/><p class='text-center'>Tommy was the green and white ranger, Zack was the black ranger, Kimberly was the pink ranger, Billy was the blue ranger, and Trini (which later became Alicia) was the yellow ranger.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. TLC</strong></h3><br/><p class='text-center'>The theme song stayed with the show until the 2001-present season.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>D. Bad Boy</strong></h3><br/><p class='text-center'>Bad Boy records was founded by Sean 'Puffy/P.Diddy/Puff Daddy' Combs. Other Bad Boy artists included Lil' Kim, Junior Mafia, Harlem World, Craig Mack, 112, Faith Evans, Carl Thomas, Loon, and the Lox.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. Jessica Simpson</strong></h3><br/><p class='text-center'>Jessica Simpson tried out for the 'Mickey Mouse Club' and had good chances of being chosen but during her audition, she had stage fright.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>D. Alicia Silverstone</strong></h3><br/><p class='text-center'>Alicia Silverstone did not decide to join the cast of the 'Clueless' TV series but instead, Rachael Blanchard. Alicia Silverstone went on to star in 'Excess Baggage' and 'Batman and Robin'.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>D. 1997</strong></h3><br/><p class='text-center'>JonBenet was mysteriously murdered in her home in late December. Fingers were pointed to her parents but as of 2004, her murder has not been solved.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>B. Detroit Pistons</strong></h3><br/><p class='text-center'>The Detroit Pistons won in 1990. The Houston Rockets won in 1994 and 1995. The San Antonio Spurs won in 1999. All the other championships won in the 90s were by the Chicago Bulls.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. The Cardigans</strong></h3><br/><p class='text-center'>'Lovefool' was featured in the hit movie 'Romeo & Juliet' starring Leonardo DiCaprio and Claire Danes.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>D. Ben Affleck and Matt Damon</strong></h3><br/><p class='text-center'>Ben Affleck and MAtt Damon also starred in 'Good Will Hunting'.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. 'Screw you guys...I'/m going home.</strong></h3><br/><p class='text-center'>When Kyle plays with his little brother Ike, they play a game called Kick the Baby.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. 28 Days</strong></h3><br/><p class='text-center'>'28 Days' starred Sandra Bullock.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>D. Whitney Houston</strong></h3><br/><p class='text-center'>Whitney Houston'/s edition of the 'Star Spangled Banner' is one of the most popular renditions of the song.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>A. The Little Mermaid</strong></h3><br/><p class='text-center'>'The Little Mermaid' debuted in 1989.</p>",
    "<h3 class='text-black text-center padding-10px-bottom padding-10px-top'><strong>B. Billy Ray Cyrus</strong></h3><br/><p class='text-center'>Billy Ray Cyrus had great success with his song 'Achy Breaky Heart.' He starred in the PAX TV series 'Doc'.</p>"];

// Images array
var imageArray = ["<img class='center-block img-wrong' src='assets/images/vanilla-ice.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/The-Rangers-mighty-morphin-power-rangers.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/TLC.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/bad-boy-records.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/Jessica-simpson.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/alicia-silverstone.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/Jonbenet.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/Detroit-Pistons-Logo.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/the-cardigans.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/ben-affleck-matt-damon.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/south-park.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/28-days-later.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/whitneyhouston.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/the-little-mermaid.jpg'>",
    "<img class='center-block img-wrong' src='assets/images/billy-ray-cyrus.jpg'>"];

var questionCounter = 0;
var counter = 30;
var selectAnswer;
var clock;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredAnswer = 0;

// Sound variables
var clickSound = new Audio("assets/sound/button-click.mp3");
var SoundRight = new Audio("assets/sound/right-answer.wav");
var SoundWrong = new Audio("assets/sound/wrong.mp3");

// Function that creates the start button and initial screen
$(document).ready(function () {

    function initialScreen() {
        startScreen = "<div class='logo'></div><div class='play-btn start-button' href='#' role='button'></div></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();


    // Function to generate HTML  that triggers the start button and generates the HTML
    $("body").on("click", ".start-button", function (event) {
        event.preventDefault();
        clickSound.play();
        generateHTML();

        timeWrapper();

    }); // Closes start-button click

    $("body").on("click", ".answer", function (event) { //This function is not processing the select answer for the correct answers, it only plays the wrong answers
        // correctAnswersArray = true;
        // console.log(correctAnswersArray[questionCounter]);
        clickSound.play();
        selectAnswer = $(this).text();
        if(correctAnswersArray[questionCounter].indexOf(selectAnswer) > 0) { // This use to be (selectAnswer === correctAnswersArray[questionCounter])  This gives me an error (correctAnswersArray[questionCounter].indexOf(selectAnswer => 0))
            console.log(correctAnswersArray[questionCounter].indexOf(selectAnswer));

            SoundRight.play();
            clearInterval(clock);
            generateWin();
        }
        else {
            console.log("wrong answer!");
            SoundWrong.play();
            clearInterval(clock);
            generateLoss();
        }
    }); // Close .answer click

    $("body").on("click", ".reset-button", function (event) {
        clickSound.play();
        resetGame();
    }); // Closes reset-button function

}); // Closes JQuery wrapper

function generateLossDueToTimeOut() {
    unansweredAnswer++;
    gameHTML = "<p class='logo'><p class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-center text-large text-white'><strong>You ran out of time!</strong><br /> The correct answer was:<br /> " +
        correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
    
        $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}
function generateWin() {
    correctAnswer++;
    gameHTML = "<p class='logo'><p class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-center'>Correct!<br />  The answer is:</br> " +
        correctAnswersArray[questionCounter] + "</p>" + imageArray[questionCounter];
    
        $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}
// Wrong answer
function generateLoss() {
    incorrectAnswer++;
    gameHTML = "<p class='logo'><h3 class='text-center timer-p text-medium'>Time Remaining: <span class='timer'>" +
        counter + "</span></h3>" + "<p class='text-center'><span class='text-large text-black'><strong>Wrong!</strong></span><br /> The correct answer is: " +
        correctAnswersArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";

    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}
function generateHTML() {
    gameHTML = "<p class='logo'><p class='text-center timer-p'><span class='text-large text-white'><strong>Time Remaining: <span class='timer text-black'>30</strong></span></p><p class='text-center'>" +
        questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " +
        answerArray[questionCounter][0] + "</p><p class='answer'>B. " +
        answerArray[questionCounter][1] + "</p><p class='answer'>C. " +
        answerArray[questionCounter][2] + "</p><p class='answer'>D. " +
        answerArray[questionCounter][3] + "</p>";

    $(".mainArea").html(gameHTML);
}
function wait() {
    if (questionCounter < 15) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timeWrapper();
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
    gameHTML = "<div class='logo'></div><p class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" +
        "</p>" + "</p><p class='summary-correct text-center'>Correct Answers: " + correctAnswer +
        "</p>" + "<p>Wrong Answers: " + incorrectAnswer; + "</p>" + "<p>Unanswered: " +
            unansweredAnswer; + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
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

