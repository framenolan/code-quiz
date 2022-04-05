// querySelectors for navigation buttons
var startGame = document.querySelector(".startButton");
var showHighscore = document.querySelector(".showLeaderboard")
var viewHighscore = document.querySelector(".viewLeaderboard")
var playAgain = document.querySelector(".playAgain")
var startAgain = document.querySelector(".startAgain")
var saveScore = document.querySelector(".saveScore")
var clearLeaderboard = document.querySelector(".clearLeaderboard")

// querySelectors for question text and answer buttons
var answerButton1 = document.querySelector("#answer1")
var answerButton2 = document.querySelector("#answer2")
var answerButton3 = document.querySelector("#answer3")
var answerButton4 = document.querySelector("#answer4")
var questionText = document.querySelector(".questionText")
var result = document.querySelector(".result")

// querySelectors for the four "pages"
var instructionsPage = document.querySelector(".instructionsPage");
var questionPage = document.querySelector(".questionPage");
var leaderboardPage = document.querySelector(".leaderboardPage");
var scorePage = document.querySelector(".scorePage");

// Variables for time remaining
var secondsLeft = 30;
var timeEl = document.querySelector("#countdownTimer");

// Variable for score
var score = 0;
var timerInterval = ''

// Arrays of questions to be asked, with question text as i=0, answer choices at i=1-4, correct answer at i=5
var question1 = ["In what year did the Stonewall Riots happen?", "1972", "1965", "1969", "1975", "1969"]
var question2 = ["Who was the first winner of RuPaul's Drag Race?", "Bebe Zahara Benet", "Tyra Sanchez", "Ongina", "Lady Bunny", "Bebe Zahara Benet"]
var question3 = ["Who wrote Hedwig and the Angry Inch?", "Harvey Milk", "Elton John", "Cyndy Lauper", "John Cameron Mitchell", "John Cameron Mitchell"]
var question4 = ["What TV show featured the largest transgender cast in History?", "Transparent", "Pose", "Will & Grace", "Glee", "Pose"]
var question5 = ["In what year did same sex marriage become legal at the federal level in the United States?", "1969", "2001", "2012", "2015", "2015"]
var questionList = [question1, question2, question3, question4, question5]

// Variables for tracking the current question and correct answer
var currentQuestion = question1
var correctAnswer = currentQuestion[5]
var currentQuestionIndex = 0

// Event Listeners for when an answer is guessed
answerButton1.addEventListener("click",recordGuess)
answerButton2.addEventListener("click",recordGuess)
answerButton3.addEventListener("click",recordGuess)
answerButton4.addEventListener("click",recordGuess)

// Starts the game
function start() {
    startTime()
    changeQuestion()
    instructionsPage.setAttribute("data-show", "hidden")
    questionPage.setAttribute("data-show", "show")
}

// Saves guess value to be compared
function recordGuess (event) {
    var currentGuess = event.target
    var guessValue = currentGuess.value
    answerQuestion(guessValue)
    return
}

// Compares player guess to correct answer
// If matched, score increases by 1
// If not matched, 5 seconds removed from timer
// Either way, then the question moves to the next one
function answerQuestion(guessValue) {
    if (guessValue == correctAnswer) {
        score++;
        // localStorage.setItem("score", score);
        result.textContent = "Correct!";
        newQuestion(currentQuestionIndex);
    } else {
        result.textContent = "Wrong :(";
        reduceTime();
        newQuestion(currentQuestionIndex);
    }
}

// Subtracts 5 seconds from timer, used if a question is answer incorrectly
function reduceTime() {
    secondsLeft = secondsLeft-5
}

// Changes current question to next question in list, game ends if player runs out of questions
function newQuestion(i) {
    if (currentQuestionIndex >= questionList.length-1) {
        gameOver();
        return;
    } else {
        currentQuestion = questionList[i+1];
        currentQuestionIndex = currentQuestionIndex+1;
        correctAnswer = currentQuestion[5];
        changeQuestion()
    }
}

// Changes question and answer text to current question
function changeQuestion(){
    questionText.textContent = currentQuestion[0]
    answerButton1.value = currentQuestion[1]
    answerButton2.value = currentQuestion[2]
    answerButton3.value = currentQuestion[3]
    answerButton4.value = currentQuestion[4]
}

// When time runs out, navigates to scorePage, adds any remaining seconds to score total
function gameOver() {
    clearInterval(timerInterval)
    timeEl.textContent = "--"
    score = secondsLeft + score
    questionPage.setAttribute("data-show", "hidden")
    scorePage.setAttribute("data-show", "show")
    var yourScore = document.querySelector("#yourScore")
    yourScore.textContent = score
}

// Navigates to instructionPage from scorePage or leaderboardPage, resets starter variables
function reset() {
    scorePage.setAttribute("data-show", "hidden")
    leaderboardPage.setAttribute("data-show", "hidden")
    instructionsPage.setAttribute("data-show", "show")
    score = 0;
    secondsLeft = 30;
    currentQuestion = question1;
    correctAnswer = currentQuestion[5];
    currentQuestionIndex = 0;
    result.textContent = "";
    clearInterval(timerInterval)
}

// Navigates to leaderboardPage
function highscore() {
    scorePage.setAttribute("data-show", "hidden")
    instructionsPage.setAttribute("data-show", "hidden")
    questionPage.setAttribute("data-show", "hidden")
    leaderboardPage.setAttribute("data-show", "show")
}

// Interval countdown timer to show time remaining
function startTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
            return
        }
    }, 1000)
    return secondsLeft;
}


// Button to view Leaderboard at any time
viewHighscore.addEventListener("click", highscore)

// Button to start the game
startGame.addEventListener("click", start);

// On Score page, player chooses to play again or view the leaderboard
playAgain.addEventListener("click", reset)
saveScore.addEventListener("click", onTheBoard)

// Leaderboard Page buttons
startAgain.addEventListener("click", reset)
clearLeaderboard.addEventListener("click", clearTheBoard)

// Saves current score and name to leaderboard
function onTheBoard() {
    var scoreName = document.querySelector("#scoreName")
    var playerName = scoreName.value
    var playerScore = score
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerScore", playerScore);
    highscore();

    var setRankings = document.querySelector(".rankings")

    var newRanking = document.createElement("li");
    newRanking.textContent = playerName+" scored "+playerScore+" points";
    setRankings.appendChild(newRanking);
}

// Deletes oldest score; couldn't figure out how to get it to delete all scores at once so it starts with first li
function clearTheBoard() {
    var setRankings = document.querySelector(".rankings li")
    setRankings.remove("li")
}
