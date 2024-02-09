
import React, { useEffect } from 'react'
import styles from './style.module.scss';
import {motion, useMotionValue, useSpring} from 'framer-motion';

export default function Index() {
  const cursorSize = 10;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const smoothOptions = { }
  const smoothMouse = {
    x: useSpring(mouse.x),
    y: useSpring(mouse.y)
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize / 2) 
    mouse.y.set(clientY - cursorSize / 2)
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove)
    return () => {window.removeEventListener("mousemove", manageMouseMove)}
  })

  return (
    <motion.div 
    className={styles.cursor}
    style={{left: smoothMouse.x, top: smoothMouse.y}}
    >
    
    </motion.div>
  )
}

