'use client';

import TestimonialCard from '../shared/testimonialCard';

const Testimonial = () => {
  const testimonials = Array.from({ length: 15 }).map((_, index) => ({
    id: String(index),
    name: "Rakib",
    avatar: "/male_model.jpg",
    review: "Amazing collection! I found a rare comic I was searching for years. Packaging and delivery were perfect.",
    rating: 4,
  }));

  return (
    <section className='bg-gray-50 py-12 sm:py-16 md:py-20 px-0 w-full'>
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
            {/* Marquee Container */}
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {/* First set of cards */}
                {testimonials.map((testimonial) => (
                  <div key={`${testimonial.id}-1`} className="marquee-item">
                    <TestimonialCard
                      id={testimonial.id}
                      name={testimonial.name}
                      avatar={testimonial.avatar}
                      review={testimonial.review}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {testimonials.map((testimonial) => (
                  <div key={`${testimonial.id}-2`} className="marquee-item">
                    <TestimonialCard
                      id={testimonial.id}
                      name={testimonial.name}
                      avatar={testimonial.avatar}
                      review={testimonial.review}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        
      `}</style>
    </section>
  );
};

export default Testimonial;