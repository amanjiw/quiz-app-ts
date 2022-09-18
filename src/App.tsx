import React, { useEffect, useState } from "react";
import {
  fetchQuizQuestions,
  Difficulty,
  QuestionsState,
  Question,
} from "./API";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// ## =>

const TOTA_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  console.log(questions);

  const startTrivial = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTA_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      console.log(correct, questions[number].correct_answer, answer);
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTA_QUESTIONS) {
      setGameOver(true);
      return;
    }

    setNumber(nextQuestion);
  };

  return (
    <>
      <GlobalStyle />{" "}
      <div className="App">
        <h1>Quiz App</h1>
        {(gameOver || userAnswers.length === TOTA_QUESTIONS) && (
          <button className="start" onClick={startTrivial}>
            start
          </button>
        )}
        {!gameOver && <p className="score">Score:{score} </p>}
        {loading && <p className=""> Loading questions... </p>}
        {!loading && !gameOver && (
          <QuestionCard
            qusetionsNr={number + 1}
            totalQuestions={TOTA_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === number + 1 &&
          number !== TOTA_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </div>
    </>
  );
};

export default App;
