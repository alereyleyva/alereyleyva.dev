import React from 'react';
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
        <p className="lg:text-4xl text-5xl">{dark ? '🌙' : '🌞'}</p>
      </button>
    </>
  );
}
