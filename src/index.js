import readlineSync from "readline-sync";

const countRound = 3;

const game = (descriptionGame, getQuestionAndAnswer) => {
  let isError = false;

  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");

  console.log(`Hello, ${userName}!`);

  console.log(descriptionGame);

  for (let i = 0; i < countRound; i += 1) {
    const [question, answerCorrect] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question(`Your answer: `);

    if (answerUser === answerCorrect) {
      console.log("Correct!");
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
      console.log(`Let's try again, ${userName}!`);

      isError = true;
      break;
    }
  }

  if (!isError) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
