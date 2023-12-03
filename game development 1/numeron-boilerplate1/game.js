// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
let referenceTime = undefined;
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let TimerDiv = document.getElementById('timer');
TimeReset();
let score = 0;
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
number1.innerText = num1;
number2.innerText = num2;

let greaterThanBtn = document.getElementById('greater-than');
greaterThanBtn.addEventListener('click', function () {
  if (num1 > num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    number1.innerText = num1;
    number2.innerText = num2;
    clearInterval(referenceTime);
    TimeReset();
    console.log('Correct Answer');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});

let equalTo = document.getElementById('equal-to');
equalTo.addEventListener('click', function () {
  if (num1 == num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    number1.innerText = num1;
    number2.innerText = num2;
    clearInterval(referenceTime);
    TimeReset();
    console.log('Correct');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});

let smallerThan = document.getElementById('lesser-than');
smallerThan.addEventListener('click', function () {
  if (num1 < num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    number1.innerText = num1;
    number2.innerText = num2;
    clearInterval(referenceTime);
    TimeReset();
    console.log('Correct Answer');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});

function TimeReset() {
  let Time = 5;
  TimerDiv.innerText = Time;
  referenceTime = setInterval(() => {
    Time = Time - 1;
    TimerDiv.innerText = Time;
    if (Time == 0) {
      localStorage.setItem('score', score);
      window.location.href = './gameover.html';
    }
  }, 1000);
}