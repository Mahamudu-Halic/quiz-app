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
        className={`w-[30px] h-[30px] bg-[${topic?.bg}] rounded flex justify-center items-center`}
      >
        <Image src={topic?.icon} width={20} height={20} alt={topic?.topic} />
      </div>
      <p className="font-bold">{topic?.topic}</p>
    </>
  );
};

export default TopicItem;
