import game from "../index.js";
import { getRandomIntInclusive } from "../brain-functions.js";

const descriptionGame = "What number is missing in the progression?";

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
  const progressionNumbersCopy = progressionNumbers.slice();

  progressionNumbersCopy[indexEmptyNumber] = "..";

  const result = progressionNumbersCopy.join(" ");

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
