import { cons } from '@hexlet/pairs';
import randomInt from '../utils/randomInt.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const max = 100;

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getGameParams = () => {
  const num1 = randomInt(1, max);
  const num2 = randomInt(1, max);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return cons(question, correctAnswer);
};

export default () => {
  playGame(description, getGameParams);
};
