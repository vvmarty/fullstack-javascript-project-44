import game from '../index.js';
import getRandomIntInclusive from '../brain-functions.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomIntInclusive(0, 100);

  const question = number;
  const answerCorrect = isEvenNumber(number) ? 'yes' : 'no';

  return [question, answerCorrect];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
