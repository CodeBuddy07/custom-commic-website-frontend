"use client";
import HeroBanner from "./_components/Banner/HeroBanner";
import BrowseByEra from "./_components/BrowseByEra/BrowseByEra";
import ComicCard from "./_components/shared/comicCard";
import TestimonialCard from "./_components/shared/testimonialCard";
import JustIn from "./_components/JustIn/JustIn";

export default function Home() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">




      <HeroBanner />

      <JustIn />

      <BrowseByEra />

    </div>
  );
}
