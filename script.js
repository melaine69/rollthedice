
/*TARGET DOM ELEMENTS */
const score1 = document.getElementById('score-0')
const score2 = document.getElementById('score-1')

const diceImg = document.querySelector('.dice-img')

const currentScore1 = document.getElementById('current-0')
const currentScore2 = document.getElementById('current-1')

const player1 = document.querySelector('.player-0')
const player2 = document.querySelector('.player-1')

const btnNewGame = document.querySelector('.btn-new')
const btnHold = document.querySelector('.btn-hold')
const btnRollDice = document.querySelector('.btn-roll')

player1.classList.remove('current-player');
player2.classList.remove('current-player');
player1.classList.add('current-player'); // player 1 begining

/* BY DEFAULT VALUES 0*/
let scores = [0,0] /* we use array because, we have two players */
let currentScore = 0
let currentPlayer = 0
let gamingStart = true

score1.textContent = 0
score2.textContent = 0
currentScore1.textContent = 0
currentScore2.textContent = 0

diceImg.style.display='none'; /* the roll is hidden by default */

function switchPlayer() {
  document.getElementById(`current-${currentPlayer}`).textContent = 0
  currentPlayer = currentPlayer === 0 ? 1 : 0
  currentScore = 0
  /* when the player switchs, the small dot goes next to the current player */
  player1.classList.toggle('current-player');
  player2.classList.toggle('current-player');
}

  btnRollDice.addEventListener('click', () => {
  /*  GENERATE RANDOM DICE NUMBER IMAGE */
  if(gamingStart){
    let randomDice =  Math.floor(Math.random() * 6) + 1
    diceImg.style.display='block'; /* the event click sets off the roll image */
    diceImg.src = `./img/dice-${randomDice}.png`
    /* we display the score of the dice in the current score and we implement it */
    if(randomDice !==1){
      currentScore += randomDice
      document.getElementById(`current-${currentPlayer}`).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
  })
 
/* le premier joueur qui obtient 100 points à gagner*/


/* we keep the current score thanks to "hold button", and we display it in "scores" */
btnHold.addEventListener('click', () => {
  if(gamingStart){
    scores[currentPlayer] += currentScore;
    document.getElementById(`score-${currentPlayer}`).textContent = scores[currentPlayer];
  }else {
    switchPlayer();
  }
  
})

/* CLEAR THE GAME */
btnNewGame.addEventListener('click', () => {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  gamingStart = true;

  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  player1.classList.remove('current-player');
  player2.classList.remove('current-player');
  player1.classList.add('current-player'); // player 1 begining
  diceImg.style.display='none';
})

