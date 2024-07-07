import React, { Fragment, useState } from "react";
import OptionsItem from "./optionsItem";
import { Option } from "../../types";

interface OptionsListProps {
  options: Option[];
  selectedOption: string;
  handleSelectedOption: (value: string) => void;
  correctAnswer: string;
  answer: string;
}

const OptionsList = ({
  options,
  selectedOption,
  handleSelectedOption,
  answer,
  correctAnswer,
}: OptionsListProps) => {
  return (
    <div className="flex flex-col justify-center gap-5 ">
      {options.map((option) => (
        <Fragment key={option?.id}>
          <OptionsItem
            option={option}
            selectedOption={selectedOption}
            handleSelectedOption={handleSelectedOption}
            correctAnswer={correctAnswer}
            answer={answer}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default OptionsList;
