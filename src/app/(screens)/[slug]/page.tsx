"use client";
import PageWrapper from "@/components/pageWrapper";
import QuestionComponent from "@/components/question";
import React, { useEffect, useState } from "react";
import { Questions, Topics } from "../../../../constants";
import QuizCompleted from "@/components/quizCompleted";
import { QuestionsType, QuizCategory, Topic } from "../../../../types";
import { useSearchParams } from "next/navigation";

interface QuizScreenProps {
  params: {
    slug: string;
  };
}

const QuizScreen = ({ params }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const [location, setLocation] = useState<string>("");
  const [quizQuestions, setQuizQuestions] = useState<QuizCategory | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);

  const getTopic = () => {
    const data = Topics.find(
      (item) => item.topic.toLowerCase() === location.toLowerCase()
    );
    setTopic(data || null);
  };

  const getQuestions = () => {
    setQuizQuestions(
      (Questions as QuestionsType)[location as keyof QuestionsType]
    );
  };

  useEffect(() => {
    setLocation(params.slug);
  }, []);

  useEffect(() => {
    location && getQuestions();
    location && getTopic();
  }, [location]);

  const handleCompletion = () => {
    setCompleted(true);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleNextQuestion = () => {
    quizQuestions &&
      currentQuestion < quizQuestions?.questions.length - 1 &&
      setCurrentQuestion(currentQuestion + 1);
  };

  return (
    quizQuestions && (
      <PageWrapper>
        {!completed ? (
          <QuestionComponent
            question={quizQuestions?.questions[currentQuestion]}
            total={quizQuestions?.questions.length}
            nextQuestion={handleNextQuestion}
            handleScore={handleScore}
            handleCompletion={handleCompletion}
          />
        ) : (
          topic && (
            <QuizCompleted
              total={quizQuestions?.questions.length}
              score={score}
              topic={topic}
            />
          )
        )}
      </PageWrapper>
    )
  );
};

export default QuizScreen;
