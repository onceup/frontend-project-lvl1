import { cons } from '@hexlet/pairs';
import randomInt from '../utils/randomInt.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const max = 100;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameParams = () => {
  const question = randomInt(1, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameParams = cons(question, String(correctAnswer));

  return (description, gameParams);
};

export default () => {
  playGame(description, getGameParams);
};
