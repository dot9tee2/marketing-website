/**
 * Application-wide constants
 */

// Navigation links
export const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

// Company information
export const COMPANY_INFO = {
  name: "HMS Marketing",
  address: "123 Marketing St, Digital City",
  phone: "+1 (555) 123-4567",
  email: "info@hmsmarketing.com",
  socialMedia: {
    facebook: "https://facebook.com/hmsmarketing",
    twitter: "https://twitter.com/hmsmarketing",
    instagram: "https://instagram.com/hmsmarketing",
    linkedin: "https://linkedin.com/company/hmsmarketing",
  },
};

// Services offered
export const SERVICES = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies tailored to your business goals.",
    icon: "MdOutlineRocketLaunch",
  },
  {
    id: "brand-development",
    title: "Brand Development",
    description: "Create a powerful brand identity that resonates with your target audience.",
    icon: "MdBrandingWatermark",
  },
  {
    id: "campaign-management",
    title: "Campaign Management",
    description: "Strategic planning and execution of marketing campaigns across platforms.",
    icon: "MdCampaign",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing performance.",
    icon: "FaChartLine",
  },
  {
    id: "consultation",
    title: "Marketing Consultation",
    description: "Expert advice to help you navigate the complex marketing landscape.",
    icon: "BsChatDots",
  },
];

// Form field validation rules
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  phone: {
    required: false,
    pattern: /^\+?[\d\s-]{10,}$/,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.43, 0.13, 0.23, 0.96] 
      } 
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
}; 