import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({
  icon,
  title,
  description,
  path,
  gradient = "from-[#8DC63F] to-[#72A730]",
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      <Link
        to={path}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:ring-offset-2 rounded-xl"
      >
        <div
          className={`mb-4 md:mb-6 w-16 md:w-20 h-16 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r ${gradient} transform transition-transform group-hover:rotate-6`}
        >
          {icon}
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-[#8DC63F] transition-colors">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex items-center text-[#8DC63F] font-medium">
          <span className="mr-2">Learn More</span>
          <svg
            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
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
      </Link>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default ServiceCard;
