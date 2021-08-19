import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex lg:flex-col items-center justify-evenly lg:justify-between">
        <div className="w-2/5 lg:w-full lg:mb-12">
          <h1 className="sm:text-5xl">Alejandro Rey Leyva</h1>
          <h2>Junior Full-Stack Developer</h2>
        </div>
        <div className="relative w-96 h-96 sm:w-72 sm:h-72 md:h-80 md:w-80">
          <Image
            src="/alereyleyva.jpg"
            alt="alereyleyva photo"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}
