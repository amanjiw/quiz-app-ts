import React, { useEffect, useState } from "react";
import { fetchQuizQuestions, Difficulty } from "./API";
import QuestionCard from "./components/QuestionCard";

// ## =>

const TOTA_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<{}[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  console.log(fetchQuizQuestions(TOTA_QUESTIONS, Difficulty.EASY));

  const startTrivial = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start" onClick={startTrivial}>
        start
      </button>
      <p className="score">Score: </p>
      <p className=""> Loading questions... </p>
      {/* <QuestionCard
        qusetionsNr={number + 1}
        totalQuestions={TOTA_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}></button>
    </div>
  );
};

export default App;
