'use client';

import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Cursor from "@/components/stickyCursor";

export default function Home() {
 
  return (
      <main>
        <Cursor />
        <TopHeader  />
        <VideoSection />
        <TopSummary />
      </main> 
  );
}
