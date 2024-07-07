"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { QuestionsType, QuizCategory, Topic } from "../../types";
import { Questions, Topics } from "../../constants";

interface QuizContextType {
  getTopic: () => void;
  getQuestions: () => void;
  handleCompletion: () => void;
  handleScore: () => void;
  handleNextQuestion: () => void;
  handleLocation: (value: string) => void;

  currentQuestion: number;
  completed: boolean;
  score: number;
  location: string;
  quizQuestions: QuizCategory | null;
  topic: Topic | null;
}

interface QuizContextProviderProps {
  children: ReactNode;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
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
    if (location) {
      getQuestions();
      getTopic();
    }
  }, [location]);

  const handleLocation = (value: string) => {
    setLocation(value);
  };

  const handleCompletion = () => {
    setCompleted(true);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (quizQuestions && currentQuestion < quizQuestions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const value = {
    getTopic,
    getQuestions,
    handleCompletion,
    handleScore,
    handleNextQuestion,
    handleLocation,

    currentQuestion,
    completed,
    score,
    location,
    quizQuestions,
    topic,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
