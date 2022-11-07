#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (youAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
    if (number % 2 !== 0) {
      if (youAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
brainEven();
