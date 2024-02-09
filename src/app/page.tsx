'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';





import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function Home({ Component, pageProps }: AppProps) {
 
  return (
      <main>
        <TopHeader  />
        <VideoSection />
        <TopSummary />
      </main>
   
    
  );
}
