

// Хак под винду
// https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
process.stdin.isTTY = true;
process.stdout.isTTY = true;

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

const isEven = number => (number % 2 === 0);

const getRandomItemFromArray = array => array[
  Math.floor(Math.random() * array.length)
];

const twoNumberNod = (number1, number2) => {
  let x = number1;
  let y = number2;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export {
  getRandomNumber, isEven, getRandomItemFromArray, twoNumberNod,
};
