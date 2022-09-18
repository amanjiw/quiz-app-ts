import React from "react";

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
    <div>
      <p className="number">
        Question:{qusetionsNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="">
        {answers.map((answer) => (
          <div key={answer} className="">
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
