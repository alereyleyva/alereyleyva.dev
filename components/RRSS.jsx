import React from 'react';
import GitHubSVG from '../SVG/GitHubSVG';
import SocialLogo from './SocialLogo';

export default function RRSS() {
  return (
    <div className="flex">
      <SocialLogo alt="GitHub" href="https://github.com/AleReyLeyva">
        <GitHubSVG />
      </SocialLogo>

      <SocialLogo
        src="/linkedin.svg"
        alt="Linkedin"
        href="https://www.linkedin.com/in/alejandro-rey-leyva-691a43194/"
      />
    </div>
  );
}
