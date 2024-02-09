'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import Image from "next/image";
import { useEffect  } from "react";
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function Home({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
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
