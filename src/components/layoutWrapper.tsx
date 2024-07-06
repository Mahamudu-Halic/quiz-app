"use client";
import { ThemeContext } from "@/service/theme.context";
import React, { ReactNode, useContext, useState } from "react";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  //   const { theme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  //   const [theme, setTheme] = useState("light");

  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   };
  return (
    <div
      className={` h-[100vh] ${
        theme == "light" ? "bg-[#F4F6FA]" : "bg-[#3B4D66]"
      } w-full px-20`}
    >
      <div
        className={`z-1 absolute left-[-350px] top-[-250px] ${
          theme == "light" ? "bg-[#626c7f2c]" : "bg-[#313E51]"
        }  w-[700px] h-[700px] rounded-full flex items-center justify-center`}
      >
        <div
          className={`${
            theme == "light" ? "bg-[#F4F6FA]" : "bg-[#3B4D66]"
          } w-[450px] h-[450px] rounded-full`}
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
        className={`absolute right-[-350px] bottom-[-250px] ${
          theme == "light" ? "bg-[#626c7f2c]" : "bg-[#313E51]"
        } w-[700px] h-[700px] rounded-full flex items-center justify-center`}
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
