/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

export default function BurguerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="w-8 mr-5 relative hidden lg:flex justify-center items-end"
      onClick={() => setShowMenu(!showMenu)}
      type="button"
    >
      <div className={showMenu ? 'cross' : 'burguer'} />
    </div>
  );
}
