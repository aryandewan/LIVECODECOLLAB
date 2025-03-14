import React, { useState, useRef, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import gsap from "gsap";

const TryMe = ({ id, handleModeChange, title }) => {
  const [isCodeHover, setIsCodeHover] = useState(false);
  const [isDrawHover, setIsDrawHover] = useState(false);
  const containerRef = useRef(null);
  const codeRef = useRef(null);

  const handleCodeHover = () => {
    setIsCodeHover((prev) => !prev);
  };

  const handleDrawHover = () => {
    setIsDrawHover((prev) => !prev);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(0, 0, 100px) rotateY(30deg) rotateX(30deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.05,
        }
      );
    }, containerRef);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const codeAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: codeRef.current,
          start: "top bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      codeAnimation.fromTo(
        ".code-container",
        { opacity: 0, xPercent: -100 },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power1.in",
          stagger: 0.05,
        }
      );

      codeAnimation.fromTo(
        ".draw-container",
        { opacity: 0, xPercent: 100 },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power1.in",
          stagger: 0.05,
        }
      );
    }, codeRef);
  }, []);

  return (
    <div
      id={id}
      ref={codeRef}
      className="w-full min-h-dvh flex flex-col justify-center items-center gap-4 mt-20 lg:mt-0 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="text-7xl font-h1 tracking-wide flex flex-row gap-2"
      >
        {title.split(" ").map((word, index) => (
          <span key={index} className="inline-block animated-word">
            {word}
          </span>
        ))}
      </div>
      <p className="text-sm opacity-30">
        Try out our platform with a free trial.
      </p>
      <div className="w-full h-full flex flex-col lg:flex-row gap-4 p-4">
        <div className="w-full lg:w-1/2 h-[800px] relative overflow-hidden rounded-xl code-container">
          <div
            className={`absolute inset-0 bg-[url('/images/Code.png')] bg-cover bg-left grayscale mask-image rounded-xl h-full w-full ${isCodeHover ? "scale-105" : ""} transition-all duration-300 ease-in-out`}
          ></div>
          <div className="relative h-full flex flex-col items-start justify-end gap-4 z-10">
            <h1
              className="text-6xl lg:text-9xl font-h1 tracking-wide cursor-pointer flex items-center gap-2"
              onMouseEnter={handleCodeHover}
              onMouseLeave={handleCodeHover}
              onClick={() => handleModeChange("code")}
            >
              CODE
              <FaAngleDoubleRight
                className={`inline-block ${isCodeHover ? "translate-x-0" : "-translate-x-full"} ${isCodeHover ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out`}
              />
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[800px] relative overflow-hidden rounded-xl draw-container">
          <div
            className={`absolute inset-0 bg-[url('/images/Draw.png')] bg-cover bg-center grayscale mask-image rounded-xl h-full w-full ${isDrawHover ? "scale-105" : ""} transition-all duration-300 ease-in-out`}
          ></div>
          <div className="relative h-full flex flex-col items-start justify-end gap-4 z-10">
            <h1
              className="text-6xl lg:text-9xl font-h1 tracking-wide cursor-pointer flex items-center gap-2"
              onMouseEnter={handleDrawHover}
              onMouseLeave={handleDrawHover}
              onClick={() => handleModeChange("draw")}
            >
              DRAW
              <FaAngleDoubleRight
                className={`inline-block ${isDrawHover ? "translate-x-0" : "-translate-x-full"} ${isDrawHover ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out`}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TryMe;
