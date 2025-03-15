import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaClock,
  FaStar,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import MotionWrapper from "../components/MotionWrapper";
import HeroSection from "../components/HeroSection";
import SEO from "../components/SEO";
import LazyImage from "../components/LazyImage";
import "./about.css";

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200, 500], [1, 0.8, 0.6]);

  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [valuesRef, valuesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [teamRef, teamInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Team Members" },
  ];

  const values = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      description:
        "We stay ahead of digital trends, bringing cutting-edge solutions to our clients.",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Partnership",
      description:
        "We build lasting relationships, treating our clients' success as our own.",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that drive business growth.",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaboration",
      description:
        "We work closely with our clients, ensuring their vision guides our strategy.",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Efficiency",
      description:
        "We optimize processes to deliver high-quality results on time and within budget.",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy to execution.",
    },
  ];

  const team = [
    {
      name: "Hafiz M. Saqib",
      role: "CEO & Founder",
      image: "/images/team/john-smith.jpeg",
      bio: "15+ years of experience in digital marketing and business strategy.",
      social: {
        linkedin: "https://linkedin.com/in/john-smith",
        twitter: "https://twitter.com/john-smith",
      },
    },
    {
      name: "Hafiz M. Saqib",
      role: "Creative Director",
      image: "/images/team/sarah-johnson.jpeg",
      bio: "Award-winning creative director with expertise in brand development.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarah-johnson",
      },
    },
    {
      name: "Hafiz M. Saqib",
      role: "Technical Lead",
      image: "/images/team/michael-chen.jpeg",
      bio: "Full-stack developer with a passion for innovative solutions.",
      social: {
        linkedin: "https://linkedin.com/in/michael-chen",
        twitter: "https://twitter.com/michael-chen",
      },
    },
    {
      name: "Hafiz M. Saqib",
      role: "Marketing Strategist",
      image: "/images/team/emma-davis.jpeg",
      bio: "Data-driven strategist specializing in growth marketing.",
      social: {
        linkedin: "https://linkedin.com/in/emma-davis",
        twitter: "https://twitter.com/emma-davis",
      },
    },
  ];

  const timeline = [
    {
      year: "2013",
      title: "Company Founded",
      description:
        "HMS Marketing was established with a vision to transform digital marketing.",
    },
    {
      year: "2015",
      title: "Digital Innovation Award",
      description:
        "Recognized for groundbreaking digital marketing strategies and results.",
    },
    {
      year: "2017",
      title: "Global Expansion",
      description:
        "Expanded operations to serve clients across multiple countries.",
    },
    {
      year: "2019",
      title: "Tech Integration",
      description:
        "Implemented advanced AI and automation solutions for enhanced performance.",
    },
    {
      year: "2021",
      title: "Industry Leadership",
      description:
        "Became a leading voice in digital marketing innovation and strategy.",
    },
    {
      year: "2023",
      title: "Sustainable Growth",
      description:
        "Achieved milestone of 500+ successful projects while maintaining excellence.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HMS Marketing Solutions",
    description:
      "Leading digital marketing agency specializing in innovative solutions",
    url: "https://hmsmarketing.com",
    logo: "https://hmsmarketing.com/images/logo.png",
    foundingDate: "2013",
    numberOfEmployees: "50+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15AA, DHA Phase4",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "74200",
      addressCountry: "PK",
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const rotateAnimation = {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us"
        description="Learn about HMS Marketing's journey, our team, and our commitment to delivering exceptional digital marketing solutions."
        keywords="digital marketing, marketing agency, HMS Marketing, about us, team, company history"
        image="/images/logo.png"
        url="https://hmsmarketing.com/about"
        schema={schema}
      />

      <HeroSection
        title="About Us"
        subtitle="Driving digital success through innovation and expertise"
      />

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden" ref={missionRef}>
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#8DC63F]/10"
          style={{ y: y1, opacity }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#8DC63F]/5"
          style={{ y: y2, opacity }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At HMS Marketing, we're dedicated to transforming businesses
                through innovative digital solutions. Our mission is to deliver
                exceptional results that drive growth, enhance brand presence,
                and create lasting success for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#8DC63F]/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "400% 400%",
            backgroundImage:
              "radial-gradient(circle, rgba(141, 198, 63, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#8DC63F] mb-2"
                  animate={statsInView ? { scale: [0.5, 1.2, 1] } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from client interactions
              to project execution
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-16 h-16 bg-[#8DC63F]/10 rounded-lg flex items-center justify-center text-[#8DC63F] mb-6">
                  <motion.div animate={pulseAnimation}>{value.icon}</motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" ref={teamRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {team.map((member, index) => {
              const [isFlipped, setIsFlipped] = useState(false);

              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[400px] team-card"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="relative w-full h-full perspective-1000">
                    <motion.div
                      className="relative w-full h-full"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front of card */}
                      <div
                        className="absolute w-full h-full backface-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="relative h-64 overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <LazyImage
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-[#8DC63F] font-medium mb-3">
                            {member.role}
                          </p>
                          <p className="text-gray-500 text-sm italic">
                            Click to learn more
                          </p>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="absolute w-full h-full backface-hidden bg-[#8DC63F]/10 p-6 flex flex-col justify-center"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {member.name}
                        </h3>
                        <p className="text-[#8DC63F] font-medium mb-4">
                          {member.role}
                        </p>
                        <p className="text-gray-600 mb-6">{member.bio}</p>
                        <div className="flex space-x-4 justify-center mt-auto">
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#8DC63F] transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaLinkedin className="text-2xl" />
                          </motion.a>
                          <motion.a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#8DC63F] transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTwitter className="text-2xl" />
                          </motion.a>
                        </div>
                        <p className="text-gray-500 text-sm italic mt-4 text-center">
                          Click to flip back
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of milestones that have shaped our growth and success
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center mb-8 last:mb-0"
              >
                <div className="flex-none w-24 md:w-32 text-right pr-8">
                  <span className="text-lg md:text-xl font-bold text-[#8DC63F]">
                    {item.year}
                  </span>
                </div>
                <motion.div
                  className="flex-none w-4 h-4 rounded-full bg-[#8DC63F] relative timeline-dot"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                  animate={pulseAnimation}
                >
                  <div className="absolute w-px h-full bg-[#8DC63F]/20 left-1/2 -translate-x-1/2 top-4" />
                </motion.div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
