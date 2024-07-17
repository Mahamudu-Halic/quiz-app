"use client";
import PageWrapper from "@/components/pageWrapper";
import QuestionComponent from "@/components/question";
import { useContext, useEffect } from "react";
import QuizCompleted from "@/components/quizCompleted";
import { QuizContext } from "@/service/quiz.context";

interface QuizScreenProps {
  params: {
    slug: string;
  };
}

const QuizScreen = ({ params }: QuizScreenProps) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { completed, handleLocation, handleReset, quizQuestions, topic } =
    quizContext;

  useEffect(() => {
    handleLocation(params.slug);
  }, []);

  return (
    quizQuestions && (
      <PageWrapper>
        {!completed ? <QuestionComponent /> : topic && <QuizCompleted />}
      </PageWrapper>
    )
  );
};

export default QuizScreen;
