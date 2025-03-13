import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold text-[#8DC63F]">HMS Marketing</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/portfolio")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Digital Marketing
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Content Strategy
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Brand Development
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Social Media Management
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                SEO Optimization
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-gray-400">123 Marketing Street</p>
              <p className="text-gray-400">Business District, BZ 12345</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@hmsmarketing.com</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} HMS Marketing Solutions. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
