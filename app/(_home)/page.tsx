"use client";

import HeroBanner from "./_components/Banner/HeroBanner";
import BrowseByEra from "./_components/BrowseByEra/BrowseByEra";
import JustIn from "./_components/JustIn/JustIn";
import DropDownMenu from "./_components/shared/DropDownMenu";
import Testimonial from "./_components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <DropDownMenu/>

      <HeroBanner />

      <JustIn />

      <BrowseByEra />

      <Testimonial/>

    </div>
  );
}
