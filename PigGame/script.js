'use strict';

let inGame = true;

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceImg = document.querySelector('.dice');

let currentScore = 0;
let currentPlayer = 0;

let player0Score = 0;
let player1Score = 0;

function resetGame() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceImg.classList.add('hidden');

    currentScore = 0;
    currentPlayer = 0;

    player0Score = 0;
    player1Score = 0;
}

function updateScore() {
    if (currentPlayer === 0) {
        current0El.textContent = currentScore;
    } else {
        current1El.textContent = currentScore;
    }
};

function changePlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
};

function checkWinner() {
    if (player0Score >= 100) {
        player0El.classList.add('player--winner')
        inGame = false;
    } else if (player1Score >= 100) {
        player1El.classList.add('player--winner')
        inGame = false;
    }
};

resetGame()

btnRoll.addEventListener('click', function() {
    if (inGame) {
        let dice = Math.trunc((Math.random() * 6) + 1)
        diceImg.classList.remove('hidden')
        diceImg.src = `dice-${dice}.png`
    
        if (dice !== 1) {
            currentScore += dice;
        } else {
            currentScore = 0;
            updateScore()
            changePlayer()
        }
    
        updateScore()
    }
});

btnHold.addEventListener('click', function() {
    if (inGame) {
        if (currentScore !== 0) {
            if (currentPlayer === 0) {
                player0Score += currentScore;
                score0El.textContent = player0Score;
            } else {
                player1Score += currentScore;
                score1El.textContent = player1Score;
            }
    
            currentScore = 0;
            updateScore();
            changePlayer();
            checkWinner()
        }
    }
});

btnNew.addEventListener('click', function() {
    resetGame()
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    inGame = true;
});
