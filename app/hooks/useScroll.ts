"use client";

import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Check if user reached the bottom
      if (scrollTop + windowHeight >= fullHeight - 5) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isAtEnd;
};
