import { ThemeContext } from "@/service/theme.context";
import Image from "next/image";
import React, { useContext } from "react";

interface OptionsItemProps {
  option: {
    id: string;
    content: string;
  };
  selectedOption: string;
  handleSelectedOption: (value: string) => void;
  correctAnswer: string;
  answer: string;
}

const OptionsItem = ({
  option,
  selectedOption,
  handleSelectedOption,
  answer,
  correctAnswer,
}: OptionsItemProps) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <button
      className={`${
        theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
      } flex items-center gap-5 p-4 w-full rounded-lg group ${
        selectedOption === option?.id
          ? answer === "correct"
            ? "border-[2px] border-[#26D782]"
            : answer === "wrong"
            ? "border-[2px] border-[#EE5454]"
            : "border-[2px] border-[#A729F5]"
          : ""
      }`}
      onClick={() => handleSelectedOption(option?.id)}
      disabled={answer !== ""}
    >
      <div
        className={`w-[30px] h-[30px] rounded-md ${
          selectedOption === option?.id
            ? answer === "correct"
              ? "bg-[#26D782]"
              : answer === "wrong"
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
            selectedOption === option?.id
              ? "text-white"
              : "group-hover:text-[#A729F5]"
          }`}
        >
          {option?.id.toUpperCase()}
        </p>
      </div>
      <p className="font-bold">{option?.content}</p>
      {answer !== "" && (
        <div className="ml-auto">
          {selectedOption === option?.id &&
            selectedOption !== correctAnswer && (
              <Image
                src={"./icon-error.svg"}
                alt={"error"}
                width={20}
                height={20}
              />
            )}
          {option?.id === correctAnswer && (
            <Image
              src={"./icon-correct.svg"}
              alt={"error"}
              width={20}
              height={20}
            />
          )}
        </div>
      )}
    </button>
  );
};

export default OptionsItem;