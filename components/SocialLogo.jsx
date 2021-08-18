import React from 'react';
import Image from 'next/image';

export default function SocialLogo({ src, href, alt }) {
  return (
    <>
      <a href={href} className="ml-4 relative w-12 h-12 sm:w-10 sm:h-10">
        <Image src={src} layout="fill" alt={`${alt} logo`} />
      </a>
    </>
  );
}
