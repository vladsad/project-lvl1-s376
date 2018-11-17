import {
  playGame,
} from '../gameCore';

import getRandomNumber from '../utilits';

const arrayToString = (array) => {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    string += ` ${array[i]}`;
  }
  return string;
};

const changeItemInArray = (_array, position, what) => {
  const array = _array;
  const replaceableItem = array[position];
  array[position] = what;
  return [array, replaceableItem];
};

const makeProgression = (start, range, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * range);
  }
  return progression;
};

const makeQuestionAnswer = () => {
  const firstElementOfProgression = getRandomNumber();
  const rangeForProgression = getRandomNumber();
  const lengthOfProgression = 10;

  const positionForGuess = getRandomNumber(0, lengthOfProgression - 1);
  const whatChange = '..';

  const progression = makeProgression(firstElementOfProgression,
    rangeForProgression, lengthOfProgression);
  const questionAnswer = changeItemInArray(progression, positionForGuess, whatChange);

  const question = arrayToString(questionAnswer[0]);
  const rightAnswer = questionAnswer[1];

  return [question, rightAnswer];
};

const brainProgressionGame = () => {
  const gameDescription = 'What is the result of the expression?\n';
  playGame(gameDescription, makeQuestionAnswer);
};

export default brainProgressionGame;
