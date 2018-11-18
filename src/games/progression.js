import playGame from '../gameCore';

import getRandomNumber from '../utilities';

const makeProgression = (start, range, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * range);
  }
  return progression;
};

const firstElement = getRandomNumber();
const step = getRandomNumber();
const length = 10;

const makeQuestionAnswer = () => {
  const positionForGuess = getRandomNumber(0, length - 1);
  const hiddenElementSign = '..';
  const progression = makeProgression(firstElement,
    step, length);

  const rightAnswer = progression[positionForGuess];
  progression[positionForGuess] = hiddenElementSign;
  const question = progression.join(' ');

  return [question, rightAnswer];
};

const gameDescription = 'What is the result of the expression?\n';

const brainProgressionGame = () => {
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainProgressionGame;
