import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageHeader = ({
  title,
  subtitle,
  backgroundClass = "bg-black",
  textColorClass = "text-white",
  alignment = "center",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative py-20 ${backgroundClass} overflow-hidden`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8DC63F]/10 via-transparent to-[#8DC63F]/10 opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-${alignment}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColorClass}`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-lg md:text-xl ${textColorClass} opacity-90`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8DC63F]/20 to-transparent" />
    </motion.section>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundClass: PropTypes.string,
  textColorClass: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
};

export default PageHeader;
