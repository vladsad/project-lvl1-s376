import getRandomNumber from '../utilits';

import {
  welcomeMsg, printMsg, getUserName, playGame,
} from '../gameCore';

const isEven = number => (number % 2 === 0);

const brainEvenGame = () => {
  welcomeMsg();
  printMsg('Answer "yes" if number even otherwise answer "no".\n');

  const userName = getUserName();
  const question = getRandomNumber;
  const rightAnswer = number => (isEven(number) ? '\'yes\'' : '\'no\'');

  playGame(userName, question, rightAnswer);
};

export default brainEvenGame;
