import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formSubmitStatus, setFormSubmitStatus] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFormSubmitSuccess = () => {
    setFormSubmitStatus({
      type: "success",
      message: "Thank you for your message! We'll get back to you soon.",
    });
    setTimeout(() => setFormSubmitStatus(null), 5000);
  };

  const handleFormSubmitError = (error) => {
    setFormSubmitStatus({
      type: "error",
      message: "Oops! Something went wrong. Please try again later.",
    });
    setTimeout(() => setFormSubmitStatus(null), 5000);
    console.error("Form submission error:", error);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: ["15AA, DHA Phase4, Lahore,Pakistan-74200"],
      link: "https://maps.app.goo.gl/rciuCQor5rmPks1t5",
      linkText: "Open in Google Maps",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+92 318 4187515", "Mon-Fri: 9am-6pm EST"],
      link: "tel:+923184187515",
      linkText: "Click to Call",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@hmsmarketing.com", "support@hmsmarketing.com"],
      link: "mailto:info@hmsmarketing.com",
      linkText: "Send Email",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      details: ["+92 318 4187515", "Available 24/7"],
      link: "https://wa.me/+923184187515",
      linkText: "Chat on WhatsApp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - HMS Marketing Solutions</title>
        <meta
          name="description"
          content="Get in touch with HMS Marketing for innovative digital marketing solutions tailored to your business needs."
        />
      </Helmet>

      <HeroSection
        title="Contact Us"
        subtitle="Let's discuss how we can help grow your business"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {formSubmitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-4 p-4 rounded-lg ${
                    formSubmitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {formSubmitStatus.message}
                </motion.div>
              )}

              <ContactForm
                onSubmitSuccess={handleFormSubmitSuccess}
                onSubmitError={handleFormSubmitError}
              />
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm h-fit">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#8DC63F]/10 rounded-lg flex items-center justify-center text-[#8DC63F] shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                        <span className="inline-block mt-2 text-[#8DC63F] font-medium hover:underline">
                          {info.linkText}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
