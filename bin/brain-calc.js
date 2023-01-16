#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const getRandomOperator = () => Math.floor(Math.random() * 3);
  let result;
  let youAnswer;
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = getRandomOperator();
    switch (operator) {
      case 0:
        console.log(`Question: ${number1} + ${number2}`);
        result = number1 + number2;
        youAnswer = readlineSync.question('Your answer: ');
        if (Number(youAnswer) === result) {
          console.log('Correct!');
        } else {
          console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
          return console.log(`Let's try again, ${userName}!`);
        }
        break;
      case 1:
        console.log(`Question: ${number1} - ${number2}`);
        result = number1 - number2;
        youAnswer = readlineSync.question('Your answer: ');
        if (Number(youAnswer) === result) {
          console.log('Correct!');
        } else {
          console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
          return console.log(`Let's try again, ${userName}!`);
        }
        break;
      case 2:
        console.log(`Question: ${number1} * ${number2}`);
        result = number1 * number2;
        youAnswer = readlineSync.question('Your answer: ');
        if (Number(youAnswer) === result) {
          console.log('Correct!');
        } else {
          console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
          return console.log(`Let's try again, ${userName}!`);
        }
        break;
      default:
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

brainCalc();
