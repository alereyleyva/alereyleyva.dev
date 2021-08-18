import React from "react";
import useThemeStatus from "../theme/useThemeStatus.js";
import Image from "next/image";

export default function ToggleTheme() {
  const { theme, setTheme } = useThemeStatus();
  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Image src={"/sun.svg"} width="50" height="50" alt="sun svg" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Image src={"/moon.svg"} width="50" height="50" alt="moon svg" />
        </button>
      )}
    </>
  );
}
