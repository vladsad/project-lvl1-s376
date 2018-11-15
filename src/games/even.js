import readlineSync from 'readline-sync';
import {
  welcome, getUserName, getRandomNumber, isEven,
} from '../index';

const brainEvenGame = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getUserName();

  const attempts = 3;

  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber();
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainEvenGame;
