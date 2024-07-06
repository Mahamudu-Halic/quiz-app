"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import PageIconComponent from "./pageIconComponent";
import { Topic } from "../../types";
import { Topics } from "../../constants";
import { ThemeContext } from "@/service/theme.context";
import { Button } from "./ui/button";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    <div className="flex flex-col justify-center items-center w-full h-[100vh] mx-auto px-10 gap-10">
      <div className="flex items-start w-[70%] justify-between">
        {topic && <PageIconComponent topic={topic} />}
        <Button className="ml-auto" onClick={toggleTheme}>
          toggle
        </Button>
      </div>
      <div className="flex items-start w-[70%] justify-between">{children}</div>
    </div>
  );
};

export default PageWrapper;
