import {
  getUserName, playGame, welcomeMsg, printMsg,
} from '../gameCore';

import getRandomNumber from '../utilits';

const getRandomItemFromArray = array => array[
  Math.floor(Math.random() * array.length)
];

const brainCalcGame = () => {
  welcomeMsg();
  printMsg('What is the result of the expression?\n');

  const userName = getUserName();

  const attempts = 3;
  const questions = [];
  const rightAnswers = [];

  const mathSignArray = ['+', '-', '*'];

  for (let i = 0; i < attempts; i += 1) {
    const mathSign = getRandomItemFromArray(mathSignArray);
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    questions.push(`${number1} ${mathSign} ${number2}`);

    switch (mathSign) {
      case '+':
        rightAnswers.push((number1 + number2).toString());
        break;
      case '-':
        rightAnswers.push((number1 - number2).toString());
        break;
      default:
        rightAnswers.push((number1 * number2).toString());
        break;
    }
  }

  playGame(userName, questions, rightAnswers);
};

export default brainCalcGame;
