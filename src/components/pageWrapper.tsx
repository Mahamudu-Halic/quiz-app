"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import PageIconComponent from "./pageIconComponent";
import { Topic } from "../../types";
import { Topics } from "../../constants";
import { ThemeContext } from "@/service/theme.context";
import { Button } from "./ui/button";
import ThemeToggle from "./themeToggle";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [location, setLocation] = useState<string>("");

  const getTopic = () => {
    const data = Topics.find(
      (item) => item.topic.toLowerCase() === location.toLowerCase()
    );
    setTopic(data || null);
  };

  useEffect(() => {
    setLocation(window.location.pathname.substring(1));
  }, []);

  useEffect(() => {
    location && getTopic();
  }, [location]);

  return (
    <div className="flex flex-col lg:justify-center items-center w-full h-[100vh] mx-auto px-10 md:gap-10 gap-5 overflow-y-auto pt-10 lg:pt-0">
      <div className="flex items-center lg:w-[80%] w-full justify-between">
        {topic && <PageIconComponent topic={topic} />}
        <ThemeToggle />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:w-[80%] w-full lg:justify-between ">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
