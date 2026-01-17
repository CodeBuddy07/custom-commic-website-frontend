'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useState } from 'react';
import { Star } from 'lucide-react';

interface ComicCardProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  price: number;
  discount?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

const ComicCard = ({
  id,
  image,
  title,
  rating,
  price,
  discount = 0,
  isFavorite = false,
  onFavoriteToggle,
}: ComicCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = () => {
    setFavorite(!favorite);
    onFavoriteToggle?.(id);
  };



  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full max-w-80">
      <div className="relative group overflow-hidden bg-gray-100">
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold z-10">
            Save {discount}%
          </div>
        )}

        <div className="relative w-full aspect-3/4 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 bg-white/40 backdrop-blur-lg rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 z-20"
        >
          {favorite ? (
            <MdFavorite size={24} className="text-red-600" />
          ) : (
            <MdFavoriteBorder size={24} className="text-white" />
          )}
        </button>

        <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <div className="flex flex-col grow p-4 gap-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm md:text-base hover:text-red-600 transition">
          <Link href={`/comic/${id}`}>{title}</Link>
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-gray-900 font-semibold text-sm">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${(price / (1 - discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;