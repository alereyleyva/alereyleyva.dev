import React from 'react';
import GitHubSVG from '../SVG/GitHubSVG';
import SocialLogo from './SocialLogo';
import socialLinks from '../data/socialLinks';

export default function RRSS() {
  return (
    <div className="flex">
      <SocialLogo alt="GitHub" href={socialLinks.github}>
        <GitHubSVG />
      </SocialLogo>

      <SocialLogo
        src="/linkedin.svg"
        alt="Linkedin"
        href={socialLinks.linkedin}
      />
    </div>
  );
}
