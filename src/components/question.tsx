"use client";
import { useContext, useState } from "react";
import OptionsList from "./optionsList";
import { Button } from "./ui/button";
import QuestionItem from "./questionItem";
import Image from "next/image";
import { ThemeContext } from "@/service/theme.context";
import { QuizContext } from "@/service/quiz.context";

const QuestionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const {
    currentQuestion,
    handleCompletion,
    handleNextQuestion,
    handleScore,
    quizQuestions,
  } = quizContext;

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;

  const handleSelectedOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    setError("");
    if (!selectedOption) return setError("Please select an answer");

    if (selectedOption === quizQuestions?.questions[currentQuestion]?.answer) {
      setAnswerStatus("correct");
      handleScore();
    } else {
      setAnswerStatus("wrong");
    }
  };

  const handleNext = () => {
    setError("");
    setAnswerStatus("");
    setSelectedOption("");
    handleNextQuestion();
    currentQuestion + 1 === quizQuestions?.questions.length &&
      handleCompletion();
  };
  return (
    <>
      <QuestionItem
        question={quizQuestions?.questions[currentQuestion]?.question}
        quesNumber={currentQuestion + 1}
        total={quizQuestions?.questions.length}
        theme={theme}
      />
      <div className="flex-1 w-full mb-5">
        <OptionsList
          options={quizQuestions?.questions[currentQuestion]?.options}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
          answerStatus={answerStatus}
        />
        {answerStatus !== "" ? (
          <Button
            onClick={handleNext}
            className="w-full hover:bg-[#D394FA] bg-[#A729F5] mt-5"
          >
            {currentQuestion + 1 === quizQuestions?.questions.length
              ? "Complete Quiz"
              : "Next Question"}
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="w-full hover:bg-[#D394FA] bg-[#A729F5] mt-5"
          >
            Submit Answer
          </Button>
        )}

        {error && (
          <div
            className={`flex w-full justify-center gap-3 mt-3 ${
              theme === "light" ? "text-[#EE5454]" : "text-[#F4F6FA]"
            }`}
          >
            <Image
              src={"./assets/icon-error.svg"}
              alt="error"
              width={20}
              height={20}
            />
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionComponent;
