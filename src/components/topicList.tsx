"use client";
import React, { useContext, useState } from "react";
import { Topics } from "../../constants";
import Link from "next/link";
import TopicItem from "./topicItem";
import { ThemeContext } from "@/service/theme.context";

const TopicList = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;
  return (
    <div className="flex flex-col justify-center gap-5 flex-1 w-full">
      {Topics.map((topic) => (
        <Link
          href={topic?.topic.toLowerCase()}
          key={topic?.id}
          className={`${
            theme === "light"
              ? "bg-[#ffffff] hover:border-[#A729F5] border-[#ffffff]"
              : "bg-[#475d7c] hover:border-[#ffffff] border-[#475d7c]"
          } flex items-center gap-5 p-4 w-full rounded-lg border`}
        >
          <TopicItem topic={topic} />
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
