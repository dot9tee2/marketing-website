import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ServiceCard = ({
  icon,
  title,
  description,
  onClick, // ← use this!
  gradient = "from-[#8DC63F] to-[#72A730]",
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      onClick={onClick} // ← HERE
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`cursor-pointer bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      <div className="focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:ring-offset-2 rounded-xl">
        <div
          className={`mb-3 sm:mb-4 md:mb-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-r ${gradient}`}
        >
          <span className="text-white text-xl sm:text-2xl md:text-3xl">{icon}</span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900">
          {title}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 sm:mt-6 flex items-center text-[#8DC63F] font-medium text-sm sm:text-base">
          <span className="mr-2">Learn More</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  gradient: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default ServiceCard;
