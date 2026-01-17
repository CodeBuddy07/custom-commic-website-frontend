import ComicCard from '../shared/comicCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionHeading from '../shared/SectionHeading';


const JustIn = () => {

    return (
        <section className='bg-gray-50 py-8 sm:py-12 md:py-16 px-4 w-full'>
            <div className="max-w-7xl mx-auto">

                <SectionHeading
                 title="Just In"
                 link='#'
                 />

                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {Array.from({ length: 15 }).map((_, index) => (
                            <SwiperSlide key={index} className="pb-8 sm:pb-10">
                                <ComicCard
                                    id={String(index)}
                                    image="/dummy-comic-1.png"
                                    title="Brave and the Bold (1955 1st Series DC) #28 CGC"
                                    rating={4.9}
                                    price={85}
                                    discount={12}
                                    isFavorite={false}
                                    onFavoriteToggle={(id) => console.log('Favorite:', id)}
                                />
                            </SwiperSlide>
                        ))}

                        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all duration-300 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center cursor-pointer group">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md  hover:bg-white/30 transition-all duration-300 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center cursor-pointer group">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Swiper>


                </div>
            </div>


        </section>
    );
};

export default JustIn;