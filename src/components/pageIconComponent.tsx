import Image from "next/image";
import { useContext } from "react";
import { QuizContext } from "@/service/quiz.context";

const PageIconComponent = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { topic } = quizContext;

  return (
    window.location.pathname !== "/" &&
    topic && (
      <div className="flex gap-3 items-center">
        <div
          className={`w-[30px] h-[30px] ${
            topic?.topic === "HTML"
              ? "bg-[#FFF1E9]"
              : topic?.topic === "CSS"
              ? "bg-[#E0FDEF]"
              : topic?.topic === "Javascript"
              ? "bg-[#EBF0FF]"
              : "bg-[#F4E5FD]"
          } rounded flex justify-center items-center`}
        >
          <Image src={topic?.icon} width={20} height={20} alt={topic?.topic} />
        </div>

        <p className="font-bold">{topic?.topic}</p>
      </div>
    )
  );
};

export default PageIconComponent;
