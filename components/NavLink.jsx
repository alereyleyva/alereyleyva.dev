import React from "react";
import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="px-5 py-3 text-2xl">{children}</a>
    </Link>
  );
}
