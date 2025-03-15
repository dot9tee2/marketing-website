import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaPhone, FaQuoteLeft } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import {
  MdOutlineRocketLaunch,
  MdBrandingWatermark,
  MdCampaign,
} from "react-icons/md";
import { useEffect, useRef, useState, memo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import LazyImage from "../components/LazyImage";
import { useMousePosition } from "../hooks/useMousePosition";
import {
  useScrollAnimation,
  scrollAnimationVariants,
} from "../hooks/useScrollAnimation";
import { useWindowSize } from "../hooks/useWindowSize";

// Move testimonials data outside component to prevent recreation on each render
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "HMS Marketing transformed our digital presence. Their strategic approach helped us achieve a 200% growth in lead generation within six months.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, InnovateCorp",
    content:
      "The team's creativity and data-driven strategies have been instrumental in our success. They don't just deliver results; they exceed expectations.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, GrowthLabs",
    content:
      "Working with HMS Marketing has been transformative. Their holistic approach to digital marketing helped us establish a strong market presence.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
  },
];

// Create a memoized testimonial component
const TestimonialCard = memo(({ testimonial, isActive }) => {
  const { isMobile } = useWindowSize();

  return (
    <motion.div
      className="absolute inset-0 w-full"
      initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : isMobile ? -50 : -100,
        pointerEvents: isActive ? "auto" : "none",
      }}
      transition={{ duration: isMobile ? 0.3 : 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 relative h-full">
        <FaQuoteLeft className="text-3xl md:text-4xl text-[#8DC63F]/20 absolute top-6 md:top-8 left-6 md:left-8" />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full">
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <LazyImage
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-base md:text-xl leading-relaxed mb-4 md:mb-6">
              "{testimonial.content}"
            </p>
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-[#8DC63F]">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

// Create a custom hook for testimonial rotation
const useTestimonialRotation = (totalTestimonials, interval = 5000) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const rotateTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
    };

    timeoutRef.current = setInterval(rotateTestimonial, interval);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [totalTestimonials, interval]);

  const setTestimonial = useCallback((index) => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
    setCurrentTestimonial(index);
  }, []);

  return [currentTestimonial, setTestimonial];
};

// Update the testimonials section in MainContent
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useTestimonialRotation(
    TESTIMONIALS.length
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8DC63F]/5 opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-down"
        >
          Client Success Stories
        </h2>
        <p
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hear from businesses that have transformed their digital presence with
          HMS Marketing
        </p>

        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="relative h-[350px] overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={currentTestimonial === index}
              />
            ))}

            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-3 pb-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-[#8DC63F] w-6"
                      : "bg-[#8DC63F]/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    // Configure AOS with appropriate settings for both desktop and mobile
    AOS.init({
      duration: isMobile ? 400 : 1000,
      once: true, // Always set to true for mobile to prevent performance issues
      mirror: false, // Disable mirror on mobile
      offset: isMobile ? 10 : 120,
      delay: isMobile ? 0 : 100,
      easing: "ease-out-cubic",
      disable: false,
      startEvent: "DOMContentLoaded",
      debounceDelay: isMobile ? 10 : 50,
      throttleDelay: isMobile ? 30 : 99,
      anchorPlacement: "top-bottom",
    });

    const checkAssetsLoaded = () => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      }
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", checkAssetsLoaded);
      // Fallback timer in case load event doesn't fire
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => {
        window.removeEventListener("load", checkAssetsLoaded);
        clearTimeout(timer);
      };
    }
  }, [isMobile]);

  // Refresh AOS when loading state changes
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }, [isLoading]);

  // SEO configuration
  const seoData = {
    title: "Home",
    description:
      "Welcome to our digital solutions hub. We offer web development, digital marketing, and business growth services to help your business thrive in the digital age.",
    keywords:
      "digital solutions, web development, digital marketing, business growth, SEO services",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Home | HMS Marketing Solutions",
      description:
        "Welcome to our digital solutions hub. We offer web development, digital marketing, and business growth services.",
      url: window.location.href,
      mainEntity: {
        "@type": "Organization",
        name: "hmsmarketingsolutions.com",
        url: window.location.origin,
      },
    },
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="overflow-hidden">
        {isLoading ? <LoadingSpinner /> : <MainContent />}
      </div>
    </>
  );
};

const LoadingSpinner = () => (
  <div
    className="flex items-center justify-center min-h-screen"
    role="alert"
    aria-label="Loading content"
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const MainContent = () => {
  const navigate = useNavigate();
  const { position } = useMousePosition();
  const { isMobile } = useWindowSize();
  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.5 });
  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const [ctaRef, isCtaVisible] = useScrollAnimation();
  const [servicesRef, isServicesVisible] = useScrollAnimation();

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroVisible ? "visible" : "hidden"}
        variants={scrollAnimationVariants}
        className="min-h-[90vh] md:min-h-screen flex items-center relative bg-black text-white overflow-hidden"
      >
        {/* Optimized cursor glow effect - conditionally render based on device */}
        {!isMobile ? (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(142, 198, 63, 0.51) 0%, transparent 35%)`,
              opacity: 0.6,
            }}
          />
        ) : (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(142, 198, 63, 0.51) 0%, transparent 70%)",
              opacity: 0.4,
            }}
          />
        )}

        {/* Scroll indicator instead of swipe */}
        {isMobile && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm animate-bounce">
            Scroll down to explore
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white flex flex-col items-center gap-2 text-center max-w-6xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="h-[60px] sm:h-[72px] flex items-center">
                <TypeAnimation
                  sequence={[
                    "Elevate Your Brand with",
                    3000,
                    "Grow Your Business with",
                    3000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </div>
              <span
                className="text-[#8DC63F] relative inline-block"
                style={{
                  textShadow: `0 0 10px rgba(141, 198, 63, 0.3)`,
                }}
              >
                HMS Marketing Solutions
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#8DC63F] animate-pulse"></span>
              </span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Innovative marketing solutions that drive growth and deliver
              results
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() => navigate("/contact")}
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium text-white bg-[#8DC63F] rounded-full hover:bg-[#72A730] transition-all duration-300 group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Get Started</span>
              </button>
              <button
                onClick={() => navigate("/services")}
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium text-white border-2 border-[#8DC63F] rounded-full hover:bg-[#8DC63F] transition-all duration-300 group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trusted by Industry Leaders */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4"
            data-aos="fade-down"
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join hundreds of businesses that trust HMS Marketing Solutions for
            their digital growth
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 items-center justify-items-center">
            {[
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
              },
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Apple",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              },
              {
                name: "Meta",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
              },
              {
                name: "IBM",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="w-full max-w-[150px] sm:max-w-[200px]"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="client-logo-container h-[80px] sm:h-[100px] hover-on-touch">
                  {/* Name Display */}
                  <div className="client-logo-name">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">
                      {client.name}
                    </h3>
                  </div>

                  {/* Logo Display */}
                  <div className="client-logo-image">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain client-logo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-16 bg-white">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-down"
          >
            Our Services
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: (
                <MdOutlineRocketLaunch className="text-4xl md:text-6xl text-white" />
              ),
              title: "Digital Marketing",
              description:
                "Strategic campaigns that reach your target audience",
              gradient: "from-[#8DC63F] to-[#72A730]",
              path: "/services#digital-marketing",
            },
            {
              icon: <FaChartLine className="text-4xl md:text-6xl text-white" />,
              title: "Growth Strategy",
              description: "Data-driven approaches to scale your business",
              gradient: "from-[#8DC63F] to-[#72A730]",
              path: "/services#growth-strategy",
            },
            {
              icon: (
                <MdBrandingWatermark className="text-4xl md:text-6xl text-white" />
              ),
              title: "Brand Development",
              description: "Create a powerful and memorable brand identity",
              gradient: "from-[#8DC63F] to-[#72A730]",
              path: "/services#brand-development",
            },
            {
              icon: <MdCampaign className="text-4xl md:text-6xl text-white" />,
              title: "Social Media",
              description: "Engage your audience across all platforms",
              gradient: "from-[#8DC63F] to-[#72A730]",
              path: "/services#social-media",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 active:scale-95 md:hover:-translate-y-2 hover:shadow-xl border border-gray-100 service-card"
              onClick={() => navigate(service.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(service.path);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${service.title}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`mb-4 md:mb-6 w-16 md:w-20 h-16 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r ${service.gradient} transform transition-transform hover:rotate-6 shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Add View All Services link */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#8DC63F] hover:text-[#72A730] font-medium transition-colors group"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8DC63F] to-[#72A730] bg-clip-text text-transparent">
                Why Choose HMS Marketing?
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With years of experience and a track record of success, we help
                businesses reach their full potential through innovative
                marketing strategies and cutting-edge solutions.
              </p>
              <div className="space-y-6">
                {[
                  "Expert team of marketing professionals",
                  "Customized strategies for your business",
                  "Data-driven decision making",
                  "Proven track record of success",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-3 h-3 bg-[#8DC63F] rounded-full transform transition-transform group-hover:scale-150" />
                    <span className="text-gray-700 group-hover:text-[#8DC63F] transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8DC63F] to-[#72A730] rounded-2xl transform rotate-6 scale-105 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                <LazyImage
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Marketing team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-5xl font-bold mb-8 text-white"
              data-aos="fade-down"
            >
              Ready to Grow Your Business?
            </h2>
            <p
              className="text-2xl mb-12 text-gray-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Let's work together to create a marketing strategy that drives
              results.
            </p>
            <div data-aos="zoom-in" data-aos-delay="400">
              <Link
                to="/contact"
                className="inline-block bg-[#8DC63F] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#72A730] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
