#!/usr/bin/env node

import readlineSync from "readline-sync";

const checkForEvenNumber = () => {
  let thereMistakes = false; // Есть ошибки

  console.log(`Welcome to the Brain Games!`);

  const userName = readlineSync.question("May I have your name? ");

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question("Your answer: ");
    const isEvenNumberCorrect = isEvenNumber(randomNumber);

    if (checkResultAnswer(isEvenNumberCorrect, answer)) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          isEvenNumberCorrect ? "yes" : "no"
        }'`
      );
      console.log(`Let's try again, ${userName}!`);
      thereMistakes = true;
      break;
    }
  }

  if (!thereMistakes) {
    console.log(`Congratulations, ${userName}!`);
  }
};

// Получает случайное пятизначноe число.
const getRandomNumber = () => Math.floor(Math.random() * 10 ** 5);

// Определяет, является ли число четным.
const isEvenNumber = (number) => number % 2 === 0;

// Сверяет ответ пользователя с правильным. Истина - ответ верный.
const checkResultAnswer = (isEvenNumberCorrect, answer) => {
  if (
    (isEvenNumberCorrect && answer === "yes") ||
    (!isEvenNumberCorrect && answer === "no")
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkForEvenNumber();
