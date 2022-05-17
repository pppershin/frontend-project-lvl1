import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isPrime = (num) => {
  if (num <= 1 || Number.isInteger(num) === false) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `Question: ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [answer, question];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => runGame(description, generateRound);
