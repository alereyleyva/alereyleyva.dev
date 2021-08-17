import React from "react";
import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        a {
          padding: 1rem;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
