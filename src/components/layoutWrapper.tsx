"use client";
import { ThemeContext } from "@/service/theme.context";
import React, { ReactNode, useContext, useState } from "react";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  //   const { theme } = useContext(ThemeContext);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not defined");
  }

  const { theme } = themeContext;

  return (
    <div
      className={` h-[100vh] overflow-hidden relative ${
        theme == "light" ? "bg-[#F4F6FA]" : "bg-[#3B4D66]"
      } w-full`}
    >
      <div
        className={`z-1 absolute lg:left-[-350px] lg:top-[-250px] left-[-550px] top-[-150px] md:left-[-350px] md:top-[-200px] ${
          theme == "light" ? "bg-[#626c7f2c]" : "bg-[#313E51]"
        }  lg:w-[700px] w-[900px] h-[900px] lg:h-[700px] rounded-full flex items-center justify-center`}
      >
        <div
          className={`${
            theme == "light" ? "bg-[#F4F6FA]" : "bg-[#3B4D66]"
          } lg:w-[450px] lg:h-[450px] w-[550px] h-[650px] rounded-full`}
        ></div>
      </div>
      <div
        className={`z-10 relative ${
          theme === "light" ? "text-[#313E51]" : "text-[#F4F6FA]"
        }`}
      >
        {children}
      </div>
      <div
        className={`hidden absolute right-[-350px] bottom-[-250px] ${
          theme == "light" ? "bg-[#626c7f2c]" : "bg-[#313E51]"
        } w-[700px] h-[700px] rounded-full lg:flex items-center justify-center`}
      >
        <div
          className={`${
            theme == "light" ? "bg-[#F4F6FA]" : "bg-[#3B4D66]"
          } w-[450px] h-[450px] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
