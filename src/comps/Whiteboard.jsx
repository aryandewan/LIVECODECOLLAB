import React, { useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { CiRedo, CiUndo } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Whiteboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        canvasRef.current.undo();
      }
      if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
        canvasRef.current.redo();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-white">
        <ReactSketchCanvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%" }}
          strokeWidth={2}
          strokeColor="white"
          canvasColor="black"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex flex-row gap-2 p-2 text-white">
        <CiUndo
          size={50}
          className="cursor-pointer"
          onClick={() => canvasRef.current.undo()}
        />
        <CiRedo
          size={50}
          className="cursor-pointer"
          onClick={() => canvasRef.current.redo()}
        />
        <FaHome
          size={50}
          className="cursor-pointer"
          onClick={() => (window.location.href = "/LIVECODECOLLAB")}
        />
      </div>
    </div>
  );
};

export default Whiteboard;
