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

const getRandomItemFromArray = array => array[
  Math.floor(Math.random() * array.length)
];

export {
  greeting, welcome, getUserName, getRandomNumber, isEven, getRandomItemFromArray,
};
