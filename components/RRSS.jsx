import React, { useEffect, useState } from "react";
import SocialLogo from "./SocialLogo";
import useThemeStatus from "../theme/useThemeStatus";

export default function RRSS() {
  const { theme, setTheme } = useThemeStatus();
  const [gitHubSRC, setGitHubSRC] = useState("githubLight.svg");

  useEffect(() => {
    setGitHubSRC(theme === "dark" ? "githubDark.svg" : "githubLight.svg");
  }, [theme]);

  return (
    <div className="flex">
      <SocialLogo
        src={`/logos/${gitHubSRC}`}
        alt="GitHub"
        href="https://github.com/AleReyLeyva"
      />
      <SocialLogo
        src="/logos/linkedin.svg"
        alt="Linkedin"
        href="https://www.linkedin.com/in/alejandro-rey-leyva-691a43194/"
      />
    </div>
  );
}
