import React from 'react';

export default function Cross({ onClick }) {
  return (
    <>
      <div
        className="w-12 h-12 flex justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="cross" />
      </div>
    </>
  );
}
