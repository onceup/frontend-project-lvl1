import { cons } from '@hexlet/pairs';
import randomInt from '../utils/randomInt.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameParams = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameParams = cons(question, correctAnswer);
  return (description, gameParams);
};

export default () => {
  playGame(description, getGameParams);
};
