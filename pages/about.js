import React from 'react';
import about from '../data/about';

export default function About() {
  const paragraphStyle = `
    text-3xl md:text-2xl sm:text-xl my-5 text-center
  `;

  return (
    <div>
      <h1>About Me</h1>
      <ul>
        {about.map((paragraph) => (
          <li className={paragraphStyle} key={Math.random()}>
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
}
