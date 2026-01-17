'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: string;
  name: string;
  avatar: string;
  review: string;
  rating: number; // 1-5
}

const TestimonialCard = ({
  id,
  name,
  avatar,
  review,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={avatar}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover w-12 h-12 md:w-16 md:h-16"
        />
        <h3 className="font-bold text-gray-900 text-lg md:text-xl">{name}</h3>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">
        &quot;{review}&quot;
      </p>

      {/* Star Rating */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={24}
            className={`${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;