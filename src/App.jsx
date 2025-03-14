import React, { useState, useEffect } from "react";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import NavList from "./comps/NavList";
import Features from "./comps/Features";
import Pricing from "./comps/Pricing";
import ContactUs from "./comps/ContactUs";
import AboutUs from "./comps/AboutUs";
import CodeEditor from "./comps/CodeEditor";
import TryMe from "./comps/TryMe";
import Whiteboard from "./comps/Whiteboard";
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [mode, setMode] = useState("main");

  const handleNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleNavClose = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <main className="bg-black text-white">
      <Header
        isNavOpen={isNavOpen}
        handleNavOpen={handleNavOpen}
        handleModeChange={handleModeChange}
        mode={mode}
      />

      {/* Conditionally render full-screen CodeEditor or Whiteboard */}
      {mode === "code" && <CodeEditor mode={mode} />}
      {mode === "draw" && (
        <Whiteboard mode={mode} handleModeChange={handleModeChange} />
      )}

      {/* Show the main website only if mode is "main" */}
      {mode === "main" && (
        <>
          {!isXL && (
            <NavList
              containerClass={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
                isNavOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
              handleNavClose={handleNavClose}
              isNavOpen={isNavOpen}
            />
          )}
          <Hero id="hero" />
          <Features id="features" title="UNREAL CAPABILITIES" />
          <Pricing id="pricing" title="SIMPLE TRANSPARENT PRICING" />
          <TryMe
            id="try me"
            handleModeChange={handleModeChange}
            title="TRY ME"
          />
          <AboutUs id="about us" title="ABOUT US" />
          <ContactUs id="contact us" />
        </>
      )}
    </main>
  );
};

export default App;
