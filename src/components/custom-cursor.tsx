"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Trail spring with different config
  const trailXSpring = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const trailYSpring = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-indigo pointer-events-none z-9999 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "#06b6d4" : "#6366f1",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-indigo/50 pointer-events-none z-9998"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
          borderColor: isHovering ? "#06b6d4" : "#6366f1",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-indigo/20 pointer-events-none z-9997"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
