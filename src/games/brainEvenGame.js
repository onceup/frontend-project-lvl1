import readlineSync from 'readline-sync';
import randomInt from '../utils/randomInt.js';

const isEven = (num) => num % 2 === 0;

const roundsToWin = 3;

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= roundsToWin; i += 1) {
    const num = randomInt(1, 100);
    console.log(`Question: ${num} `);
    const userAnswer = readlineSync.question('Answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again, Bill!");
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulation');
};
