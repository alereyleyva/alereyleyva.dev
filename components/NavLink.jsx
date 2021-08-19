import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children, dark, onClick }) {
  const router = useRouter();
  const active = router.asPath === href;
  const text = dark ? 'dark:text-black' : 'dark:text-gray-50';
  const underline = active ? 'underline' : '';

  return (
    <Link href={href}>
      <a
        className={`px-5 py-3 font-regular lg:my-5 text-center text-black text-3xl lg:text-6xl ${text} ${underline} lg:no-underline`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
}
