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

export {
  welcomeMsg, printMsg, winGameMsg, loseGameMsg,
};
