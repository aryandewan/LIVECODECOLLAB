import React, { useState, useRef, useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import gsap from "gsap";

const Pricing = ({ id, title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  const cardRef = useRef(null);

  const handleSwitch = () => {
    setIsChecked((prev) => !prev);
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
    gsap.fromTo(
      toggleRef.current,
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: toggleRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "center bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      cardAnimation.fromTo(
        ".base-card",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0,
        }
      );

      cardAnimation.fromTo(
        ".premium-card",
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 2,
        }
      );

      cardAnimation.fromTo(
        ".enterprise-card",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 4,
        }
      );
    }, cardRef);
  }, []);

  return (
    <div
      id={id}
      ref={cardRef}
      className="min-h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
          <div
            ref={containerRef}
            className="text-3xl md:text-6xl xl:text-7xl font-h1 tracking-wide text-center flex flex-row gap-2"
          >
            {title.split(" ").map((word, index) => (
              <span key={index} className="inline-block animated-word">
                {word}
              </span>
            ))}
          </div>
          <p className="text-[0.6rem] md:text-base opacity-30">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
          <div
            ref={toggleRef}
            className="flex flex-row items-center justify-center gap-2"
          >
            <Label
              className={`text-base md:text-3xl ${isChecked ? "opacity-30" : "opacity-100"}`}
            >
              Monthly
            </Label>
            <Switch onCheckedChange={handleSwitch} />
            <Label
              className={`text-base md:text-3xl ${isChecked ? "opacity-100" : "opacity-30"}`}
            >
              Yearly
            </Label>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:flex md:grid md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-10 xl:w-[60%] w-[80%] md:w-[90%] h-full">
          <div className="flex flex-col gap-4 p-5 xl:p-10 border-2 border-gray-700 rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start base-card">
            <h1 className="text-2xl opacity-50">Base</h1>
            <h1 className="text-5xl font-bold">FREE</h1>
            <p className="text-sm opacity-50">
              For personal use and small projects
            </p>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">1 active collaboration room</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Basic syntax highlighting</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">30-minute session limit/day</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Limited drawing board tools</p>
                </li>
              </ul>
            </div>
            <button className="text-gray-700 p-4 rounded-lg w-full mt-4 text-base xl:text-xl border-2 border-gray-700 hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              Selected Plan
            </button>
          </div>
          <div className="flex flex-col md:col-span-2 md:w-1/2 md:mx-auto xl:mx-0 gap-4 p-5 md:p-10 border-2 border-white shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start premium-card">
            <div className="flex flex-row md:flex-col xl:flex-row items-start justify-between w-full gap-3">
              <h1 className="text-2xl">Premium</h1>
              <div className="text-white p-1 rounded-full border-1 border-white shadow-[0_0_7px_1px_rgba(255,255,255,0.5)]">
                <h1 className="text-[8px] md:text-sm font-bold">
                  MOST POPULAR
                </h1>
              </div>
            </div>
            <h1 className="text-5xl font-bold">
              {isChecked ? "$100" : "$10"}
              <span className="text-sm opacity-50">
                {isChecked ? "/year" : "/month"}
              </span>
            </h1>
            <p className="text-sm opacity-50">For teams & professionals</p>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Unlimited collaboration rooms</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Advanced auto-formatting</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Unlimited drawing board usage</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Customizable themes</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Priority support</p>
                </li>
              </ul>
            </div>
            <button className="bg-white text-black p-4 rounded-lg w-full mt-4 text-base xl:text-xl hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out">
              Upgrade to Premium
            </button>
          </div>
          <div className="flex flex-col md:col-start-2 md:row-start-1 gap-4 p-5 md:p-10 border-2 border-gray-700 rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start enterprise-card">
            <h1 className="text-2xl opacity-50">Enterprise</h1>
            <h1 className="text-5xl font-bold">
              {isChecked ? "$250" : "$25"}
              <span className="text-sm opacity-50">
                {isChecked ? "/year" : "/month"}
              </span>
            </h1>
            <p className="text-sm opacity-50">For large teams & enterprises</p>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Everything in Pro +</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Dedicated servers</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">Team role management</p>
                </li>
                <li className="flex items-center gap-2">
                  <CiCircleCheck className="w-5 h-5" />
                  <p className="md:text-sm">API access for integrations</p>
                </li>
              </ul>
            </div>
            <button className="bg-white text-black p-4 rounded-lg w-full mt-4 text-base xl:text-xl hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out">
              Upgrade to Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
