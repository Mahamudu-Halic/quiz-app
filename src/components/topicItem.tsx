import Image from "next/image";
import React from "react";

interface TopicItemProp {
  topic: {
    topic: string;
    icon: string;
    bg: string;
  };
}

const TopicItem = ({ topic }: TopicItemProp) => {
  return (
    <>
      <div
        className={`w-[30px] h-[30px] ${
          topic?.topic === "HTML"
            ? "bg-[#FFF1E9]"
            : topic?.topic === "CSS"
            ? "bg-[#E0FDEF]"
            : topic?.topic === "Javascript"
            ? "bg-[#EBF0FF]"
            : "bg-[#F4E5FD]"
        } rounded flex justify-center items-center`}
      >
        <Image src={topic?.icon} width={20} height={20} alt={topic?.topic} />
      </div>
      <p className="font-bold">{topic?.topic}</p>
    </>
  );
};

export default TopicItem;
