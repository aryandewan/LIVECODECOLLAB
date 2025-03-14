import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Features = ({ id, title }) => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

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
          transform: `translate3D(0, 0, 100px) rotateY(30deg) rotateX(30deg)`,
        },
        {
          opacity: 1,
          transform: `translate3D(0, 0, 0) rotateY(0deg) rotateX(0deg)`,
          ease: "power2.inOut",
          stagger: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const gridAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "100 bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      gridAnimation.fromTo(
        ".collab-feature",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 5,
        }
      );

      gridAnimation.fromTo(
        ".board-feature",
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 5,
        }
      );

      gridAnimation.fromTo(
        ".format-feature",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 5,
        }
      );

      gridAnimation.fromTo(
        ".copy-feature",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 5,
        }
      );

      gridAnimation.fromTo(
        ".users-feature",
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 5,
        }
      );
    }, gridRef);
  }, []);

  return (
    <div
      id={id}
      className="min-h-dvh flex flex-col gap-5 xl:gap-10 items-center justify-center mb-20 xl:mb-0 overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
        <div
          ref={containerRef}
          className="text-3xl md:text-6xl xl:text-7xl font-h1 tracking-wide flex flex-row gap-4"
        >
          {title.split(" ").map((word, index) => (
            <span key={index} className="inline-block animated-word">
              {word}
            </span>
          ))}
        </div>
        <h1 className="text-[0.6rem] md:text-base opacity-30">
          Code with your friends in real-time
        </h1>
      </div>
      <div
        ref={gridRef}
        className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 m-7"
      >
        <div className="relative  rounded-xl p-5 md:col-span-2 flex flex-col md:flex-row items-end justify-end xl:justify-center gap-4 min-h-[600px] collab-feature">
          <div className="absolute inset-0 bg-[url('/images/Collab.webp')] bg-cover bg-center grayscale mask-image rounded-xl h-full w-full"></div>
          <div className="relative flex flex-col text-center items-center justify-center z-10 gap-4">
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl xl:text-7xl text-white font-bold">
                REAL TIME CODE
              </span>
              <span className="text-xl md:text-[2.2rem] xl:text-[4.4rem] text-white leading-none font-bold">
                COLLABORATION
              </span>
            </div>
            <h1 className="text-xl xl:text-2xl text-center text-white opacity-60">
              Collaborate on code with teammates in real-time with instant
              updates.
            </h1>
          </div>
        </div>
        <div className="relative rounded-xl p-5 flex flex-col items-end justify-end gap-4 min-h-[600px] board-feature">
          <div className="absolute inset-0 bg-[url('/images/Board.webp')] bg-cover bg-center grayscale mask-image rounded-xl h-full"></div>
          <div className="relative flex flex-col text-center items-center justify-center z-10 gap-4">
            <span className="text-2xl md:text-4xl font-bold">
              LIVE DRAWING BOARD
            </span>
            <h1 className="text-lg xl:text-xl text-center opacity-60">
              Sketch and diagram solutions directly on the platform to solve
              complex logic visually.
            </h1>
          </div>
        </div>
        <div className="relative rounded-xl p-5 md:row-start-2 xl:col-start-4 xl:row-start-1 xl:row-span-2 flex flex-col items-center justify-end gap-4 min-h-[600px] format-feature">
          <div className="absolute inset-0 bg-[url('/images/Format.webp')] bg-cover bg-right grayscale mask-image rounded-xl h-full w-full"></div>
          <div className="relative flex flex-col text-center items-center justify-center z-10 gap-4">
            <span className="text-2xl md:text-3xl xl:text-[2.5rem] font-bold text-white leading-none">
              AUTO FORMATTING
            </span>
            <h1 className="text-lg xl:text-xl text-center text-white opacity-60">
              Improve readability with syntax highlighting and one-click
              auto-formatting.
            </h1>
          </div>
        </div>
        <div className="relative rounded-xl p-5 md:row-start-3 md:col-span-3 xl:col-start-2 xl:col-span-2 xl:row-start-2 xl:row-span-1 flex flex-col items-center justify-end min-h-[600px] users-feature">
          <div className="absolute inset-0 bg-[url('/images/mUsers.webp')] bg-cover bg-center grayscale mask-image rounded-xl h-full w-full"></div>
          <div className="relative flex flex-col md:flex-row text-center items-center justify-center z-10 gap-4">
            <div className="flex flex-col font-bold items-center w-1/3">
              <div className="flex flex-row text-center">
                <span className="text-3xl xl:text-5xl leading-none">
                  MULTI-
                </span>
                <span className="text-3xl xl:text-5xl leading-none">USER</span>
              </div>
              <div className="flex flex-row text-center">
                <span className="text-3xl xl:text-5xl leading-none">
                  EDITING
                </span>
              </div>
            </div>
            <div className="xl:w-2/3">
              <h1 className="text-lg xl:text-2xl">
                Work together seamlessly with multiple collaborators editing the
                same file.
              </h1>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl p-5 md:row-start-2 md:col-start-2 md:col-span-2 xl:col-start-1 xl:col-span-1 xl:row-start-2 flex flex-col gap-4 items-center justify-end min-h-[600px] copy-feature">
          <div className="absolute inset-0 bg-[url('/images/Copy.webp')] bg-cover bg-center grayscale mask-image rounded-xl h-full w-full"></div>
          <div className="relative flex flex-col text-center items-center justify-center z-10 gap-4">
            <div className="flex flex-col">
              <h1 className="text-5xl xl:text-6xl font-bold text-center leading-none">
                COPY CODE
              </h1>
              <h1 className="text-5xl xl:text-6xl font-bold text-center leading-none">
                WITH EASE
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg xl:text-2xl text-center opacity-60">
                Easily copy, save, or share your code snippets.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
