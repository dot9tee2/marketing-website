import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useMousePosition } from "../../hooks/useMousePosition";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = ({
  title,
  subtitle,
  className = "",
  buttonText = "Get Started",
  scrollToId, // New prop
}) => {
  const { position } = useMousePosition();
  const [isLoaded, setIsLoaded] = useState(false);

  const heroRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const headingRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgGlowRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const arrowRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const overlayRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const mainTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    mainTl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power3.inOut",
    });

    mainTl.fromTo(
      gridRef.current,
      { opacity: 0 },
      { opacity: 0.15, duration: 2 },
      "-=0.8"
    );

    mainTl.fromTo(
      contentWrapperRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      "-=1.5"
    );

    const splitTitle = new SplitType(headingRef.current, {
      types: "chars, words",
      tagName: "span",
    });

    const headingTl = gsap.timeline();
    headingTl.fromTo(
      splitTitle.words,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.7)",
      }
    );
    headingTl.fromTo(
      splitTitle.chars,
      { opacity: 0.5, scale: 0.9, rotationY: -20 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        stagger: { each: 0.02, from: "random" },
        ease: "sine.out",
      },
      "-=0.4"
    );
    mainTl.add(headingTl, "-=1.2");

    const subtitleTl = gsap.timeline();
    subtitleTl.fromTo(
      subtitleRef.current,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
      }
    );
    subtitleTl.fromTo(
      subtitleRef.current,
      { color: "#FFFFFF" },
      { color: "#8DC63F", duration: 0.4, ease: "power1.in" },
      "-=0.2"
    );
    mainTl.add(subtitleTl, "-=0.8");

    const buttonTl = gsap.timeline();
    buttonTl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" }
    );
    buttonTl.fromTo(
      buttonTextRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4 },
      "-=0.4"
    );
    buttonTl.fromTo(
      arrowRef.current,
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.4 },
      "-=0.2"
    );
    mainTl.add(buttonTl, "-=0.6");

    gsap.to(arrowRef.current, {
      x: 5,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 2,
    });

    const btn = buttonRef.current;
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 20px rgba(141, 198, 63, 0.5)",
      });
      gsap.to(buttonTextRef.current, { x: -3, duration: 0.2 });
      gsap.to(arrowRef.current, { x: 8, duration: 0.2 });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      });
      gsap.to(buttonTextRef.current, { x: 0, duration: 0.2 });
      gsap.to(arrowRef.current, { x: 0, duration: 0.2 });
    });

    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(contentWrapperRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const shapeTl = gsap.timeline();
    shapeTl.fromTo(
      [shape1Ref.current, shape2Ref.current, shape3Ref.current],
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.3)",
      }
    );
    mainTl.add(shapeTl, "-=1.5");

    gsap.to(shape1Ref.current, {
      x: 60,
      y: -40,
      rotation: 15,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    gsap.to(shape2Ref.current, {
      x: -50,
      y: 60,
      rotation: -10,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5,
    });

    gsap.to(shape3Ref.current, {
      x: 40,
      y: 30,
      rotation: 5,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });

    return () => {
      if (splitTitle.chars) splitTitle.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        shape1Ref.current,
        shape2Ref.current,
        shape3Ref.current,
        arrowRef.current,
        buttonRef.current,
        buttonTextRef.current,
        headingRef.current,
        subtitleRef.current,
      ]);
      if (btn) {
        btn.removeEventListener("mouseenter", () => {});
        btn.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  useEffect(() => {
    if (bgGlowRef.current && position.x && position.y) {
      gsap.to(bgGlowRef.current, {
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(141, 198, 63, 0.15) 0%, transparent 15%)`,
        duration: 1.5,
      });
    }
  }, [position]);

  return (
    <section
      ref={heroRef}
      className={`min-h-[90vh] md:min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden ${className}`}
      role="banner"
      aria-label="Hero Section"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-50 transform-gpu"
        aria-hidden="true"
      ></div>
      <div
        ref={bgGlowRef}
        className="absolute inset-0 pointer-events-none z-10 transition-all duration-1000 opacity-50 mix-blend-screen"
        aria-hidden="true"
      ></div>
      <div
        ref={shape1Ref}
        className="absolute w-32 h-32 md:w-40 md:h-40 bg-[#8DC63F]/15 blur-3xl rounded-full -top-10 left-10 z-0"
        aria-hidden="true"
      ></div>
      <div
        ref={shape2Ref}
        className="absolute w-28 h-28 md:w-36 md:h-36 bg-[#8DC63F]/20 blur-3xl rounded-full bottom-10 -right-10 z-0"
        aria-hidden="true"
      ></div>
      <div
        ref={shape3Ref}
        className="absolute w-24 h-24 md:w-32 md:h-32 bg-[#8DC63F]/10 blur-3xl rounded-full top-1/2 right-1/4 z-0"
        aria-hidden="true"
      ></div>
      <div
        ref={gridRef}
        className="absolute inset-0 bg-[linear-gradient(rgba(141,198,63,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(141,198,63,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-5 opacity-0"
        aria-hidden="true"
      ></div>
      <div
        ref={contentWrapperRef}
        className="container mx-auto px-6 relative z-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div ref={headingWrapperRef} className="overflow-hidden mb-6">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              {title}
            </h1>
          </div>
          {subtitle && (
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 opacity-0"
            >
              {subtitle}
            </p>
          )}
          <button
            ref={buttonRef}
            onClick={() => {
              if (scrollToId) {
                const element = document.getElementById(scrollToId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-[#8DC63F] text-black font-bold text-lg shadow-lg transition-all duration-300 ease-out hover:bg-[#9ed455] focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:ring-offset-2 focus:ring-offset-black active:scale-95"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
            <span
              ref={buttonTextRef}
              className="relative z-10 mr-2 transition-transform duration-300"
            >
              {buttonText}
            </span>
            <span
              ref={arrowRef}
              className="relative z-10 inline-block transition-transform duration-300"
            >
              →
            </span>
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#8DC63F]/0 via-[#8DC63F]/20 to-[#8DC63F]/0 opacity-20 blur-md rounded-full z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  scrollToId: PropTypes.string, // Define new prop
};

export default HeroSection;
