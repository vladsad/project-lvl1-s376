import readlineSync from 'readline-sync';

const attempts = 3;

const playGame = (gameDescription, questionAnswerGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const questionAnswer = questionAnswerGenerator();
    const [question, answer] = questionAnswer;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
