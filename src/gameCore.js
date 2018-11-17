import readlineSync from 'readline-sync';

const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
};

const printMsg = (msg) => {
  console.log(msg);
};

const winGameMsg = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const loseGameMsg = (userName, userAnswer, rightAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const printQuestionMsg = (question) => {
  console.log(`Question: ${question}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const makeQuestionAnswer = (question, answer) => (msg) => {
  switch (msg) {
    case 'getQuestion':
      return question();
    case 'getAnswer':
      return answer(question());
    default:
      return '!!!error msg!!!';
  }
};

const getQuestion = questionAnswer => questionAnswer('getQuestion');
const getAnswer = questionAnswer => questionAnswer('getAnswer');

const playGame = (userName, question, answer) => {
  const attempts = 3;

  for (let i = 0; i < attempts; i += 1) {
    const questionAnswer = makeQuestionAnswer(question, answer);
    printQuestionMsg(getQuestion(questionAnswer));
    const userAnswer = getUserAnswer();
    const rightAnswer = getAnswer(questionAnswer);

    if (userAnswer === rightAnswer) {
      printMsg('Correct!');
    } else {
      loseGameMsg(userName, userAnswer, rightAnswer);
      return;
    }
  }
  winGameMsg(userName);
};

export {
  getUserName, playGame, getUserAnswer, welcomeMsg, printMsg, winGameMsg, loseGameMsg,
};
