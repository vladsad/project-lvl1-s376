import getRandomNumber from '../utilities';

import playGame from '../gameCore';

const gcd = (number1, number2) => {
  let x = number1;
  let y = number2;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeQuestionAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return [question, answer.toString()];
};

export default () => playGame(gameDescription, makeQuestionAnswer);
