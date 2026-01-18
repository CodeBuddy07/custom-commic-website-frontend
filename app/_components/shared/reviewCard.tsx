"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({
  author,
  rating,
  date,
  content,
  helpful,
}: {
  author: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            <Image
              src="https://media.istockphoto.com/id/1411160666/photo/confident-female-with-bold-personality-and-cool-attitude-portrait-of-an-edgy-young-woman.jpg?s=612x612&w=0&k=20&c=qfAQM7x5YwXDayf04bmq7SHsqUWlZP-gA6cO4pKaGcc="
              alt="user"
              width={20}
              height={20}
              className="w-6 h-6"
            />
          </div>
          <span className="font-semibold text-gray-800">{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm  text-black font-semibold">{rating}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 ml-10 mb-2">{content}</p>
      <div className="flex items-center gap-4 ml-10">
        <span className="text-xs text-gray-500">{date}</span>
        
      </div>
    </div>
  );
};

export default ReviewCard;
