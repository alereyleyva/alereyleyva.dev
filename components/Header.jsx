import React from "react";
import RRSS from "./RRSS";
import ToggleTheme from "./ToggleTheme";
import NavLink from "./NavLink";
import BurguerMenu from "./BurguerMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-36">
      <div className="flex items-center">
        <BurguerMenu />
        <ToggleTheme />
      </div>
      <div className="flex lg:hidden">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/skills">Skills</NavLink>
        <NavLink href="/about">About Me</NavLink>
      </div>
      <RRSS />
    </header>
  );
}
