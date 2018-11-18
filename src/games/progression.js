import getRandomNumber from '../utilities';

import playGame from '../gameCore';

const makeProgression = (start, range, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * range);
  }
  return progression;
};

const gameDescription = 'What is the result of the expression?';
const length = 10;

const makeQuestionAnswer = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber();
  const positionForGuess = getRandomNumber(0, length - 1);
  const hiddenElementSign = '..';
  const progression = makeProgression(firstElement,
    step, length);

  const answer = progression[positionForGuess];
  progression[positionForGuess] = hiddenElementSign;
  const question = progression.join(' ');

  return [question, answer.toString()];
};

export default () => playGame(gameDescription, makeQuestionAnswer);
