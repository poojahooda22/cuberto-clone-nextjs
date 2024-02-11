
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

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY} = e;
    const { left, top, width, height } = stickyElement.current.getBoundingClientRect();

    const center = {x: left + width / 2, y: top + height / 2};
    const distance = { x: clientX - center.x, y: clientY - center.y };

    //stretch the cursor based on 

    if(isHovered) {
      mouse.x.set((center.x - cursorSize / 2) + distance.x * 0.1 )
      mouse.y.set((center.y - cursorSize / 2) + distance.y  * 0.1)
    } else {
      mouse.x.set(clientX - cursorSize / 2) 
      mouse.y.set(clientY - cursorSize / 2)
    }
   
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
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
      stickyElement.current.removeEventListener("mouseover", manageMouseOver)
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
    }
  })

  return (
    <motion.div 
    className={styles.cursor}
    style={{
      left: smoothMouse.x, 
      top: smoothMouse.y,
      scaleX: scale.x,
      scaleY: scale.y
    }}
    animate={{width: cursorSize, height: cursorSize}}
    >
    
    </motion.div>
  )
}

