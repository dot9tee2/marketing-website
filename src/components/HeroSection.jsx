import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useMousePosition } from "../hooks/useMousePosition";

const HeroSection = ({
  title,
  subtitle,
  className = "",
  "data-aos": dataAos,
  "data-aos-delay": dataAosDelay,
}) => {
  const { position } = useMousePosition();

  return (
    <section
      className={`min-h-screen pt-32 md:pt-40 flex items-center relative bg-black text-white overflow-hidden ${className}`}
      role="banner"
      aria-label="Hero Section"
    >
      {/* Cursor glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(141, 198, 63, 0.15) 0%, transparent 35%)`,
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            data-aos={dataAos}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              data-aos={dataAos}
              data-aos-delay={dataAosDelay}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  "data-aos": PropTypes.string,
  "data-aos-delay": PropTypes.string,
};

export default HeroSection;
