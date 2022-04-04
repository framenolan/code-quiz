var startGame = document.querySelector(".startButton");
// var answerButton = document.querySelectorAll(".answerButton")
var showHighscore = document.querySelector(".showLeaderboard")
var viewHighscore = document.querySelector(".viewLeaderboard")
var playAgain = document.querySelector(".playAgain")
var startAgain = document.querySelector(".startAgain")

var instructionsPage = document.querySelector(".instructionsPage");
var questionPage = document.querySelector(".questionPage");
var leaderboardPage = document.querySelector(".leaderboardPage")
var scorePage = document.querySelector(".scorePage");

var secondsLeft = 2
var timeEl = document.querySelector("#countdownTimer")

var score = 0

flashcards()

function start() {
    startTime()
    instructionsPage.setAttribute("data-show", "hidden")
    questionPage.setAttribute("data-show", "show")
}

// When time runs out, page changes to scorePage
function gameOver() {
    secondsLeft = 5
    questionPage.setAttribute("data-show", "hidden")
    scorePage.setAttribute("data-show", "show")
    var yourScore = document.querySelector("#yourScore")
    yourScore.textContent = score
}

function reset() {
    scorePage.setAttribute("data-show", "hidden")
    leaderboardPage.setAttribute("data-show", "hidden")
    instructionsPage.setAttribute("data-show", "show")
}

function highscore() {
    scorePage.setAttribute("data-show", "hidden")
    instructionsPage.setAttribute("data-show", "hidden")
    leaderboardPage.setAttribute("data-show", "show")
}

// Interval countdown timer to show time remaining
function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000)
}

function answerQuestion() {
    
    // Update .questionText textContent to a question

}

function flashcards() {
    var arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var arrayOperators = ["-","+","*"]
    
    function pullChar(array) {
        varRandom = Math.floor(Math.random() * array.length)
        currentChar = array[varRandom]
        return(currentChar)
    }
    
    function doTheWrongMath() {
        valueA = pullChar(arrayNum)
        operator = pullChar(arrayOperators)
        valueB = pullChar(arrayNum)

        console.log(valueA,operator,valueB)
        
        answer = eval(valueA + operator + valueB)
        console.log(answer)
        return(answer)
    }

    // create array of possible answers
    var possibleArray = [0]
    for (let i = 0; i <= arrayNum.length; i++) {
        var result = doTheWrongMath()
        if (possibleArray.includes(result)) {
        doTheWrongMath()
        } else {
        possibleArray.push(result)
        console.log(possibleArray)
        }
    }

    var wrongAnswer1 = pullChar(possibleArray)
    var wrongAnswer2 = pullChar(possibleArray)
    var wrongAnswer3 = pullChar(possibleArray)

    // if (wrongAnswer1 !== wrongAnswer2) {
    //     wrongAnswer2 = pullChar(possibleArray)
    // } else {
    //     return wrongAnswer3
    // }

    var wrongEl1 = document.querySelector("#answer2")
    var wrongEl2 = document.querySelector("#answer3")
    var wrongEl3 = document.querySelector("#answer4")

    wrongEl1.textContent = wrongAnswer1
    wrongEl2.textContent = wrongAnswer2
    wrongEl3.textContent = wrongAnswer3

    // chose 3 other answers out of possible array

    // verify that chosen answers don't match real answer

    // update text content of answer buttons
}

//CREATE ARRAY LIST OF QUESTIONS
    //1)EACH QUESTION IS ITS OWN ARRAY
        //ARRAY[0] IS THE QUESTION
        //ARRAY[1-4] ARE THE CHOICES
        //ARRAY[5] IS THE CORRECT ANSWER


viewHighscore.addEventListener("click", highscore)
// Button to start the game
startGame.addEventListener("click", start);

// On Score page, player chooses to play again or view the leaderboard
playAgain.addEventListener("click", reset)
showHighscore.addEventListener("click", highscore)

// Leaderboard Page buttons
startAgain.addEventListener("click", reset)



//     Timer starts counting when Start Game button is pushed
//     TODO: Update to subtract time when question answered incorrectly
//     When timer hits 0, game ends

// When Start Button is clicked...
//     Countdown timer counts down
//     First question is shown
//         Four buttons with possible answers are shown
//         On answer button click...
//             when correct: show Right Message, update page with new question/answers, add 1 to score
//             when incorrect: show Wrong message, update page with new question/answers, subtract time from score
//     When timer ends, change to Final Score Page
//     When all questions are answered, change to final score page

// Final Score Page:
//     display score count
//     show form for leaderboard input, submit button
//     Save input to localStorage
    
// Leaderboard Page:
//     show localStorage of leaderboard
//     concat sumbitted name and score
//     ranked by score, highest to lowest
//     button to clear localStorage of leaderboard
//     play again returns to Start Game button, or just runs the start game function
    
// Array of questions/answers
//     ...could be two arrays (one for questions, sub array(s) for answers)
//     ...may need a var for index of correct answer
    
    
