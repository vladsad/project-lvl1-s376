import {
  playGame,
} from '../gameCore';

import getRandomNumber from '../utilits';

const getRandomItemFromArray = array => array[
  Math.floor(Math.random() * array.length)
];

const makeQuestionAnswer = () => {
  const mathSignArray = ['+', '-', '*'];
  const mathSign = getRandomItemFromArray(mathSignArray);
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${mathSign} ${number2}`;
  let answer = '';
  switch (mathSign) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    default:
      answer = number1 * number2;
      break;
  }
  return [question, answer];
};

const brainCalcGame = () => {
  const gameDescription = 'What is the result of the expression?\n';
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainCalcGame;
