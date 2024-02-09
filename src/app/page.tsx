'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';


export default function Home() {
 
  return (
      <main>
        <TopHeader  />
        <VideoSection />
        <TopSummary />
      </main>
   
    
  );
}
