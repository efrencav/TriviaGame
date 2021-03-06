var startScreen;
var gameHTML;

// Game questions array
var questionArray = ["<span class='text-black text-large'>Question 1</span><br/><p class='text-center'>Rap was just becoming well known in the 90s.<br/> Which artist had the first number one rap single?</p>",
    '<span class="text-black text-large">Question 2</span><br/><p class="text-center">Novelty children shows were also a big hit. Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini?</p>',
    '<span class="text-black text-large">Question 3</span><br/><p class="text-center">Which famous girl group of the 90s sung the theme song to the hit sketch comedy TV show "All That"?</p>',
    '<span class="text-black text-large">Question 4</span><br/><p class="text-center">Which record company had huge success in the 90s with artists such as the Notorious BIG, Mase, and Total?</p>',
    '<span class="text-black text-large">Question 5</span><br/><p class="text-center">Teenybopper pop was big in the late 90s. Which teen pop idol was NOT in the "Mickey Mouse Club"?</p>',
    '<span class="text-black text-large">Question 6</span><br/><p class="text-center">"Clueless" was a cult hit in the 90s. Which cast member of "Clueless" was NOT featured in the "Clueless" TV series?</p>',
    '<span class="text-black text-large">Question 7</span><br/><p class="text-center">What year was JonBenet Ramsey murdered?"</p>',
    '<span class="text-black text-large">Question 8</span><br/><p class="text-center">Which NBA team did NOT win a championship in the 90s?</p>',
    '<span class="text-black text-large">Question 9</span><br/><p class="text-center">What group had the hit wonder in the 90s<br/>by the name of "Lovefool"?</p>',
    '<span class="text-black text-large">Question 10</span><br/><p class"text-center">These two best friends came together to write the Oscar winning movie, "Good Will Hunting"?</p>',
    '<span class="text-black text-large">Question 11</span><br/><p class"text-center">Which phrase is a common catchphrase on "South Park"?</p>',
    '<span class="text-black text-large">Question 12</span><br/><p class"text-center">Which movie did NOT star actor Brad Pitt?</p>',
    '<span class="text-black text-large">Question 13</span><br/><p class"text-center">Who sang the "Star Spangled Banner" at the Super Bowl XXV?</p>',
    '<span class="text-black text-large">Question 14</span><br/><p class"text-center">The 1990s was a golden age for modern Disney movies. Which Disney Movie did NOT debut in the 90s?</p>',
    '<span class="text-black text-large">Question 15</span><br/><p class"text-center">Country Music became very big in the 90s. Which country music star had a popular television show on "PAX TV"?</p>'
];

// Answer options array
var answerArray = [
    ["Kriss Kross", "MC Hammer", "Vanilla Ice", "DJ Jazzy Jeff and the Fresh Prince"],
    ["Saved By the Bell", "The Mighty Morphin Power Rangers", "Beverly Hills 90210", "All That"],
    ["TLC", "Envogue", "Destiny's Child", "3LW"],
    ["Motown", "Death Row", "Murder Inc.", "Bad Boy"],
    ["Jessica Simpson", "JC Chasez", "Britney Spears", "Justin Timberlake"],
    ["Stacey Dash", "Elisa Donovan", "Donald Faison", "Alicia Silverstone"],
    ["1995", "1996", "1998", "1997"],
    ["Los Angeles Lakers", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
    ["The Cardigans", "The Corrs", "Chumbawumba", "Was Not Was"],
    ["Ben Stiller and Owen Wilson", "Jim Carey and Will Smith", "Demi Moore and Bruce Willis", "Ben Affleck and Matt Damon"],
    ['"Screw you guys...I&#8217;m going home."', "You are dead ducks boys!", "Oh no silly gooses!", "Kick it and kick it good."],
    ["28 Days", "Seven Years in Tibet", "Se7en", "Twelve Monkeys"],
    ["Celine Dion", "Toni Braxton", "Mariah Carey", "Whitney Houston"],
    ["The Little Mermaid", "The Lion King", "Beauty and the Beast", "Tarzan"],
    ["Shania Twain", "Billy Ray Cyrus", "Garth Brooks", "Faith Hill"]
];

// Correct answers array
var correctAnswersArray = ['<h6 class="text-center">C. Vanilla Ice</h6><br/><p class="text-center">There were many popular rap hit throughout the early nineties.</p>',
    '<h6 class="text-center">B. The Mighty Morphin Power Rangers</h6><br/><p class="text-center">Tommy was the green and white ranger, Zack was the black ranger, Kimberly was the pink ranger, Billy was the blue ranger, and Trini (which later became Alicia) was the yellow ranger.</p>',
    '<h6 class="text-center">A. TLC</h6><br/><p class="text-center">The theme song stayed with the show until the 2001-present season.</p>',
    '<h6 class="text-center">D. Bad Boy</h6><br/><p class="text-center">Bad Boy records was founded by Sean "Puffy/P.Diddy/Puff Daddy" Combs. Other Bad Boy artists included Lil&#8217; Kim, Junior Mafia, Harlem World, Craig Mack, 112, Faith Evans, Carl Thomas, Loon, and the Lox.</p>',
    '<h6 class="text-center">A. Jessica Simpson</h6><br/><p class="text-center">Jessica Simpson tried out for the "Mickey Mouse Club" and had good chances of being chosen but during her audition, she had stage fright.</p>',
    '<h6 class="text-center">D. Alicia Silverstone</h6><br/><p class="text-center">Alicia Silverstone did not decide to join the cast of the "Clueless" TV series but instead, Rachael Blanchard. Alicia Silverstone went on to star in "Excess Baggage" and "Batman and Robin".</p>',
    '<h6 class="text-center">D. 1997</h6><br/><p class="text-center">JonBenet was mysteriously murdered in her home in late December. Fingers were pointed to her parents but as of 2004, her murder has not been solved.</p>',
    '<h6 class="text-center">B. Detroit Pistons</h6><br/><p class="text-center">The Detroit Pistons won in 1990. The Houston Rockets won in 1994 and 1995. The San Antonio Spurs won in 1999. All the other championships won in the 90s were by the Chicago Bulls.</p>',
    '<h6 class="text-center">A. The Cardigans</h6><br/><p class="text-center">"Lovefool" was featured in the hit movie "Romeo & Juliet" starring Leonardo DiCaprio and Claire Danes.</p>',
    '<h6 class="text-center">D. Ben Affleck and Matt Damon</h6><br/><p class="text-center">Ben Affleck and Matt Damon also starred in "Good Will Hunting".</p>',
    '<h6 class="text-center">A. "Screw you guys...I&#8217;m going home."</h6><br/><p class="text-center">When Kyle plays with his little brother Ike, they play a game called Kick the Baby.</p>',
    '<h6 class="text-center">A. 28 Days</h6><br/><p class="text-center">"28 Days" starred Sandra Bullock.</p>',
    '<h6 class="text-center">D. Whitney Houston</h6><br/><p class="text-center">Whitney Houston&#8217;s edition of the "Star Spangled Banner" is one of the most popular renditions of the song.</p>',
    '<h6 class="text-center">A. The Little Mermaid</h6><br/><p class="text-center">"The Little Mermaid" debuted in 1989.</p>',
    '<h6 class="text-center">B. Billy Ray Cyrus</h6><br/><p class="text-center">Billy Ray Cyrus had great success with his song "Achy Breaky Heart." He starred in the PAX TV series "Doc".</p>'
];

// Images array and credit to https://giphy.com/
var imageArray = ["<iframe src='https://giphy.com/embed/QUlNta4nHaukM' width='480' height='359' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/80s-vanilla-ice-baby-QUlNta4nHaukM'></p>",
    "<iframe src='https://giphy.com/embed/3o7b9L5oJM58ibCQXC' width='480' height='480' frameBorder='0' class='giphy-embed center-block img-wrong'allowFullScreen></iframe><p><a href='https://giphy.com/gifs/powerrangers-power-rangers-3o7b9L5oJM58ibCQXC'></p>",
    "<iframe src='https://giphy.com/embed/fmeTX8AURI4co' width='480' height='361' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/90s-tlc-new-jack-swing-fmeTX8AURI4co'></p>",
    "<iframe src='https://giphy.com/embed/NjYPU6xw5aLkI' width='480' height='272' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/animated-vh1-logo-NjYPU6xw5aLkI'></p>",
    "<iframe src='https://giphy.com/embed/VkDx0F2THazJe' width='480' height='323' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/jessica-simpson-VkDx0F2THazJe'></p>",
    "<iframe src='https://giphy.com/embed/odoLbU9AoGbVm' width='480' height='248' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/crush-drool-odoLbU9AoGbVm'></p>",
    "<img class='center-block img-wrong' src='assets/images/Jonbenet.jpg'>",
    "<iframe src='https://giphy.com/embed/3o6fJaT95ICDXOhE1G' width='480' height='270' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/nba-expression-det-3o6fJaT95ICDXOhE1G'></p>",
    "<iframe src='https://giphy.com/embed/3o6wrBZzIdEks4mOSk' width='480' height='369' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/pop-music-lovefool-3o6wrBZzIdEks4mOSk'></p>",
    "<iframe src='https://giphy.com/embed/9ZEB3e1To2JTG' width='480' height='360' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/oscars-ben-affleck-matt-damon-academy-awards-9ZEB3e1To2JTG'></p>",
    "<iframe src='https://giphy.com/embed/46wTKar9B5WKI' width='480' height='368' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/south-park-kyle-stan-46wTKar9B5WKI'></p>",
    "<iframe src='https://giphy.com/embed/T77ZhoPrqcSeA' width='480' height='257' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/28-days-later-tw-blood-T77ZhoPrqcSeA'></p>",
    "<iframe src='https://giphy.com/embed/AYhe3KfVeASAg' width='480' height='264' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/whitney-houston-AYhe3KfVeASAg'></p>",
    "<iframe src='https://giphy.com/embed/3fe9Bw3Ej4GTS' width='480' height='247' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/disney-the-little-mermaid-ariel-3fe9Bw3Ej4GTS'></p>",
    "<iframe src='https://giphy.com/embed/xUPGcilIfnyYhZq7kI' width='480' height='372' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/cmt-mullet-billy-ray-cyrus-xUPGcilIfnyYhZq7kI'></p>"
];

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
        startScreen = "<div class='padding-50px-top logo'></div><div class='play-btn start-button' href='#' role='button'></div></p>";
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

    $("body").on("click", ".answer", function (event) {
        // correctAnswersArray = true;
        // console.log(correctAnswersArray[questionCounter]);
        clickSound.play();
        selectAnswer = $(this).text();
        if (correctAnswersArray[questionCounter].indexOf(selectAnswer) > 0) {
            // console.log(correctAnswersArray[questionCounter].indexOf(selectAnswer));

            SoundRight.play();
            clearInterval(clock);
            generateWin();
        } else {
            //console.log("wrong answer!");
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
    gameHTML = "<p class='logoHorizontal'><p class='timer-p text-center'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-white text-center'>You ran out of time! The correct answer was:<br /> " +
        correctAnswersArray[questionCounter] + "</p>" + "<iframe src='https://giphy.com/embed/3ornjXizVZDbngmjRK' width='480' height='480' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/captainobvious-3ornjXizVZDbngmjRK'></p>";

    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}

function generateWin() {
    correctAnswer++;
    gameHTML = "<p class='logoHorizontal'><p class='text-center timer-p text-medium'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " +
        correctAnswersArray[questionCounter] + "</p>" + imageArray[questionCounter];

    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}
// Wrong answer
function generateLoss() {
    incorrectAnswer++;
    gameHTML = "<p class='logoHorizontal'><p class='text-center timer-p text-medium'>Time Remaining: <span class='timer'>" +
        counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " +
        correctAnswersArray[questionCounter] + "</p>" + "<iframe src='https://giphy.com/embed/hPPx8yk3Bmqys' width='480' height='435' frameBorder='0' class='giphy-embed center-block img-wrong' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/request-donald-wrong-hPPx8yk3Bmqys'></p>";

    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //Current time in seconds
}

function generateHTML() {
    gameHTML = "<p class='logoHorizontal'><p class='timer-p'>Time Remaining: <span class='timer'>30</span></p><p>" +
        questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " +
        answerArray[questionCounter][0] + "</p><p class='answer'>B. " +
        answerArray[questionCounter][1] + "</p><p class='answer'>C. " +
        answerArray[questionCounter][2] + "</p><p class='answer'>D. " +
        answerArray[questionCounter][3] + "</p>";

    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 14) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timeWrapper();
    } else {
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
    gameHTML = "<p class='logo'><p class='text-center timer-p'>All done, here's how you did!" +
        "</p>" + "</p><p class='summary-correct text-center'>Correct Answers: " + correctAnswer +
        "</p>" + "<p class='text-center timer-p'>Wrong Answers: " + incorrectAnswer; + "</p>" +
        "<p class='text-center timer-p'>Unanswered: " + unansweredAnswer; + "</p>" +
        "<p class='text-center timer-p reset-button-container'>" +
        "<div class='play-btn start-button' href='#' role='button'></div>";

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