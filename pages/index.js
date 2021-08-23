import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import socialLinks from '../data/socialLinks';
import EmailSVG from '../SVG/EmailSVG';
import DownloadSVG from '../SVG/DownloadSVG';

export default function Home() {
  return (
    <>
      <div className="flex lg:flex-col items-center justify-evenly lg:justify-between h-full mt-10 lg:mt-0">
        <div className="w-2/5 lg:w-full lg:mb-6">
          <h1 className="sm:text-5xl">Hi, I am Alejandro Rey Leyva</h1>
          <h2>Junior Full-Stack Web Developer</h2>
        </div>
        <div className="relative w-96 h-96 sm:w-72 sm:h-72 md:h-72 md:w-72">
          <Image
            src="/alereyleyva.jpg"
            alt="alereyleyva photo"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="w-full flex sm:flex-col justify-center items-center mt-20 lg:mt-12">
        <Button href={socialLinks.CV}>
          <DownloadSVG />
          CV
        </Button>
        <Button href={socialLinks.email}>
          <EmailSVG />
          Email
        </Button>
      </div>
      <p className="absolute top-1 left-0 text-center w-full font-medium">
        Work in progress...
      </p>
    </>
  );
}
