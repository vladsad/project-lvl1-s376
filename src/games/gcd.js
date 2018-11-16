import {
  getRandomNumber, twoNumberNod,
} from '../utilits';
import {
  welcomeMsg, printMsg,
} from '../printMsg';
import {
  getUserName, playGame,
} from '../gameCore';

const brainGcdGame = () => {
  welcomeMsg();
  printMsg('Find the greatest common divisor of given numbers.\n');
  const userName = getUserName();

  const attempts = 3;
  const questions = [];
  const rightAnswers = [];

  for (let i = 0; i < attempts; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    questions.push(`${number1} ${number2}`);
    rightAnswers.push((twoNumberNod(number1, number2)).toString());
  }

  playGame(userName, questions, rightAnswers);
};

export default brainGcdGame;
