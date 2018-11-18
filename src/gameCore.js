import readlineSync from 'readline-sync';

// ходят слухи что ментор пропускает строки
// yes is wrong answer ;(. Correct answer was no.
// хотя по ТЗ должно быть
// 'yes' is wrong answer ;(. Correct answer was 'no'.
//
// поэтому я и пытался сначала делать проверку на типы
// :3
//
// аскинему пока только с работы смогу сделать и уже постфактом для себя,так как проект кончился
// комменарий тоже будет удален после ответа для чистоты мастер векты в репозетории
const checkToSetQuotes = str => (str === 'yes' || str === 'no' ? `'${str}'` : str);

const attempts = 3;

const playGame = (gameDescription, questionAnswerGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const questionAnswer = questionAnswerGenerator();
    const [question] = questionAnswer;
    let [, answer] = questionAnswer;

    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      userAnswer = checkToSetQuotes(userAnswer);
      answer = checkToSetQuotes(answer);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
