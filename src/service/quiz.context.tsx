"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { QuizCategory, Topic } from "../../types";
import { Topics } from "../../constants";

interface QuizContextType {
  getTopic: () => void;
  getQuestions: () => void;
  handleCompletion: () => void;
  handleScore: () => void;
  handleNextQuestion: () => void;
  handleLocation: (value: string) => void;
  handleReset: () => void;

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
  const [quizzes, setQuizzes] = useState<QuizCategory[] | null>(null);

  const fetchQuizzes = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data);
      setQuizzes(data.quizzes);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const getTopic = () => {
    const data = Topics.find(
      (item) => item.topic.toLowerCase() === location.toLowerCase()
    );
    setTopic(data || null);
  };

  const getQuestions = () => {
    if (quizzes) {
      const quiz = quizzes.find(
        (item) => item?.title.toLowerCase() === location.toLocaleLowerCase()
      );
      quiz && setQuizQuestions(quiz);
    }
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

  const handleReset = () => {
    setCompleted(false);
    setScore(0);
    setCurrentQuestion(0);
    setTopic(null);
  };

  const value = {
    handleReset,
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
