import EraCard from "../EraCard/EraCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const BrowseByEra = () => {
  const eras = [
    {
      id: 1,
      title: "MODERN AGE",
      image: "/browse-by-era4.png",
      altText: "Modern age comics collection",
    },
    {
      id: 2,
      title: "GOLDEN AGE",
      image: "/browse-by-era3.png",
      altText: "Golden age library",
    },
    {
      id: 3,
      title: "SILVER AGE",
      image: "/browse-by-era2.png",
      altText: "Silver age collection",
    },
    {
      id: 4,
      title: "BRONZE AGE",
      image: "/browse-by-era1.png",
      altText: "Bronze age comics",
    },
  ];

  return (
    <div className="bg-gray-100 pb-30 pt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Browse by Era" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eras.map((era) => (
            <EraCard
              key={era.id}
              image={era.image}
              title={era.title}
              altText={era.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByEra;
