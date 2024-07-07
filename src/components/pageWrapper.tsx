"use client";
import { ReactNode } from "react";
import PageIconComponent from "./pageIconComponent";
import ThemeToggle from "./themeToggle";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="flex flex-col lg:justify-center items-center w-full h-[100vh] mx-auto px-10 md:gap-10 gap-5 overflow-y-auto pt-10 lg:pt-0">
      <div className="flex items-center lg:w-[80%] w-full justify-between">
        <PageIconComponent />
        <ThemeToggle />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:w-[80%] w-full lg:justify-between ">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
