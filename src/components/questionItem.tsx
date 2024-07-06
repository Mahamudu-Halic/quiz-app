import React from "react";
import { Progress } from "./ui/progress";

interface QuestionItemProps {
  quesNumber: number;
  content: string;
  total: number;
}

const QuestionItem = ({ quesNumber, content, total }: QuestionItemProps) => {
  return (
    <div className="flex flex-col h-[80%]">
      <p className="text-[14px]">
        Question {quesNumber} of {total}
      </p>

      <p className="text-[32px] font-bold w-[400px]">{content}</p>

      <div className="mt-auto bg-white w-[60%]">
        <Progress
          value={quesNumber * total}
          className="bg-[#ffffff]   h-[5px]"
        />
      </div>
    </div>
  );
};

export default QuestionItem;
