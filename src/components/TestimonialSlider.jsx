import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const TestimonialSlider = ({ testimonials, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
              <FaQuoteLeft className="text-4xl text-[#8DC63F]/20 absolute top-8 left-8" />
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#8DC63F]">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#8DC63F] transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#8DC63F] transition-colors z-10"
        aria-label="Next testimonial"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#8DC63F] w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default TestimonialSlider;
