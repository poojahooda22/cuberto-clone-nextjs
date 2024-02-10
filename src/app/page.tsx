'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Cursor from "@/components/stickyCursor/Index";
import Header from "@/components/Header";
import { useRef } from 'react';

export default function Home() {
 
  const stickyElement = useRef(null);
  return (
      <main>
        <Header />
        <Cursor />
        <TopHeader  />
        <VideoSection />
        <TopSummary />
      </main> 
  );
}
