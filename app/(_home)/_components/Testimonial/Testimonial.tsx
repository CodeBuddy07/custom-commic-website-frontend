'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from '../shared/testimonialCard';


const Testimonial = () => {

    return (
        <section className='bg-white py-12 sm:py-16 md:py-20 px-0 w-full'>
            <div className="w-full">

                <div className="mb-12 sm:mb-14 md:mb-16 text-center px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Trusted by True <span className='text-blue-500'>Comic Lovers</span>
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 max-w-2xl mx-auto">
                        Real stories from collectors who found authentic, rare, and premium comic books with us.
                    </p>
                </div>

                <div className="w-full overflow-hidden">
                    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={16}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 14,
                                },
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1536: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 28,
                                },
                            }}
                            centeredSlides={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination-testimonial',
                            }}
                            modules={[Autoplay, Pagination]}
                            className="testimonialSwiper"
                        >
                            {Array.from({ length: 15 }).map((_, index) => (
                                <SwiperSlide key={index} className="pb-6 sm:pb-8 h-auto">
                                    <TestimonialCard
                                        id={String(index)}
                                        name="Rakib"
                                        avatar="/male_model.jpg"
                                        review="Amazing collection! I found a rare comic I was searching for years. Packaging and delivery were perfect."
                                        rating={4}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonial;