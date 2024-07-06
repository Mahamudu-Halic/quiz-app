"use client";

import React, { useState } from "react";
import OptionsList from "./optionsList";
import { Button } from "./ui/button";
import QuestionItem from "./questionItem";
import Image from "next/image";
import { Question } from "../../types";

interface QuestionComponentProps {
  question: Question;
  total: number;
  nextQuestion: () => void;
  handleCompletion: () => void;
  handleScore: () => void;
}

const QuestionComponent = ({
  question,
  total,
  nextQuestion,
  handleScore,
  handleCompletion,
}: QuestionComponentProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSelectedOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    setError("");
    if (!selectedOption) return setError("Please select an answer");

    if (selectedOption === question?.correctAnswer) {
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
    nextQuestion();
    question?.id === total && handleCompletion();
  };
  return (
    <>
      <QuestionItem
        content={question?.content}
        quesNumber={question?.id}
        total={total}
      />
      <div>
        <OptionsList
          options={question?.options}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
          correctAnswer={question?.correctAnswer}
          answer={answer}
        />
        {answer !== "" ? (
          <Button
            onClick={handleNext}
            className="w-full hover:bg-[#D394FA] bg-[#A729F5] mt-5"
          >
            {question?.id === total ? "Complete Quiz" : "Next Question"}
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
          <div className="flex w-full justify-center gap-3 text-[#EE5454]">
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
