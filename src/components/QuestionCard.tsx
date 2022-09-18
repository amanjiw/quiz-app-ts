import React from "react";
import { Warraper, ButtonWrapper } from "./QuestionCard.styles";

import { AnswerObject } from "../App";

// ## =>

type Prp = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  qusetionsNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Prp> = ({
  question,
  answers,
  callback,
  userAnswer,
  qusetionsNr,
  totalQuestions,
}) => {
  return (
    <Warraper>
      <p className="number">
        Question:{qusetionsNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="">
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
            className=""
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Warraper>
  );
};

export default QuestionCard;
