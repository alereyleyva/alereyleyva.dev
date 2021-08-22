import React from 'react';

export default function Button({ children, onClick, href }) {
  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="btn">
          {children}
        </a>
      ) : (
        <button onClick={onClick} type="button" className="btn">
          {children}
        </button>
      )}
    </>
  );
}
