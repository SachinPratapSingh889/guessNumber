
let secretNum = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector(".score").textContent = score
document.querySelector(".highscore").textContent = highScore

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value)
    if (!guess) {
        displayMessage("No number😑!")
    }
    else if (guess === secretNum) {
        displayMessage("You won the game🎉!")
        if (score > highScore) {
            highScore = score
        }
        document.querySelector(".highscore").textContent = highScore
        document.querySelector("body").style.backgroundColor = "#2563eb"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNum
    }
    else  {
        if (score > 1) {
            displayMessage(guess > secretNum ? "Too high😶!" : "Too low😶!")
            score--
            document.querySelector(".score").textContent = score
        }
        else {
            displayMessage("You lost the game⏰!")
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    secretNum = Math.trunc(Math.random() * 20) + 1
    score = 20
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector('.guess').value = '';
}) 