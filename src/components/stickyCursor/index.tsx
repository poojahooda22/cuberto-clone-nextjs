
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import {motion, useMotionValue, useSpring} from 'framer-motion';

export default function Index({stickyElement}: any) {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = 10;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize / 2) 
    mouse.y.set(clientY - cursorSize / 2)
  }

  const manageMouseOver = () => {
    setIsHovered(true);
  }

  const manageMouseLeave = () => {
    setIsHovered(false);
  }


  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove)
    stickyElement.current.addEventListener("mouseover", manageMouseOver)
    stickyElement.current.addEventListener("mouseLeave", manageMouseLeave)
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
      stickyElement.current.removeEventListener("mouseover", manageMouseOver)
      stickyElement.current.removeEventListener("mouseLeave", manageMouseLeave)
    }
  })

  return (
    <motion.div 
    className={styles.cursor}
    style={{left: smoothMouse.x, top: smoothMouse.y}}
    >
    
    </motion.div>
  )
}

