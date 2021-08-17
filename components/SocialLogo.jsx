import React from "react";
import Image from "next/image";

export default function SocialLogo({ src, href, alt }) {
  return (
    <>
      <a href={href}>
        <Image src={src} width="40" height="40" alt={`${alt} logo`} />
      </a>

      <style jsx>{`
        a {
          display: flex;
          align-items: center;
          margin: 0 0.5rem;
        }
      `}</style>
    </>
  );
}
