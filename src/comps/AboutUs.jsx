import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AboutUs = ({ id, title }) => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(0, 100px, 0) rotateY(30deg) rotateX(30deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 1,
          ease: "power1.in",
          stagger: 0.05,
        }
      );
    }, containerRef);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const aboutAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: elementRef.current,
          start: "center bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      aboutAnimation.fromTo(
        ".para-container",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".ten-container",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".lines-container",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".five-container",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".dev-container",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".thousand-container",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0.5,
        }
      );

      aboutAnimation.fromTo(
        ".sketches-container",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power1.in",
          stagger: 0.05,
        }
      );
    }, elementRef);
  }, []);

  return (
    <div
      id={id}
      ref={elementRef}
      className="min-h-dvh flex flex-col items-center justify-center xl:justify-start relative overflow-hidden mt-20 lg:mt-0 gap-10"
    >
      <div
        ref={containerRef}
        className="text-6xl md:text-[9rem] lg:text-[12rem] xl:text-[23rem] leading-none font-bold"
      >
        {title.split(" ").map((word, index) => (
          <span key={index} className="inline-block animated-word">
            {word}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full ">
        <div className="md:w-1/2 w-full h-full hidden md:block"></div>
        <div className="md:w-1/2 w-full h-full para-container">
          <p className="text-sm md:text-base xl:text-2xl">
            LiveCodeCollab was built for developers, by developers. Our mission
            is to make real-time collaboration seamless, whether you’re solving
            a complex algorithm, brainstorming with a team, or teaching coding.
            We aim to bridge the gap between logic and visualization by
            integrating real-time coding with an intuitive drawing board.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <div className="flex flex-row w-full md:w-1/2 h-full justify-center items-end">
          <div className="w-1/2 md:w-2/3 h-full ten-container">
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[10rem] leading-none font-bold ">
              10000+
            </h1>
          </div>
          <div className="w-1/2 md:w-1/3 h-full lines-container">
            <p className="text-sm md:text-base xl:text-2xl">
              lines of code written on our platform every day
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full hidden md:block"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <div className="w-1/2 h-full hidden md:block"></div>
        <div className="w-full md:w-1/2 h-full flex flex-row justify-center items-end">
          <div className="w-1/2 h-full five-container">
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] leading-none font-bold">
              500+
            </h1>
          </div>
          <div className="w-1/2 h-full dev-container">
            <p className="text-sm md:text-base xl:text-2xl">
              developers collaborate daily
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <div className="flex flex-row w-full md:w-1/2 h-full justify-center items-end">
          <div className="w-1/2 h-full thousand-container">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[10rem] leading-none font-bold">
              1000+
            </h1>
          </div>
          <div className="w-1/2 h-full sketches-container">
            <p className="text-sm md:text-base xl:text-2xl">
              sketches created to solve coding challenges
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full hidden md:block"></div>
      </div>
    </div>
  );
};
export default AboutUs;
