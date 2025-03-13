import { motion } from "framer-motion";
import PropTypes from "prop-types";

const defaultAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
};

const defaultTransitions = {
  default: { duration: 0.3 },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 300, damping: 20, bounce: 0.5 },
};

const MotionWrapper = ({
  children,
  animation = "fadeIn",
  transition = "default",
  delay = 0,
  duration,
  viewport = false,
  once = true,
  className = "",
  ...props
}) => {
  const selectedAnimation = defaultAnimations[animation];
  let selectedTransition = defaultTransitions[transition];

  if (duration) {
    selectedTransition = { ...selectedTransition, duration };
  }

  if (delay) {
    selectedTransition = { ...selectedTransition, delay };
  }

  const motionProps = {
    ...selectedAnimation,
    transition: selectedTransition,
    ...(viewport
      ? { whileInView: selectedAnimation.animate, viewport: { once } }
      : {}),
    className,
    ...props,
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

MotionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    "fadeIn",
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "fadeInRight",
    "scale",
  ]),
  transition: PropTypes.oneOf(["default", "spring", "bounce"]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  viewport: PropTypes.bool,
  once: PropTypes.bool,
  className: PropTypes.string,
};

export default MotionWrapper;
