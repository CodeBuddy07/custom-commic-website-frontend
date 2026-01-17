import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="bg-gray-50 py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Explore Rare &<br />
              Popular{" "}
              <span className="text-red-600">
                Comic
                <br />
                Books
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Raw & Graded Comics - Trusted Sellers - Fast Delivery
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:scale-105 ease-in-out duration-400 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform shadow-md hover:shadow-lg">
                Shop Now
              </button>
              <button className="bg-white cursor-pointer text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Right Content - Comic Books Image */}
          <div className="relative">
            <div className="flex items-end justify-center gap-2 transform hover:scale-105 transition-transform duration-300">
              {/* Comic Book 1 */}
              <div className="w-32 lg:w-50 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/Wolverine_(vol._1)_1.jpg"
                  alt="Comic Book 1"
                  width={200}
                  height={200}
                />
              </div>

              {/* Comic Book 2 */}
              <div className="w-32 lg:w-65 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/Wolverine_(vol._1)_1.jpg"
                  alt="Comic Book 1"
                  width={200}
                  height={200}
                />
              </div>

              {/* Comic Book 3 - Featured/Largest */}
              <div className="w-36 lg:w-80 z-10 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Wolverine_(vol._1)_1.jpg"
                  alt="Comic Book 1"
                  width={200}
                  height={200}
                />
              </div>

              {/* Comic Book 4 */}
              <div className="w-32 lg:w-65 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/spinderman1.jpg"
                  alt="Comic Book 1"
                  width={200}
                  height={200}
                />
              </div>

              {/* Comic Book 5 */}
              <div className="w-32 lg:w-50 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/Wolverine_(vol._1)_1.jpg"
                  alt="Comic Book 1"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
