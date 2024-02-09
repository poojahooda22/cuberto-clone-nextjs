'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { useEffect  } from "react";
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/globals.css';

export default function Home() {

  useEffect(() => {
    
  })
  return (
    <main>
      <TopHeader  />
      <VideoSection />
      <TopSummary />
    </main>
  );
}
