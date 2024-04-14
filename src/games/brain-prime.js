import game from "../index.js";

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Получает случайное целое число в заданном интервале, включительно
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

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
  const answerCorrect = isPrimeNumber(number) ? "yes" : "no";

  return [question, String(answerCorrect)];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
