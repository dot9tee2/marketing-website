import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
  spinner: {
    container: "flex items-center justify-center",
    animation: (
      <motion.div
        className="w-12 h-12 border-4 border-[#8DC63F]/20 border-t-[#8DC63F] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    ),
  },
  dots: {
    container: "flex items-center justify-center space-x-2",
    animation: (
      <>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-[#8DC63F] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </>
    ),
  },
  pulse: {
    container: "flex items-center justify-center",
    animation: (
      <motion.div
        className="w-16 h-16 bg-[#8DC63F]/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-[#8DC63F] rounded-full scale-50" />
      </motion.div>
    ),
  },
  progress: {
    container: "flex items-center justify-center w-full max-w-md",
    animation: (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#8DC63F]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    ),
  },
};

const Loading = ({
  variant = "spinner",
  text,
  textPosition = "bottom",
  className = "",
  size = "default",
}) => {
  const sizeClasses = {
    small: "scale-75",
    default: "scale-100",
    large: "scale-150",
  };

  const selectedVariant = variants[variant] || variants.spinner;

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {text && textPosition === "top" && (
        <p className="text-gray-600">{text}</p>
      )}
      <div className={`${selectedVariant.container} ${sizeClasses[size]}`}>
        {selectedVariant.animation}
      </div>
      {text && textPosition === "bottom" && (
        <p className="text-gray-600">{text}</p>
      )}
    </div>
  );
};

Loading.propTypes = {
  variant: PropTypes.oneOf(["spinner", "dots", "pulse", "progress"]),
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(["top", "bottom"]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "default", "large"]),
};

export default Loading;
