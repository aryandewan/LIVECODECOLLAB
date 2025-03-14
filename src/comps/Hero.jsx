import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ id }) => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      textRef.current.innerText = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        textRef.current.appendChild(span);
      });

      gsap.fromTo(
        textRef.current.children,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1.5,
          duration: 0.1,
          stagger: 0.1,
          ease: "power2.inOut",
        }
      );

      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div id={id} className="min-h-dvh flex flex-col items-start justify-center">
      <h1 className="xl:text-[12rem] text-4xl md:text-7xl lg:text-9xl font-bold ml-4">
        <span ref={textRef}>
          JOIN THE CODE <br />
          REVOLUTION
        </span>
        <span ref={cursorRef} className="cursor">
          |
        </span>
      </h1>
    </div>
  );
};

export default Hero;
