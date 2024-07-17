import React from "react";
import { Progress } from "./ui/progress";

interface QuestionItemProps {
  quesNumber: number | undefined;
  question: string | undefined;
  total: number | undefined;
  theme: string | undefined;
}

const QuestionItem = ({
  quesNumber,
  question,
  total,
  theme,
}: QuestionItemProps) => {
  return (
    <div className="flex flex-col lg:h-[80%] flex-1">
      <p className="text-sm">
        Question {quesNumber} of {total}
      </p>

      <p className="text-lg md:text-4xl font-bold w-full">{question}</p>

      {quesNumber && total && (
        <div className="lg:my-0 lg:mt-auto lg:w-[60%] md:my-10 my-5">
          <Progress
            value={quesNumber * total}
            className={`${
              theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
            }  h-[5px]`}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
