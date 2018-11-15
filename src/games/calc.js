import readlineSync from 'readline-sync';
import {
  welcome, getUserName, getRandomNumber, getRandomItemFromArray,
} from '../index';

const brainCalcGame = () => {
  welcome();
  console.log('What is the result of the expression?\n');
  const userName = getUserName();

  const attempts = 3;
  const mathSignArray = ['+', '-', '*'];

  for (let i = 0; i < attempts; i += 1) {
    const mathSign = getRandomItemFromArray(mathSignArray);
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `${number1} ${mathSign} ${number2}`;

    let rightAnswer;
    switch (mathSign) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      default:
        rightAnswer = number1 * number2;
        break;
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainCalcGame;
