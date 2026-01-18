import Image from "next/image";
export default function HeroBanner() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 w-full ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Explore Rare &<br />
              Popular{" "}
              <span className="text-red-600">
                Comic
                <br />
                Books
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              Raw & Graded Comics - Trusted Sellers - Fast Delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-blue-600 hover:scale-105 ease-in-out duration-400 cursor-pointer text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform shadow-md hover:shadow-lg text-sm sm:text-base">
                Shop Now
              </button>
              <button className="bg-white cursor-pointer text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300 text-sm sm:text-base">
                Browse Categories
              </button>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center group">
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="relative w-full h-full flex items-center justify-center  sm:px-4 md:px-8 transition-all duration-500">

                <div className="absolute w-20 md:w-28 lg:w-40 transform -rotate-12 -translate-x-16 md:-translate-x-32 group-hover:-translate-x-16 sm:group-hover:-translate-x-24 md:group-hover:-translate-x-32 lg:group-hover:-translate-x-44 group-hover:-rotate-24 transition-all duration-500">
                  <div className="relative drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
                    <Image
                      src="/comic_cover (5).png"
                      alt="Comic Book 1"
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </div>

                <div className="absolute w-24 md:w-32 lg:w-48 transform -rotate-6 -translate-x-8 md:-translate-x-16 group-hover:-translate-x-8 sm:group-hover:-translate-x-12 md:group-hover:-translate-x-16 lg:group-hover:-translate-x-24 group-hover:-rotate-12 transition-all duration-500">
                  <div className="relative drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300">
                    <Image
                      src="/comic_cover (4).png"
                      alt="Comic Book 2"
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </div>

                <div className="relative w-32 md:w-36 lg:w-56 z-10 transform transition-all duration-500 group-hover:scale-105">
                  <div className="relative drop-shadow-2xl hover:drop-shadow-xl transition-all duration-300">
                    <Image
                      src="/comic_cover (1).png"
                      alt="Comic Book 3"
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </div>

                <div className="absolute w-20 md:w-28 lg:w-40 transform rotate-12 translate-x-16 md:translate-x-32 group-hover:translate-x-16 sm:group-hover:translate-x-24 md:group-hover:translate-x-32 lg:group-hover:translate-x-44 group-hover:rotate-24 transition-all duration-500">
                  <div className="relative drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
                    <Image
                      src="/comic_cover (2).png"
                      alt="Comic Book 5"
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </div>

                <div className="absolute w-24 md:w-32 lg:w-48 transform rotate-6 translate-x-8 md:translate-x-16 group-hover:translate-x-8 sm:group-hover:translate-x-12 md:group-hover:translate-x-16 lg:group-hover:translate-x-24 group-hover:rotate-12 transition-all duration-500">
                  <div className="relative drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300">
                    <Image
                      src="/comic_cover (3).png"
                      alt="Comic Book 4"
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-400 rounded-full opacity-20 blur-[15px] sm:blur-[25px]"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-red-400 rounded-full opacity-20 blur-[15px] sm:blur-[25px]"></div>
            <div className="absolute bottom-2 lg:-bottom-8 left-1/3 w-32 sm:w-52 h-6 sm:h-10 bg-black rounded-full opacity-20 blur-md sm:blur-[15px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}