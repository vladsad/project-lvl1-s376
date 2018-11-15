import readlineSync from 'readline-sync';

// Хак под винду
// https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
process.stdin.isTTY = true;
process.stdout.isTTY = true;

let userName;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

const showGameDescription = (description) => {
  console.log(description);
};

const greeting = () => {
  welcome();
  getUserName();
};

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);
const isEven = number => (number % 2 === 0);


const brainEvenGame = () => {
  welcome();
  showGameDescription('Answer "yes" if number even otherwise answer "no".\n');
  getUserName();

  for (let i = 0; i < 3; i += 1) {
    const numberForGame = getRandomNumber();
    const rightAnswer = isEven(numberForGame) ? 'yes' : 'no';

    console.log(`Question: ${numberForGame}`);
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
