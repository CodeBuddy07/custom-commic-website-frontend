"use client";
import { Clock, Star } from "lucide-react";
import ReviewCard from "../_components/shared/reviewCard";
import { useState } from "react";

const ComicProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productData = {
    title: "Wolverine (1982 Limited Series Marvel) # 1 CGC",
    subtitle: "Actual Images shown",
    sku: "su2997020",
    grade: "CGC 9.8 Newsstand (026897020)",
    cgcBarcode: "CGC Barcode (026897020)",
    otherBarcode: "CGC 9.8 (s66266091)",
    price: 153,
    stock: "In Stock",
    rating: 4.8,
    reviewCount: 826,
    images: [
      "https://cdn.marvel.com/u/prod/marvel/i/mg/4/00/5854497f12e1f/clean.jpg",
      "https://media.mycomicshop.com/n_ii/600/5847357.jpg",
      "https://i.ebayimg.com/images/g/2RAAAOSwzxRmnn~v/s-l400.jpg",
    ],
    reviews: [
      {
        id: 1,
        author: "Alex",
        rating: 5,
        date: "2 weeks ago",
        content:
          "I just simply got this I knew wanted for a while, and I couldn't be happier! It embodies perfectly everything I would want from this comic without. The process is seamless, and I absolutely love reading about it.",
        helpful: 3,
      },
      {
        id: 2,
        author: "Sara",
        rating: 5,
        date: "2 weeks ago",
        content:
          "I just simply got this I knew wanted for a while, and I couldn't be happier! It embodies perfectly everything I would want from this comic without. The process is seamless, and I absolutely love reading about it.",
        helpful: 2,
      },
      {
        id: 3,
        author: "Alex",
        rating: 5,
        date: "2 weeks ago",
        content:
          "I just simply got this I knew wanted for a while, and I couldn't be happier! It embodies perfectly everything I would want from reading about and pondering what you could expect. The process is seamless, and I absolutely love reading about it.",
        helpful: 2,
      },
      {
        id: 4,
        author: "Alex",
        rating: 5,
        date: "2 weeks ago",
        content:
          "I just simply got this I knew wanted for a while, and I couldn't be happier! It embodies perfectly everything I would want from reading about and pondering what you could expect. The process is seamless, and I absolutely love reading about it.",
        helpful: 2,
      },
      {
        id: 5,
        author: "Sara",
        rating: 5,
        date: "2 weeks ago",
        content:
          "I just simply got this I knew wanted for reading about and pondering what you could expect. The process is seamless, and I absolutely love reading about it.",
        helpful: 2,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={productData.images[selectedImage]}
              alt={productData.title}
              className="w-130 h-180 object-fill"
            />
            <div className="absolute top-4 left-4 bg-white text-gray-600 px-4 py-2 rounded">
              <div className="text-xs">CGC UNIVERSAL GRADE</div>
              <div className="text-3xl font-bold">9.8</div>
              <div className="text-xs">NEWSSTAND EDITION</div>
            </div>
          </div>

          <div className="flex gap-3">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-24 border-2 rounded overflow-hidden ${
                  selectedImage === index
                    ? "border-blue-600"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>AC

          <div className="text-red-600 rounded-lg flex items-center gap-3">
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Refund Policy
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {productData.title}
            </h1>
            <p className="text-sm text-gray-600">{productData.subtitle}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between mb-3">
              <span className="text-black font-semibold mr-2">Notes:</span>
              <span className="text-black text-base">New Stand</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-black font-semibold mr-2">SKU:</span>
              <span className="text-black text-base">{productData.sku}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-black font-semibold">Grade:</span>
              <span className="text-black">{productData.grade}</span>
            </div>
            <div className="flex justify-between gap-2 mb-3">
              <span className="text-black border border-dotted border-gray-500 p-2 w-full rounded">
                {productData.cgcBarcode}
              </span>
              <span className="text-black border border-dotted border-gray-500 p-2 w-full rounded">
                {productData.otherBarcode}
              </span>
            </div>
          </div>

          <div className="py-4 my-14">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-black text-2xl font-semibold">Price: </span>
              <div className="text-4xl font-bold text-blue-600">
                ${productData.price} USD
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-2xl text-black font-semibold">Stock:</span>
              <span className="flex items-center gap-1 text-[#6155F5] text-3xl font-medium">
                <Clock className="w-6 h-6" />
                {productData.stock}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
              Add to cart
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
              Buy Now
            </button>
          </div>

          <div className="p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-bold text-black">
                {productData.rating}
              </span>
              <span className="text-sm text-black">
                ({productData.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 text-black">
              Customer Reviews
            </h3>
            <div className=" space-y-2">
              {productData.reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  rating={review.rating}
                  date={review.date}
                  content={review.content}
                  helpful={review.helpful}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicProductPage;
