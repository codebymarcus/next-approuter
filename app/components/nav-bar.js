"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLink = (props) => {
  const {children, href, isHomePage, ...rest} = props;
  const pathname = usePathname();

  const isActive = isHomePage ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? 'underline' : ''} hover:underline decoration-2 underline-offset-8 transition-all`}
      {...rest}>
      {children}
    </Link>
  );
};

const Navbar = props => {
  return (
    <nav className="absolute inset-x-0 top-0 flex items-center justify-center space-x-10 p-4">
      <NavLink isHomePage href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact-us">Contact Us</NavLink>
    </nav>
  )
}

export default Navbar;