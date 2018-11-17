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

const isString = object => typeof object === 'string';

const formatUserAnswer = (userAnswer, rightAnswer) => (isString(rightAnswer) ? `'${userAnswer}'` : Number(userAnswer));

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

const playGame = (gameDescription, questionAnswerGenerator) => {
  welcomeMsg();
  printMsg(gameDescription);

  const userName = getUserName();

  const attempts = 3;
  for (let i = 0; i < attempts; i += 1) {
    const questionAnswer = questionAnswerGenerator();
    printQuestionMsg(questionAnswer[0]);
    let userAnswer = getUserAnswer();
    const rightAnswer = questionAnswer[1];

    userAnswer = formatUserAnswer(userAnswer, rightAnswer);

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
