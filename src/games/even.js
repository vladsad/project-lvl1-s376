import getRandomNumber from '../utilities';

import playGame from '../gameCore';

const isEven = number => (number % 2 === 0);

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const makeQuestionAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const rightAnswer = isEven(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => playGame(gameDescription, makeQuestionAnswer);
