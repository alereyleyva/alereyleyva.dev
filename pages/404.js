import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  const styles = `
        absolute top-0 left-0 
        h-screen w-full
        bg-gray-800  text-gray-100
        flex flex-col justify-center items-center
    `;

  return (
    <>
      <div className={styles}>
        <h1>404 Not Found ⛔</h1>
        <Link href="/">
          <a className="text-3xl border-2 p-4 rounded-md hover:bg-gray-100 hover:text-black">
            Back to home 🏠
          </a>
        </Link>
      </div>
      <style jsx>{`
        a {
          transition: all 0.4s ease;
        }
      `}</style>
    </>
  );
}
