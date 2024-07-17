import { ThemeContext } from "@/service/theme.context";
import Image from "next/image";
import React, { useContext } from "react";

interface OptionsItemProps {
  option: string;
  selectedOption: string;
  handleSelectedOption: (value: string) => void;
  correctAnswer: string | undefined;
  answerStatus: string;
  optionAlph: string;
}

const OptionsItem = ({
  option,
  selectedOption,
  handleSelectedOption,
  answerStatus,
  correctAnswer,
  optionAlph,
}: OptionsItemProps) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;
  return (
    <button
      className={`${
        theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
      } flex items-center gap-5 p-4 w-full rounded-lg group border-[2px]  ${
        selectedOption === option
          ? answerStatus === "correct"
            ? "border-[#26D782]"
            : answerStatus === "wrong"
            ? "border-[#EE5454]"
            : "border-[#A729F5]"
          : "border-transparent"
      }`}
      onClick={() => handleSelectedOption(option)}
      disabled={answerStatus !== ""}
    >
      <div
        className={`min-w-[30px] min-h-[30px] rounded-md ${
          selectedOption === option
            ? answerStatus === "correct"
              ? "bg-[#26D782]"
              : answerStatus === "wrong"
              ? "bg-[#EE5454]"
              : "bg-[#A729F5]"
            : theme === "light"
            ? "bg-[#F4E5FD]"
            : "bg-[#ffffff]"
        } 
        rounded flex justify-center items-center text-[#626C7F]`}
      >
        <p
          className={` font-bold ${
            selectedOption === option
              ? "text-white"
              : "group-hover:text-[#A729F5]"
          }`}
        >
          {/* {option?.id.toUpperCase()} */}
          {optionAlph}
        </p>
      </div>
      <p className="font-bold overflow-x-auto">{option}</p>
      <div className="ml-auto min-w-[20px] min-h-[20px]">
        {answerStatus !== "" &&
          selectedOption === option &&
          selectedOption !== correctAnswer && (
            <Image
              src={"./assets/icon-error.svg"}
              alt={"error"}
              width={20}
              height={20}
            />
          )}
        {answerStatus !== "" && option === correctAnswer && (
          <Image
            src={"./assets/icon-correct.svg"}
            alt={"correct"}
            width={20}
            height={20}
          />
        )}
      </div>
    </button>
  );
};

export default OptionsItem;
