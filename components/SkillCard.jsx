import React from 'react';
import Image from 'next/image';

export default function SkillCard({ skill, src, Component }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="mb-3">{skill}</h3>
      <div className="relative w-full h-20">
        {src ? (
          <Image key={src} src={src} alt={`${skill} logo`} layout="fill" />
        ) : (
          <Component />
        )}
      </div>
    </div>
  );
}
