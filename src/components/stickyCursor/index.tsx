import React, {useEffect} from 'react'
import styles from './style.module.scss';
import {motion, useMotionValue} from 'framer-motion';

function index() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const manageMouseMove = (e) => {
    const { clientX, clientY} =e;
    mouse.x.set(clientX) 
    mouse.y.set(clientY)
  }
  return (
    <motion.div className={styles.cursor}>
      
    </motion.div>
  )
}

export default index
