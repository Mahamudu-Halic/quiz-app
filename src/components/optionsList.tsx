import { Fragment, useContext } from "react";
import OptionsItem from "./optionsItem";
import { Option } from "../../types";
import { QuizContext } from "@/service/quiz.context";

interface OptionsListProps {
  options: Option[] | undefined;
  selectedOption: string;
  handleSelectedOption: (value: string) => void;
  answerStatus: string;
}

const OptionsList = ({
  options,
  selectedOption,
  handleSelectedOption,
  answerStatus,
}: OptionsListProps) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) throw new Error("QuizContext is not defined");

  const { currentQuestion, quizQuestions } = quizContext;
  return (
    <div className="flex flex-col justify-center gap-5 ">
      {options &&
        options.map((option) => (
          <Fragment key={option?.id}>
            <OptionsItem
              option={option}
              correctAnswer={
                quizQuestions?.questions[currentQuestion]?.correctAnswer
              }
              selectedOption={selectedOption}
              handleSelectedOption={handleSelectedOption}
              answerStatus={answerStatus}
            />
          </Fragment>
        ))}
    </div>
  );
};

export default OptionsList;
