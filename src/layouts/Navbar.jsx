import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import PropTypes from "prop-types";

// Memoized NavLink component for better performance
const NavLink = memo(
  ({ to, isActive, isHome, scrolled, children, onClick }) => (
    <Link
      to={to}
      className={`relative ${
        isActive
          ? "text-[#8DC63F]"
          : isHome && !scrolled
            ? "text-white hover:text-[#8DC63F]"
            : "text-gray-300 hover:text-[#8DC63F]"
      } transition-colors`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8DC63F]"
          layoutId="underline"
        />
      )}
    </Link>
  )
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHome: PropTypes.bool.isRequired,
  scrolled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

NavLink.displayName = "NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ];

  const handleScroll = useCallback(() => {
    const triggerHeight = window.innerHeight * 0.1; // Changed from 0.5 to 0.1 for better mobile experience
    setScrolled(window.scrollY > triggerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled && !isOpen ? "translate-y-[-100%]" : "translate-y-0"
      } ${
        isHome && !scrolled
          ? "bg-transparent py-4 md:py-6"
          : "bg-black/95 py-3 md:py-4 shadow-lg"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3"
            aria-label="HMS Marketing - Home"
          >
            <motion.div
              className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full overflow-hidden flex items-center justify-center border-2 border-[#8DC63F] bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo.png"
                alt="HMS Marketing Logo"
                className="object-contain"
                style={{
                  transform: "scale(1)",
                  right: "2px",
                  position: "relative",
                }}
                loading="eager"
                width={80}
                height={80}
              />
            </motion.div>
            <motion.h1
              className="text-lg md:text-2xl font-bold text-[#8DC63F] truncate"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hidden sm:inline">HMS Marketing Solutions</span>
              <span className="sm:hidden">HMS Marketing Solutions</span>
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex space-x-8"
            role="menubar"
            aria-label="Desktop navigation"
          >
            {navLinks.map((link, index) => (
              <motion.span
                key={link.path}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                role="menuitem"
              >
                <NavLink
                  to={link.path}
                  isActive={location.pathname === link.path}
                  isHome={isHome}
                  scrolled={scrolled}
                >
                  {link.title}
                </NavLink>
              </motion.span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8DC63F] hover:text-[#72A730] transition-colors p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-[#8DC63F]/20"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div
                className="flex flex-col space-y-6 py-2"
                role="menubar"
                aria-orientation="vertical"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    role="menuitem"
                    className="text-center"
                  >
                    <NavLink
                      to={link.path}
                      isActive={location.pathname === link.path}
                      isHome={isHome}
                      scrolled={scrolled}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg font-medium">{link.title}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;