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
  const [answerStatus, setAnswer] = useState("");

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
    if (!selectedOption) return setError("Please select an answerStatus");

    if (
      selectedOption ===
      quizQuestions?.questions[currentQuestion]?.correctAnswer
    ) {
      setAnswer("correct");
      handleScore();
    } else {
      setAnswer("wrong");
    }
  };

  const handleNext = () => {
    setError("");
    setAnswer("");
    setSelectedOption("");
    handleNextQuestion();
    quizQuestions?.questions[currentQuestion]?.id ===
      quizQuestions?.questions.length && handleCompletion();
  };
  return (
    <>
      <QuestionItem
        content={quizQuestions?.questions[currentQuestion]?.content}
        quesNumber={quizQuestions?.questions[currentQuestion]?.id}
        total={quizQuestions?.questions.length}
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
            {quizQuestions?.questions[currentQuestion]?.id ===
            quizQuestions?.questions.length
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
              src={"./icon-error.svg"}
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
