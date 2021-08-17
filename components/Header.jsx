import React from "react";
import styles from "../styles/Header.module.css";
import NavLink from "./NavLink";
import SocialLogo from "./SocialLogo";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/skills">Skills</NavLink>
        <NavLink href="/about">About Me</NavLink>
      </nav>
      <div className={styles.social}>
        <SocialLogo
          src="/logos/github.svg"
          alt="GitHub"
          href="https://github.com/AleReyLeyva"
        />
        <SocialLogo
          src="/logos/linkedin.svg"
          alt="Linkedin"
          href="https://www.linkedin.com/in/alejandro-rey-leyva-691a43194/"
        />
      </div>
    </header>
  );
}
