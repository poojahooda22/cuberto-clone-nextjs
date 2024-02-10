import React from 'react'
import styles from './style.module.scss'
import { forwardRef } from 'react'

const MenuIcon = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
        <div ref={ref} className={styles.burger}></div> 
    </div>
  )
})

export default MenuIcon;
