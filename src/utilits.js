// Хак под винду
// https://github.com/anseki/readline-sync/issues/33#issuecomment-212849534
process.stdin.isTTY = true;
process.stdout.isTTY = true;

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

export default getRandomNumber;
