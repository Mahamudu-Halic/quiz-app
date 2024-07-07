import React from "react";
import { Progress } from "./ui/progress";

interface QuestionItemProps {
  quesNumber: number;
  content: string;
  total: number;
}

const QuestionItem = ({ quesNumber, content, total }: QuestionItemProps) => {
  return (
    <div className="flex flex-col lg:h-[80%] flex-1">
      <p className="text-sm">
        Question {quesNumber} of {total}
      </p>

      <p className="text-2xl md:text-4xl font-bold w-full">{content}</p>

      <div className="lg:my-0 lg:mt-auto lg:w-[60%] md:my-10 my-5">
        <Progress
          value={quesNumber * total}
          className="bg-[#ffffff]  h-[5px]"
        />
      </div>
    </div>
  );
};

export default QuestionItem;
