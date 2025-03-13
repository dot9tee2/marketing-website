import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaChartLine,
  FaPalette,
  FaSearchDollar,
  FaMegaport,
  FaCode,
  FaBullhorn,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaChartLine className="text-4xl" />,
      title: "Digital Marketing",
      shortDesc: "Data-driven strategies to boost your online presence",
      description:
        "Comprehensive digital marketing solutions tailored to your business goals. We leverage data analytics, market research, and cutting-edge tools to create campaigns that deliver measurable results.",
      features: [
        "Search Engine Marketing (SEM)",
        "Social Media Advertising",
        "Email Marketing Campaigns",
        "Performance Analytics",
        "Conversion Rate Optimization",
      ],
      benefits: [
        "Increased Brand Visibility",
        "Higher Conversion Rates",
        "Better ROI on Marketing Spend",
        "Data-Driven Decision Making",
      ],
    },
    {
      id: 2,
      icon: <FaPalette className="text-4xl" />,
      title: "Branding & Design",
      shortDesc: "Create a memorable brand identity",
      description:
        "Build a strong, cohesive brand identity that resonates with your target audience. Our design team creates visually stunning assets that communicate your brand's values and message effectively.",
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Development",
        "Marketing Collateral Design",
        "Brand Strategy",
        "Brand Voice Development",
      ],
      benefits: [
        "Strong Brand Recognition",
        "Consistent Brand Message",
        "Professional Brand Image",
        "Increased Brand Trust",
      ],
    },
    {
      id: 3,
      icon: <FaSearchDollar className="text-4xl" />,
      title: "SEO Optimization",
      shortDesc: "Improve your search engine rankings",
      description:
        "Enhance your website's visibility in search results with our comprehensive SEO services. We use the latest techniques and best practices to improve your rankings and drive organic traffic.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Strategy",
        "Link Building",
      ],
      benefits: [
        "Higher Search Rankings",
        "Increased Organic Traffic",
        "Better Quality Leads",
        "Long-term ROI",
      ],
    },
    {
      id: 4,
      icon: <FaMegaport className="text-4xl" />,
      title: "Social Media Management",
      shortDesc: "Engage your audience effectively",
      description:
        "Build and maintain a strong social media presence that engages your audience and drives business growth. We create and manage content that resonates with your target market.",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Social Media Strategy",
        "Engagement Monitoring",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased Brand Engagement",
        "Stronger Online Community",
        "Better Customer Relationships",
        "Real-time Brand Monitoring",
      ],
    },
    {
      id: 5,
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      shortDesc: "Create stunning, functional websites",
      description:
        "Develop modern, responsive websites that provide an excellent user experience and drive conversions. Our development team creates custom solutions tailored to your needs.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Mobile-First Design",
        "Website Maintenance",
        "Performance Optimization",
      ],
      benefits: [
        "Professional Online Presence",
        "Improved User Experience",
        "Higher Conversion Rates",
        "Mobile Optimization",
      ],
    },
    {
      id: 6,
      icon: <FaBullhorn className="text-4xl" />,
      title: "Content Marketing",
      shortDesc: "Tell your brand's story effectively",
      description:
        "Create compelling content that attracts and engages your target audience. Our content marketing strategies help establish your brand as an industry leader.",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Creation",
        "Infographic Design",
        "Content Distribution",
      ],
      benefits: [
        "Increased Brand Authority",
        "Better Customer Education",
        "Improved Lead Generation",
        "Higher Engagement Rates",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do you measure the success of marketing campaigns?",
      answer:
        "We use various metrics including ROI, conversion rates, traffic growth, engagement rates, and custom KPIs specific to your business goals. Regular reporting and analytics help track progress and optimize campaigns.",
    },
    {
      question: "What makes your digital marketing services unique?",
      answer:
        "Our approach combines data-driven strategies, creative excellence, and personalized solutions. We focus on delivering measurable results while maintaining transparency throughout the process.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary depending on the service and your goals. While some campaigns show quick wins, others like SEO require a longer-term approach. We'll provide realistic timelines based on your specific situation.",
    },
    {
      question: "Do you offer customized service packages?",
      answer:
        "Yes, we create tailored service packages based on your business needs, goals, and budget. Our flexible approach ensures you get the most value from our services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - HMS Marketing Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive range of digital marketing services including SEO, social media, content marketing, and web development."
        />
      </Helmet>

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital solutions to grow your business"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                path={`/services/${service.id}`}
                delay={service.id}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#8DC63F]/10 rounded-lg flex items-center justify-center text-[#8DC63F]">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
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
              </div>

              <p className="text-gray-600 mb-6">
                {selectedService.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Features
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-[#8DC63F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-[#8DC63F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <FaMinus className="text-[#8DC63F]" />
                  ) : (
                    <FaPlus className="text-[#8DC63F]" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
