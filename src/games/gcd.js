import getRandomNumber from '../utilits';

import {
  getUserName, playGame, welcomeMsg, printMsg,
} from '../gameCore';

const twoNumberNod = (number1, number2) => {
  let x = number1;
  let y = number2;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

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
