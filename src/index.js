import readlineSync from 'readline-sync';

let userName;

const greeting = (game = 'brain-games') => {
  console.log('Welcome to the Brain Games!');

  if (game === 'brain-even') {
    console.log('Answer "yes" if number even otherwise answer "no".\n');
  }

  // Хак под винду
  // https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
  process.stdin.isTTY = true;
  process.stdout.isTTY = true;

  userName = readlineSync.question('May I have your name? ');

  if (game !== 'brain-even') {
    console.log(`Hello ${userName}!`);
  } else {
    console.log(`Hello ${userName}!\n`);
  }
};

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

const brainEvenGame = () => {
  let winCounter = 0;
  do {
    const randomNumber = getRandomNumber();
    const isEvenNumber = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === isEvenNumber) {
      console.log('Correct!');
      winCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  while (winCounter !== 3);

  if (winCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { greeting, brainEvenGame };
