'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Cursor from "@/components/StickyCursor/Index";
import Header from "@/components/Header/Index";
import { useRef } from 'react';
import styles from './page.module.scss';


export default function Home() {
 
  const stickyElement = useRef(null);
  return (
      <main className={styles.main}>
        <Header ref={stickyElement} />
        <Cursor stickyElement={stickyElement} />
        <TopHeader  />
        <VideoSection />
        <TopSummary />
      </main> 
  );
}
