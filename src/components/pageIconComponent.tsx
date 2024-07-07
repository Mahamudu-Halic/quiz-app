import Image from "next/image";
import { useContext } from "react";
import { QuizContext } from "@/service/quiz.context";

const PageIconComponent = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { topic } = quizContext;

  return (
    <div className="flex gap-3 items-center">
      {topic && (
        <div
          className={`w-[30px] h-[30px] bg-[${topic?.bg}] rounded flex justify-center items-center`}
        >
          <Image src={topic?.icon} width={20} height={20} alt={topic?.topic} />
        </div>
      )}
      <p className="font-bold">{topic?.topic}</p>
    </div>
  );
};

export default PageIconComponent;
