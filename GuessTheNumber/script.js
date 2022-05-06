'use strict';

let inGame = true;
let actualNumber = newNumber();

function newNumber() {
    return (Math.trunc(Math.random() * 20) + 1)
}

function testNumber(numberTest) {
    let userGuess = parseInt(document.querySelector(".guess").value);
    let rightNumber = numberTest;

    if (userGuess === rightNumber) {
        return true;
    } else {
        return false;
    }
}

function checkNumberDistance(numberTest) {
    let userGuess = parseInt(document.querySelector(".guess").value);
    let rightNumber = numberTest;

    if (userGuess > rightNumber) {
        document.querySelector('.message').textContent = 'Too high!';
    } else {
        document.querySelector('.message').textContent = 'Too low!';
    }

    let score = document.querySelector('.score').textContent - 1;
    document.querySelector('.score').textContent = score;
}

function checkScore() {
    let userHighScore = document.querySelector(".highscore").textContent;
    let userScore = document.querySelector(".score").textContent;

    if (userScore > userHighScore) {
        document.querySelector(".highscore").textContent = userScore;
    }
}

document.querySelector('.again').addEventListener('click', function() {
    actualNumber = newNumber();
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".number").textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = '#222';
    inGame = true;
})

document.querySelector('.check').addEventListener('click', function() {

    let userGuess = parseInt(document.querySelector('.guess').value);

    if (inGame && userGuess) {
        console.log(actualNumber)

        if (testNumber(actualNumber)) {
            document.querySelector("body").style.backgroundColor = 'green';
            document.querySelector(".message").textContent = 'Correct!';
            document.querySelector(".number").textContent = actualNumber;

            checkScore()
            inGame = false;
        } else {
            if (document.querySelector('.score').textContent > 1) {
                checkNumberDistance(actualNumber);
            } else {
                document.querySelector('.score').textContent = '0';
                document.querySelector(".message").textContent = 'You lose :(';
                inGame = false;
            }
        }
    } else {
        document.querySelector('.message').textContent = 'No number selected!';
    }
});
