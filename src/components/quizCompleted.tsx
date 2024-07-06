"use client";
import Image from "next/image";
import React, { useContext } from "react";
import PageIconComponent from "./pageIconComponent";
import { Topic } from "../../types";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeContext } from "@/service/theme.context";

interface QuizCompletedProps {
  score: number;
  total: number;
  topic: Topic;
}

const QuizCompleted = ({ score, total, topic }: QuizCompletedProps) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;
  return (
    <>
      <div>
        <p className="text-4xl">Quiz completed</p>
        <p className="font-bold text-5xl">You Scored...</p>
      </div>
      <div>
        <div
          className={`flex flex-col justify-center gap-5 ${
            theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
          } items-center rounded-xl p-5 min-h-[170px] min-w-[250px]`}
        >
          <PageIconComponent topic={topic} />
          <p
            className={`${
              theme !== "light" && "text-white"
            } text-5xl font-bold`}
          >
            {score}
          </p>
          <p>out of {total}</p>
        </div>
        <Link
          href={"/"}
          className="bg-[#A729F5] hover:bg-[#D394FA] text-white w-full"
        >
          <Button className="bg-[#A729F5] hover:bg-[#D394FA] text-white w-full mt-5">
            Play Again
          </Button>
        </Link>
      </div>
    </>
  );
};

export default QuizCompleted;
