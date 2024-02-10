
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import {motion, useMotionValue, useSpring} from 'framer-motion';

export default function Index({stickyElement}: any) {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 60 : 10;
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

  useEffect( () => {
    const currentStickyElement = stickyElement.current;
    const manageMouseLeave = () => {
      setIsHovered(false);
    }

    window.addEventListener("mousemove", manageMouseMove)
    currentStickyElement.addEventListener("mouseover", manageMouseOver)
    currentStickyElement.addEventListener("mouseleave", manageMouseLeave)
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
      currentStickyElement.removeEventListener("mouseover", manageMouseOver)
      currentStickyElement.removeEventListener("mouseleave", manageMouseLeave)
    }
  })

  return (
    <motion.div 
    className={styles.cursor}
    style={{left: smoothMouse.x, top: smoothMouse.y}}
    animate={{width: cursorSize, height: cursorSize}}
    >
    
    </motion.div>
  )
}

