'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { useEffect  } from "react";

export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
    })
  })
  return (
    <main>
      <TopHeader  />
      <VideoSection />
      <TopSummary />
    </main>
  );
}
