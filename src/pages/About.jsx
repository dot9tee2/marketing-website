import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaClock,
  FaStar,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import MotionWrapper from "../components/MotionWrapper";
import HeroSection from "../components/HeroSection";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - HMS Marketing Solutions</title>
        <meta
          name="description"
          content="Learn about HMS Marketing's journey, our team, and our commitment to delivering exceptional digital marketing solutions."
        />
      </Helmet>

      <HeroSection
        title="About Us"
        subtitle="Driving digital success through innovation and expertise"
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper
              animation="fadeInUp"
              transition="spring"
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
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionWrapper
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                viewport
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#8DC63F] mb-2">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper
            animation="fadeInUp"
            transition="spring"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from client interactions
              to project execution
            </p>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <MotionWrapper
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                viewport
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#8DC63F]/10 rounded-lg flex items-center justify-center text-[#8DC63F] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionWrapper
            animation="fadeInUp"
            transition="spring"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of milestones that have shaped our growth and success
            </p>
          </MotionWrapper>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <MotionWrapper
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.1}
                viewport
                className="relative flex items-center mb-8 last:mb-0"
              >
                <div className="flex-none w-24 md:w-32 text-right pr-8">
                  <span className="text-lg md:text-xl font-bold text-[#8DC63F]">
                    {item.year}
                  </span>
                </div>
                <div className="flex-none w-4 h-4 rounded-full bg-[#8DC63F] relative">
                  <div className="absolute w-px h-full bg-[#8DC63F]/20 left-1/2 -translate-x-1/2 top-4" />
                </div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
