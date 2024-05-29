import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';

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
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <div className='w-[20vw] h-full'>
      Hello
    </div>
  )
}

export default Nav
