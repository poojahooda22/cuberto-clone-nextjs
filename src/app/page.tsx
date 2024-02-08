import TopHeader from "@/components/TopHeader";
import TopSummary from "@/components/TopSummary";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TopHeader  />
      <VideoSection />
      <TopSummary />
    </main>
  );
}
