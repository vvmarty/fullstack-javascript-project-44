import game from '../index.js';
import getRandomIntInclusive from '../brain-functions.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const getQuestion = (number1, number2) => `${number1} ${number2}`;

const getQuestionAndAnswer = () => {
  const number1 = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);

  const question = getQuestion(number1, number2);
  const answerCorrect = getGcd(number1, number2);

  return [question, String(answerCorrect)];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
