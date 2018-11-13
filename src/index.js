import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  // Хак под винду
  // https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
  process.stdin.isTTY = true;
  process.stdout.isTTY = true;

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

export default greeting;
