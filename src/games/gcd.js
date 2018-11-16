import readlineSync from 'readline-sync';
import {
  welcome, getUserName, getRandomNumber, twoNumberNod,
} from '../index';

const brainGcdGame = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.\n');
  const userName = getUserName();

  const attempts = 3;

  for (let i = 0; i < attempts; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const question = `${number1} ${number2}`;
    const rightAnswer = twoNumberNod(number1, number2);

    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainGcdGame;
