import {
  isEven, getRandomNumber,
} from '../utilits';
import {
  welcomeMsg, printMsg,
} from '../printMsg';
import {
  getUserName, playGame,
} from '../gameCore';

const brainEvenGame = () => {
  welcomeMsg();
  printMsg('Answer "yes" if number even otherwise answer "no".\n');

  const userName = getUserName();

  const attempts = 3;
  const questions = [];
  const rightAnswers = [];

  for (let i = 0; i < attempts; i += 1) {
    const number = getRandomNumber();
    questions.push(number);
    rightAnswers.push(isEven(number) ? '\'yes\'' : '\'no\'');
  }

  playGame(userName, questions, rightAnswers);
};

export default brainEvenGame;
