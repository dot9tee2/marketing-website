import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaAward,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or timeline
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Stats counter ref
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Auto rotate testimonials
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(testimonialTimer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "branding", label: "Branding" },
    { id: "social-media", label: "Social Media" },
    { id: "seo", label: "SEO" },
    { id: "web-development", label: "Web Development" },
  ];

  const statistics = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Industry Awards" },
    { value: 50, suffix: "M+", label: "Revenue Generated" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "HMS Marketing transformed our digital presence completely. Their strategic approach and creative solutions helped us achieve unprecedented growth.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, InnovateCorp",
      content:
        "The team's expertise in digital marketing and branding helped us establish a strong market presence. They exceeded our expectations in every way.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, GrowthLabs",
      content:
        "Working with HMS Marketing has been transformative for our business. Their data-driven approach and creative strategies delivered exceptional results.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Global Rebranding",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "150%",
        engagement: "200%",
        roi: "180%",
      },
      description:
        "Complete brand transformation for a leading tech startup, including visual identity, messaging, and market positioning.",
      tags: ["Brand Strategy", "Visual Design", "Marketing"],
      client: "TechStart Inc.",
      duration: "3 months",
      year: "2023",
    },
    {
      id: 2,
      title: "EcoLife Digital Campaign",
      category: "digital-marketing",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "200%",
        engagement: "250%",
        roi: "220%",
      },
      description:
        "Comprehensive digital marketing campaign for sustainable products, resulting in significant market penetration.",
      tags: ["Digital Marketing", "Content Strategy", "PPC"],
      client: "EcoLife Solutions",
      duration: "6 months",
      year: "2023",
    },
    {
      id: 3,
      title: "SocialBoost Campaign",
      category: "social-media",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "300%",
        engagement: "400%",
        roi: "250%",
      },
      description:
        "Strategic social media campaign that dramatically increased brand awareness and customer engagement.",
      tags: ["Social Media", "Content Creation", "Analytics"],
      client: "GlobalTech Corp",
      duration: "4 months",
      year: "2023",
    },
    {
      id: 4,
      title: "SEO Optimization Project",
      category: "seo",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "180%",
        engagement: "150%",
        roi: "200%",
      },
      description:
        "Comprehensive SEO optimization resulting in significant organic traffic growth and improved rankings.",
      tags: ["SEO", "Content Strategy", "Analytics"],
      client: "TechSolutions Ltd",
      duration: "5 months",
      year: "2023",
    },
    {
      id: 5,
      title: "E-commerce Platform Optimization",
      category: "web-development",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "250%",
        engagement: "180%",
        roi: "300%",
      },
      description:
        "Complete e-commerce platform overhaul with focus on user experience and conversion optimization.",
      tags: ["E-commerce", "UX Design", "Web Development"],
      client: "ShopMax",
      duration: "4 months",
      year: "2023",
    },
    {
      id: 6,
      title: "Content Marketing Strategy",
      category: "content",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: {
        growth: "200%",
        engagement: "350%",
        roi: "220%",
      },
      description:
        "Comprehensive content strategy and creation for a leading SaaS platform.",
      tags: ["Content Strategy", "SEO", "Social Media"],
      client: "CloudTech Solutions",
      duration: "6 months",
      year: "2023",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-[#8DC63F] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio - HMS Marketing Solution's Success Stories</title>
        <meta
          name="description"
          content="Explore our portfolio of successful digital marketing campaigns, branding projects, and marketing strategies that have transformed businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(141, 198, 63, 0.3) 0%, transparent 60%)`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #8DC63F 100%)",
              }}
            >
              Our Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              Transforming visions into digital success
            </motion.p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#8DC63F] mb-2">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section with View Toggle */}
      <section className="py-12 bg-white sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    filter === category.id
                      ? "bg-[#8DC63F] text-white shadow-lg shadow-[#8DC63F]/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#8DC63F] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "timeline"
                    ? "bg-[#8DC63F] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 mb-4">{project.client}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[#8DC63F]/20 text-[#8DC63F] text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#8DC63F]/20"></div>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-8 mb-16 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="w-1/2">
                      <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 p-6 bg-gray-50 rounded-xl shadow-lg">
                      <div className="text-sm text-[#8DC63F] mb-2">
                        {project.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#8DC63F]/10 text-[#8DC63F] text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Client Testimonials
          </h2>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : -100,
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`${
                    currentTestimonial === index ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-6 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#8DC63F]">{testimonial.position}</p>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-4xl text-[#8DC63F]/20 mb-4" />
                    <p className="text-gray-600 text-lg mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#8DC63F]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-[#8DC63F] w-6"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8DC63F] to-[#72A730] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('path/to/pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's transform your business with innovative digital solutions
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-[#8DC63F] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-200">{selectedProject.client}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-lg mb-8">
                  {selectedProject.description}
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedProject.results).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-4 rounded-lg bg-gray-50"
                      >
                        <p className="text-[#8DC63F] text-2xl font-bold mb-2">
                          {value}
                        </p>
                        <p className="text-gray-600 capitalize">{key}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#8DC63F]/10 text-[#8DC63F] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
