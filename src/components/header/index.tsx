'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.scss'
import { forwardRef } from 'react'
import  IonIcon  from '@reacticons/ionicons'
import  Image from 'next/image';
import Link from 'next/link';
import Magnetic from '../magnetic/index';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './navbar/Index';

const Header = forwardRef(function index(props, ref) {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

  return (
    <>
    <div className={styles.header}> 
        
        <div className='flex items-center gap-[4vw]'>
            <Image src='/logo.svg' width={32} height={32} alt="" className='w-[20vw] sm:w-[5vw]' />
            <div className='hidden sm:flex items-center gap-[3vw]'>
                {["Home", "Work", "About"].map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <Link href="/">
                                <p className='text-[.8vw] flex items-center gap-[.2vw]'>
                                    {index === 1 && <span style={{boxShadow:'0 0 0.25em #00FF19'}} className='inline-block w-[.2vw] h-[.2vw] rounded-full bg-green-500'></span> }
                                    {item}
                                </p>
                            </Link>  
                        </div>
                    )
                })}
            </div>   
          </div>      
      <Magnetic>
          <div onClick={() => {setIsActive(!isActive)}} className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
      </Magnetic>     
    </div>
    </>
  )
})

export default Header;
