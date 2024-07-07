"use client";
import { useContext } from "react";
import PageIconComponent from "./pageIconComponent";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeContext } from "@/service/theme.context";
import { QuizContext } from "@/service/quiz.context";

const QuizCompleted = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;

  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { score, handleLocation, quizQuestions } = quizContext;

  return (
    <>
      <div className="mb-10 lg:mb-0">
        <p className="md:text-4xl text-2xl">Quiz completed</p>
        <p className="font-bold md:text-5xl text-3xl">You Scored...</p>
      </div>
      <div>
        <div
          className={`flex flex-col justify-center gap-5 ${
            theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
          } items-center rounded-xl p-5 min-h-[170px] min-w-[250px]`}
        >
          <PageIconComponent />
          <p
            className={`${
              theme !== "light" && "text-white"
            } text-5xl font-bold`}
          >
            {score}
          </p>
          <p>out of {quizQuestions?.questions.length}</p>
        </div>
        <Link
          href={"/"}
          className="bg-[#A729F5] hover:bg-[#D394FA] text-white w-full"
        >
          <Button
            onClick={() => handleLocation("/")}
            className="bg-[#A729F5] hover:bg-[#D394FA] text-white w-full mt-5"
          >
            Play Again
          </Button>
        </Link>
      </div>
    </>
  );
};

export default QuizCompleted;
