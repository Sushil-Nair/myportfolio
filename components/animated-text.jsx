"use client";

import { useState, useEffect } from "react";
import { cn } from "@/libs/utils";

export default function AnimatedText({ texts, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[(currentIndex + 1) % texts.length]);
        setIsAnimating(false);
      }, 500); // Duration of fade out
      
    }, 3000); // Time each text stays visible
    
    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return (
    <span 
      className={cn(
        "inline-block transition-opacity duration-500", 
        isAnimating ? "opacity-0" : "opacity-100",
        className
      )}
    >
      {currentText}
    </span>
  );
}