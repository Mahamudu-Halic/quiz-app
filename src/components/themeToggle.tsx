import React, { useContext } from "react";
import { ThemeContext } from "@/service/theme.context";
import { FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <div className="flex items-center ml-auto">
      {theme === "light" ? (
        <Image
          src={"./icon-sun-dark.svg"}
          alt="moon light"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src={"./icon-sun-light.svg"}
          alt="moon light"
          width={20}
          height={20}
        />
      )}

      <label className="relative mx-3 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className={`w-10 h-5 rounded-full transition-colors bg-[#A729F5]`}>
          <div
            className={`dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${
              theme === "dark" && "transform translate-x-5"
            }`}
          ></div>
        </div>
      </label>
      {theme === "light" ? (
        <Image
          src={"./icon-moon-dark.svg"}
          alt="moon light"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src={"./icon-moon-light.svg"}
          alt="moon light"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
