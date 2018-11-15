import readlineSync from 'readline-sync';

// Хак под винду
// https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
process.stdin.isTTY = true;
process.stdout.isTTY = true;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const greeting = () => {
  welcome();
  getUserName();
};

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);
const isEven = number => (number % 2 === 0);

const brainEvenGame = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getUserName();

  const attempts = 3;

  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber();
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { greeting, brainEvenGame };
