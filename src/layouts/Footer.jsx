import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const footerRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      footerRefs.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !footerRefs.current.includes(el)) {
      footerRefs.current.push(el);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div ref={addToRefs} className="space-y-4">
            <h3 className="text-2xl font-bold text-[#8DC63F]">
              HMS Marketing Solutions
            </h3>
            <p className="text-gray-400">
              Transforming businesses through innovative marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/thehmsmarketingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://youtube.com/@thehmsmarketingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://linkedin.com/in/thehmsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/thehmsmarketingsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div ref={addToRefs} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/portfolio")}
                  className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div ref={addToRefs} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Digital Marketing
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Social Media Management
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Video Production & Editing
              </li>
              <li className="text-gray-400 hover:text-[#8DC63F] transition-colors duration-300 cursor-pointer">
                Graphic Designing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={addToRefs} className="space-y-4">
            <h4 className="text-xl font-semibold text-[#8DC63F]">Contact Us</h4>
            <div className="space-y-2">
              <a
                href="https://maps.app.goo.gl/rciuCQor5rmPks1t5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 flex items-center cursor-pointer hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaMapMarkerAlt className="mr-2" /> 15AA, DHA Phase4, Lahore,
                Pakistan-74200
              </a>
              <a
                href="tel:+923184187515"
                className="text-gray-400 flex items-center cursor-pointer hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaPhone className="mr-2" /> +92 318 4187515
              </a>
              <a
                href="mailto:info@hmsmarketing.com"
                className="text-gray-400 flex items-center cursor-pointer hover:text-[#8DC63F] transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" /> info@hmsmarketing.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          ref={addToRefs}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} HMS Marketing Solutions. All
            rights reserved.
          </p>
          <p>Created with ♡ by Mehroz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
