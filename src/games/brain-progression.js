import game from "../index.js";

const descriptionGame = "What number is missing in the progression?";

// Получает случайное целое число в заданном интервале, включительно
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

const getProgressionNumbers = () => {
  const result = [];

  const step = getRandomIntInclusive(2, 10);

  let i = getRandomIntInclusive(0, 100);

  for (i; i <= 10000; i += step) {
    if (result.length === 10) {
      break;
    }
    result.push(i);
  }

  return result;
};

const getQuestion = (progressionNumbers, indexEmptyNumber) => {
  let result = "";

  for (let i = 0; i < progressionNumbers.length; i += 1) {
    if (i === indexEmptyNumber) {
      result += " ..";
    } else {
      result += ` ${progressionNumbers[i]}`;
    }
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const progressionNumbers = getProgressionNumbers();

  const indexEmptyNumber = getRandomIntInclusive(0, 9);

  const question = getQuestion(progressionNumbers, indexEmptyNumber);
  const answerCorrect = progressionNumbers[indexEmptyNumber];

  return [question, String(answerCorrect)];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
