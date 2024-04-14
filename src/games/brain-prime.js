import game from '../index.js';
import getRandomIntInclusive from '../brain-functions.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomIntInclusive(1, 100);

  const question = number;
  const answerCorrect = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, String(answerCorrect)];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
