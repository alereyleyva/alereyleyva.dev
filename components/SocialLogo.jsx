import React from 'react';
import Image from 'next/image';

export default function SocialLogo({ src, href, alt, children }) {
  return (
    <>
      <a
        href={href}
        className="ml-4 relative w-12 h-12 sm:w-10 sm:h-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        {src ? <Image src={src} layout="fill" alt={`${alt} logo`} /> : children}
      </a>
    </>
  );
}
