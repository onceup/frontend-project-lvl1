import { cons } from '@hexlet/pairs';
import randomInt from '../utils/randomInt.js';
import playGame from '../index.js';

const minProgr = 5;
const maxProgr = 20;
const minD = 1;
const maxD = 50;
const maxStart = 100;

const description = 'What number is missing in the progression?';

const getGameParams = () => {
  const progrLen = randomInt(minProgr, maxProgr);
  const hiddenIndex = randomInt(0, progrLen);
  const d = randomInt(minD, maxD);
  const startNum = randomInt(1, maxStart);
  const question = [startNum];
  let lastNum = startNum;
  let correctAnswer;
  for (let i = 0; i < progrLen - 1; i += 1) {
    if (i === hiddenIndex) {
      correctAnswer = lastNum + d;
      question.push('..');
    } else {
      question.push(lastNum + d);
    }
    lastNum += d;
  }
  const gameParams = cons(question.join(' '), String(correctAnswer));

  return (description, gameParams);
};

export default () => {
  playGame(description, getGameParams);
};
