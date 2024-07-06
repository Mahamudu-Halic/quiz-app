import Image from "next/image";
import React from "react";
import { Topic } from "../../types";

interface PageIconComponentProps {
  topic: Topic;
}

const PageIconComponent = ({ topic }: PageIconComponentProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div
        // className={`w-[30px] h-[30px] bg-[#EBF0FF] rounded flex justify-center items-center`}
        className={`w-[30px] h-[30px] bg-[${topic?.bg}] rounded flex justify-center items-center`}
      >
        <Image src={topic?.icon} width={20} height={20} alt={topic?.topic} />
      </div>
      <p className="font-bold">{topic?.topic}</p>
    </div>
  );
};

export default PageIconComponent;
