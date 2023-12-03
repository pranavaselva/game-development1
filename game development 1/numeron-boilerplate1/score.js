// Iteration 5: Store the player score and display it on the game over screen
let scoreGetFromStorage = localStorage.getItem('score');
console.log('Score :', scoreGetFromStorage);
let score_board = document.getElementById('score-board');
score_board.innerText = scoreGetFromStorage;

let playAgainImg = document.getElementById('play-again-button');
playAgainImg.addEventListener('click', function () {
  window.location.href = './index.html';
});