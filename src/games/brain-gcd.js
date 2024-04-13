import game from "../index.js";

const descriptionGame = "Find the greatest common divisor of given numbers.";

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

// Получает случайное целое число в заданном интервале, включительно
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
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
