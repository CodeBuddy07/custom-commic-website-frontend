"use client";
import HeroBanner from "./_components/Banner/HeroBanner";
import ComicCard from "./_components/shared/comicCard";
import TestimonialCard from "./_components/shared/testimonialCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <ComicCard
        id="1"
        image="/dummy-comic-1.png"
        title="Brave and the Bold (1955 1st Series DC) #28 CGC"
        rating={4.9}
        price={85}
        discount={12}
        isFavorite={false}
        onFavoriteToggle={(id) => console.log('Favorite:', id)}
      />

      <TestimonialCard
        id="1"
        name="Rakib"
        avatar="/male_model.jpg"
        review="Amazing collection! I found a rare comic I was searching for years. Packaging and delivery were perfect."
        rating={4}
      /> */}
    
      <HeroBanner />

    </div>
  );
}
