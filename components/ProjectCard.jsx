import React from 'react';
import Button from './Button';
import CodeSVG from '../SVG/CodeSVG';

export default function ProjectCard({ name, web, code, techs }) {
  const styles = `
    h-96 lg:h-80 sm:w-full border-2 border-black dark:border-gray-100
    flex flex-col items-center justify-around
    p-6 rounded-lg 
    text-gray-800 dark:text-white font-medium
  `;

  return (
    <div className={styles}>
      <h2 className="text-3xl lg:text-2xl font-semibold">{name}</h2>
      <h3 className="font-mono font-normal sm:text-lg text-center mb-2">
        {techs}
      </h3>
      <Button href={code}>
        <CodeSVG />
        Code
      </Button>
      <Button href={web}>🔗 Web</Button>
    </div>
  );
}
