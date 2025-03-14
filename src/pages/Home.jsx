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
import { useSwipeable } from "react-swipeable";
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
  return (
    <motion.div
      className="absolute inset-0 w-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : -100,
        pointerEvents: isActive ? "auto" : "none",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative h-full">
        <FaQuoteLeft className="text-4xl text-[#8DC63F]/20 absolute top-8 left-8" />
        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <LazyImage
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              "{testimonial.content}"
            </p>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
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

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
      easing: "ease-out-cubic",
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
  }, []);

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
      name: "Home | Your Site Name",
      description:
        "Welcome to our digital solutions hub. We offer web development, digital marketing, and business growth services.",
      url: window.location.href,
      mainEntity: {
        "@type": "Organization",
        name: "Your Site Name",
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

  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedUp: () => {
      const nextSection = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2 + 100
      );
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    onSwipedDown: () => {
      const prevSection = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2 - 100
      );
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return (
    <div className="relative" {...handlers}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroVisible ? "visible" : "hidden"}
        variants={scrollAnimationVariants}
        className="min-h-screen flex items-center relative bg-black text-white overflow-hidden"
      >
        {/* Optimized cursor glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(141, 198, 63, 0.15) 0%, transparent 35%)`,
            opacity: 0.6,
          }}
        />

        {/* Mobile swipe indicator */}
        {isMobile && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm animate-bounce">
            Swipe up to explore
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white flex flex-col items-center gap-2 text-center max-w-6xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="h-[72px] flex items-center">
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
              className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Innovative marketing solutions that drive growth and deliver
              results
            </p>
            <div
              className="flex justify-center space-x-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() => navigate("/contact")}
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-base font-medium text-white bg-[#8DC63F] rounded-full hover:bg-[#72A730] transition-all duration-300 group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Get Started</span>
              </button>
              <button
                onClick={() => navigate("/services")}
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-base font-medium text-white border-2 border-[#8DC63F] rounded-full hover:bg-[#8DC63F] transition-all duration-300 group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4"
            data-aos="fade-down"
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join hundreds of businesses that trust HMS Marketing Solutions for
            their digital growth
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
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
              <motion.div
                key={index}
                className="w-full max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative w-full h-[100px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Name Display */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8DC63F]/10 to-[#72A730]/5 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-lg font-semibold text-gray-800 text-center">
                      {client.name}
                    </h3>
                  </div>

                  {/* Logo Display */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div
            className="text-center mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/portfolio"
              className="text-[#8DC63F] hover:text-[#72A730] font-medium inline-flex items-center gap-2 transition-colors group"
            >
              View Success Stories
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
        </div>
      </section>

      {/* Services Overview */}
      <section
        ref={servicesRef}
        className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 z-10"
      >
        {/* Add subtle background pattern */}
        <div className="absolute inset-0 bg-[#8DC63F]/5 opacity-30"></div>

        <div className="container mx-auto px-4 relative z-20">
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
                icon: (
                  <FaChartLine className="text-4xl md:text-6xl text-white" />
                ),
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
                icon: (
                  <MdCampaign className="text-4xl md:text-6xl text-white" />
                ),
                title: "Social Media",
                description: "Engage your audience across all platforms",
                gradient: "from-[#8DC63F] to-[#72A730]",
                path: "/services#social-media",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 active:scale-95 md:hover:-translate-y-2 hover:shadow-xl border border-gray-100"
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
                data-aos-once="true"
                data-aos-delay={isMobile ? index * 50 : index * 100}
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
        </div>
      </section>

      {/* Key Statistics */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: 500, suffix: "+", label: "Projects Completed" },
              { number: 95, suffix: "%", label: "Client Satisfaction" },
              { number: 150, suffix: "%", label: "Average ROI" },
              { number: 50, suffix: "+", label: "Industry Awards" },
            ].map((stat, index) => (
              <StatCounter
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={isAboutVisible ? "visible" : "hidden"}
        variants={scrollAnimationVariants}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8DC63F]/5 via-white to-[#8DC63F]/5 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
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
      </motion.section>

      {/* Testimonials Section - Add this before the CTA section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={isCtaVisible ? "visible" : "hidden"}
        variants={scrollAnimationVariants}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#8DC63F]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 80 + 100}px`,
                  height: `${Math.random() * 80 + 100}px`,
                  opacity: Math.random() * 0.2 + 0.1,
                  animation: `gentleFloat ${
                    Math.random() * 20 + 30
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 15}s`,
                  filter: "blur(8px)",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
      </motion.section>

      {/* Mobile-specific elements */}
      {isMobile && (
        <>
          <div className="fixed bottom-20 left-4 z-[9999] flex flex-col gap-4">
            <a
              href="tel:+1234567890"
              className="bg-[#8DC63F] p-4 rounded-full shadow-lg hover:bg-[#72A730] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8DC63F]"
              aria-label="Call us"
            >
              <FaPhone className="w-6 h-6 text-white" aria-hidden="true" />
            </a>
          </div>
          <div className="fixed bottom-8 right-4 z-[9999]">
            <button
              className="bg-[#8DC63F] p-4 rounded-full shadow-lg hover:bg-[#72A730] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8DC63F] active:scale-95"
              aria-label="Open chat"
              onClick={() => {
                console.log("Chat functionality to be implemented");
              }}
            >
              <BsChatDots className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </>
      )}

      {/* Meta Tags */}
      <MetaTags />

      {/* Enhanced animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes gentleFloat {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -15px) scale(1.05);
          }
          50% {
            transform: translate(40px, 0) scale(1);
          }
          75% {
            transform: translate(20px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .counter-anim {
          animation: countUp 2s ease-out forwards;
          opacity: 0;
        }

        @keyframes countUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotateY-180 {
          transform: rotateY(180deg);
        }

        .transform-gpu {
          transform-style: preserve-3d;
          will-change: transform;
        }

        @media (max-width: 768px) {
          @keyframes gentleFloat {
            0% {
              transform: translate(0, 0) scale(1);
            }
            25% {
              transform: translate(10px, -8px) scale(1.03);
            }
            50% {
              transform: translate(20px, 0) scale(1);
            }
            75% {
              transform: translate(10px, 8px) scale(0.97);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

const StatCounter = ({ number, suffix, label, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px",
  });

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="text-center p-4"
      role="region"
      aria-label={`${label} Statistics`}
    >
      <div className="text-4xl font-bold mb-2">
        {hasStarted ? (
          <CountUp
            start={0}
            end={number}
            suffix={suffix}
            duration={2}
            useEasing={true}
            enableScrollSpy={true}
            scrollSpyDelay={delay}
            aria-live="polite"
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-gray-200">{label}</div>
    </div>
  );
};

const MetaTags = () => {
  // Get the current path to create a proper canonical URL
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${currentPath}`
      : "";

  return (
    <Helmet>
      <html lang="en" />
      <title>
        HMS Marketing - Transform Your Business with Digital Marketing
      </title>
      <meta
        name="description"
        content="HMS Marketing helps businesses grow through innovative digital marketing strategies, brand development, and data-driven solutions."
      />
      <meta
        name="keywords"
        content="digital marketing, business growth, brand development, social media marketing, marketing strategy, HMS Marketing"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="HMS Marketing - Transform Your Business"
      />
      <meta
        property="og:description"
        content="Innovative marketing solutions that drive growth and deliver results"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default Home;
