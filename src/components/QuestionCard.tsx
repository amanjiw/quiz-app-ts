import React from "react";

// ## =>

type Prp = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
          <div className="">
            <button disabled={userAnswer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
