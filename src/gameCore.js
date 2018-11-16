import readlineSync from 'readline-sync';
import {
  printMsg, winGameMsg, loseGameMsg,
} from './printMsg';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const playGame = (_userName, _questions, _rightAnswers) => {
  for (let i = 0; i < _questions.length; i += 1) {
    const rightAnswer = _rightAnswers[i];
    const userAnswer = getUserAnswer(_questions[i]);

    if (userAnswer === rightAnswer) {
      printMsg('Correct!');
    } else {
      loseGameMsg(_userName, userAnswer, rightAnswer);
      return;
    }
  }
  winGameMsg(_userName);
};

export {
  getUserName, playGame, getUserAnswer,
};
