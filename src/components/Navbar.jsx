import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-black shadow-lg py-4"
            : "bg-transparent py-6"
          : "bg-black shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.h1
              className="text-2xl font-bold text-[#8DC63F]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              HMS Marketing
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative ${
                  location.pathname === link.path
                    ? "text-[#8DC63F]"
                    : isHome && !scrolled
                    ? "text-white hover:text-[#8DC63F]"
                    : "text-gray-300 hover:text-[#8DC63F]"
                } transition-colors`}
              >
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.title}
                </motion.span>
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8DC63F]"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8DC63F] hover:text-[#72A730] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-[#8DC63F]/20"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block ${
                        location.pathname === link.path
                          ? "text-[#8DC63F]"
                          : "text-gray-300"
                      } hover:text-[#8DC63F] transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
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
