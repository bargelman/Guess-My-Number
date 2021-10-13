'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let attempt = document.querySelector('.attempt').textContent;
let score = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Not A Number!!! 🤬';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'GOOD Guess! 🏆';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    score = score + attempt;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High... ⤴️';
    attempt--;
    document.querySelector('.attempt').textContent = attempt;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low... ⤵️';
    attempt--;
    document.querySelector('.attempt').textContent = attempt;
  }
  if (attempt === 0) {
    document.querySelector('.message').textContent =
      '<<<GAME OVER 😤>>> Push <<Again!>> Button';
    document.querySelector('body').style.backgroundColor = '#DC143C';
    document.querySelector('.guess').value = '';
  }
  if (attempt === -1) {
    attempt = 5;
    document.querySelector('.attempt').textContent = attempt;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  attempt = 5;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.attempt').textContent = attempt;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
