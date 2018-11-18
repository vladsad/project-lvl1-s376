import getRandomNumber from '../utilities';

import playGame from '../gameCore';

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestionAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => playGame(gameDescription, makeQuestionAnswer);
