import getRandomNumber from '../utilits';

import {
  playGame,
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

const makeQuestionAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const answer = twoNumberNod(number1, number2);
  return [question, answer];
};

const brainGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.\n';
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainGcdGame;
