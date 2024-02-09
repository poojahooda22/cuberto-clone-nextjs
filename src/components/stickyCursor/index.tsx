import React from 'react'
import styles from './style.module.scss';
import {motion, useMotionValue} from 'framer-motion';

function index() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  return (
    <motion.div className={styles.cursor}>
      
    </motion.div>
  )
}

export default index
