import React, { useState } from "react";

export default function BurguerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="w-8 mr-5 relative hidden lg:flex justify-center items-end cursor-pointer"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className={showMenu ? "cross" : "burguer"}></div>
    </div>
  );
}
