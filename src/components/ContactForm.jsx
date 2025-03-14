import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactForm = ({
  onSubmitSuccess,
  onSubmitError,
  isSubmitting,
  setIsSubmitting,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    bestTime: "anytime",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation (optional but with format check)
    if (
      formData.phone.trim() &&
      !/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Invalid phone number";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS with template variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          preferredContact: formData.preferredContact,
          bestTime: formData.bestTime,
        }
      );

      onSubmitSuccess();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
        bestTime: "anytime",
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      onSubmitError(error);
    }
  };

  const inputClasses = `peer w-full px-4 py-3 rounded-lg border bg-white/50 focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20 transition-all duration-300 outline-none border-gray-300 placeholder-transparent`;

  const labelClasses = `absolute left-4 -top-2.5 bg-white px-1 text-sm transition-all duration-300 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 
    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#8DC63F]`;

  const selectClasses = `w-full px-4 py-3 rounded-lg border bg-white/50 focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20 transition-all duration-300 outline-none border-gray-300`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses}
            placeholder="John Doe"
          />
          <label htmlFor="name" className={labelClasses}>
            Your Name
          </label>
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-500 relative z-10">
              {errors.name}
            </p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses}
            placeholder="+1 (555) 123-4567"
          />
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          placeholder="john@example.com"
        />
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <label
            htmlFor="preferredContact"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <label
            htmlFor="bestTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Best Time to Contact
          </label>
          <select
            id="bestTime"
            name="bestTime"
            value={formData.bestTime}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="anytime">Anytime</option>
            <option value="morning">Morning (9AM - 12PM)</option>
            <option value="afternoon">Afternoon (12PM - 5PM)</option>
            <option value="evening">Evening (5PM - 8PM)</option>
          </select>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative"
      >
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          placeholder="How can we help you?"
        />
        <label htmlFor="subject" className={labelClasses}>
          Subject
        </label>
        {touched.subject && errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative"
      >
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          placeholder="Tell us about your project..."
        />
        <label htmlFor="message" className={labelClasses}>
          Your Message
        </label>
        {touched.message && errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-end"
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#8DC63F] hover:bg-[#72A730] active:bg-[#5C8A26]"
            }
            transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
          `}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="text-sm" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitError: PropTypes.func,
  isSubmitting: PropTypes.bool,
  setIsSubmitting: PropTypes.func,
};

export default ContactForm;
