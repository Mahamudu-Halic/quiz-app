"use client";
import PageWrapper from "@/components/pageWrapper";
import TopicList from "@/components/topicList";

import WelcomeMessageComponent from "@/components/welcome";
import { QuizContext } from "@/service/quiz.context";
import { useContext, useEffect } from "react";

interface HomeProps {
  params: {
    slug: string;
  };
}

export default function Home({ params }: HomeProps) {
  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { topic, handleLocation } = quizContext;

  useEffect(() => {
    handleLocation(params.slug);
  }, []);
  return (
    <PageWrapper>
      <WelcomeMessageComponent />
      <TopicList />
    </PageWrapper>
  );
}
