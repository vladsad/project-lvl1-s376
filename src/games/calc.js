import playGame from '../gameCore';

import getRandomNumber from '../utilities';

const gameDescription = 'What is the result of the expression?';

const mathSignArray = ['+', '-', '*'];

const makeQuestionAnswer = () => {
  const mathSign = mathSignArray[getRandomNumber(0, mathSignArray.length - 1)];
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
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainCalcGame;
