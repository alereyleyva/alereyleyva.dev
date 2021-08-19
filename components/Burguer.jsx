/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';

export default function Burguer() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="w-12 h-12 mr-4 relative hidden lg:flex justify-center items-center cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="burguer" />
      </div>
      {showMenu ? <MobileNavMenu onClose={() => setShowMenu(false)} /> : null}
    </>
  );
}
