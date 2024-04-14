import game from "../index.js";
import { getRandomIntInclusive } from "../brain-functions.js";

const descriptionGame = "What is the result of the expression?";

const getExpression = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    default:
      return 0;
  }
};

const getRandomOperation = () => {
  const operations = ["+", "-", "*"];

  return operations[getRandomIntInclusive(0, 2)];
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomIntInclusive(0, 10);
  const number2 = getRandomIntInclusive(0, 10);
  const operation = getRandomOperation();

  const question = getExpression(number1, number2, operation);
  const answerCorrect = calculateExpression(number1, number2, operation);

  return [question, String(answerCorrect)];
};

export default () => {
  game(descriptionGame, getQuestionAndAnswer);
};
