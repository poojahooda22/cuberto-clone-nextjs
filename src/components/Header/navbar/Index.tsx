import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

function Nav() {
  return (
    <div className='w-[20vw] h-full'>
      Hello
    </div>
  )
}

export default Nav
