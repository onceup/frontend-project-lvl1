import { cons } from '@hexlet/pairs';
import randomInt from '../utils/randomInt.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';
const operations = '+-*';
const max = 25;

const getGameParams = () => {
  const firstNum = randomInt(1, max);
  const secondNum = randomInt(1, max);
  const operationIndex = randomInt(0, operations.length - 1);
  const operation = operations[operationIndex];
  const question = `${firstNum} ${operation} ${secondNum}`;

  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
      return false;
  }

  const gameParams = cons(question, String(correctAnswer));
  return (description, gameParams);
};

export default () => {
  playGame(description, getGameParams);
};
