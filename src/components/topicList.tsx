"use client";
import React, { useContext, useState } from "react";
import { Topics } from "../../constants";
import Link from "next/link";
import TopicItem from "./topicItem";
import { ThemeContext } from "@/service/theme.context";

const TopicList = () => {
  const { theme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState("light");
  return (
    <div className="flex flex-col justify-center gap-5">
      {Topics.map((topic) => (
        <Link
          href={topic?.topic.toLowerCase()}
          key={topic?.id}
          className={`${
            theme === "light" ? "bg-[#ffffff]" : "bg-[#475d7c]"
          } flex items-center gap-5 p-4 w-[300px] rounded-lg`}
        >
          <TopicItem topic={topic} />
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
