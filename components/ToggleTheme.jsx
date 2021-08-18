import React from "react";
import useThemeStatus from "../theme/useThemeStatus.js";
import Image from "next/image";

export default function ToggleTheme() {
  const { theme, setTheme } = useThemeStatus();

  return (
    <>
      <button
        className="relative w-12 h-12 sm:w-10 sm:h-10"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Image src={"/sun.svg"} layout="fill" alt="sun svg" />
        ) : (
          <Image src={"/moon.svg"} layout="fill" alt="moon svg" />
        )}
      </button>
    </>
  );
}
