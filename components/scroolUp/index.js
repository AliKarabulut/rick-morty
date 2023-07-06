"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <AiOutlineArrowUp
          className="fixed cursor-pointer bottom-8 right-4 w-10 h-10 animate-bounce"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default ScrollUpButton;
