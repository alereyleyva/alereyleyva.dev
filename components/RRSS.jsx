import React, { useEffect, useState } from 'react';
import SocialLogo from './SocialLogo';
import useThemeStatus from '../theme/useThemeStatus';

export default function RRSS() {
  const { dark } = useThemeStatus();
  const [gitHubSRC, setGitHubSRC] = useState('githubLight.svg');

  useEffect(() => {
    setGitHubSRC(dark ? 'githubDark.svg' : 'githubLight.svg');
  }, [dark]);

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
