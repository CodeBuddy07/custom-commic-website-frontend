'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: string;
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

const TestimonialCard = ({
  id,
  name,
  avatar,
  review,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={avatar}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{name}</h3>
          <p className="text-gray-500 text-xs">Verified Buyer</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            } shrink-0`}
          />
        ))}
      </div>

      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed grow">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;