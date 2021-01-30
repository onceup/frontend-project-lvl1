import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsToWin = 3;

export default (description, getGameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  for (let i = 1; i <= roundsToWin; i += 1) {
    const gameParams = getGameParams();
    const question = car(gameParams);
    const correctAnswer = cdr(gameParams);

    const userAnswer = readlineSync.question(`Question: ${question}\nAnswer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulation ${userName}`);
};
