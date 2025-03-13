import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
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
      details: ["123 Business Street", "Suite 100", "New York, NY 10001"],
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri: 9am-6pm EST"],
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@hmsmarketing.com", "support@hmsmarketing.com"],
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {formSubmitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-lg ${
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#8DC63F]/10 rounded-lg flex items-center justify-center text-[#8DC63F]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-12">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                  className="w-full h-[400px] rounded-lg shadow-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
