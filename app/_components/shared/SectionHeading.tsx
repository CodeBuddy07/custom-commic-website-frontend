import Link from "next/link";

const SectionHeading = ({ title, link }: { title: string; link?: string }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-medium text-gray-900">{title.toUpperCase()}</h2>

      {link && (
        <Link
          href={link}
          className="text-[#0052AD] text-base font-semibold hover:underline whitespace-nowrap"
        >
          See All
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
