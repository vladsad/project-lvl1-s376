import getRandomNumber from '../utilits';

import {
  playGame,
} from '../gameCore';

const isEven = number => (number % 2 === 0);

const makeQuestionAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const rightAnswer = isEven(number) ? '\'yes\'' : '\'no\'';

  return [question, rightAnswer];
};

const brainEvenGame = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainEvenGame;
