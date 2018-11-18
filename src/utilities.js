// Хак под винду
// https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
process.stdin.isTTY = true;
process.stdout.isTTY = true;

const getRandomNumber = (min = 1, max = 100) => Math.floor((Math.random() * max) + min);

export default getRandomNumber;
