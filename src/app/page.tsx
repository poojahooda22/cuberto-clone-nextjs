'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { useEffect  } from "react";

export default function Home() {

  useEffect(() => {
    (async () => {
      
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
