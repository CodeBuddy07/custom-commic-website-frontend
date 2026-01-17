import Image from "next/image";

const EraCard = ({
  image,
  title,
  altText,
}: {
  image: string;
  title: string;
  altText?: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
      <Image
        src={image}
        alt={altText || title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        width={500}
        height={500}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl font-bold tracking-wide z-10">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default EraCard;
