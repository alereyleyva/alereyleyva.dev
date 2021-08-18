import React from 'react';
import Image from 'next/image';
import useThemeStatus from '../theme/useThemeStatus';

export default function ToggleTheme() {
  const { dark, toggleTheme } = useThemeStatus();

  return (
    <>
      <button
        className="relative w-12 h-12 sm:w-10 sm:h-10"
        onClick={toggleTheme}
        type="button"
      >
        {dark ? (
          <Image src="/moon.svg" layout="fill" alt="dark mode" />
        ) : (
          <Image src="/sun.svg" layout="fill" alt="light mode" />
        )}
      </button>
    </>
  );
}
