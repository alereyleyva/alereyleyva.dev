import React from "react";
import Image from "next/image";

export default function SocialLogo({ src, href, alt }) {
  return (
    <>
      <a href={href} className="ml-4">
        <Image src={src} width="50" height="50" alt={`${alt} logo`} />
      </a>

      <style jsx>{``}</style>
    </>
  );
}
