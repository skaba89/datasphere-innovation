"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");
  const rafRef = useRef<number>(0);

  const checkActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const element = document.getElementById(sectionIds[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return sectionIds[i];
      }
    }
    return "";
  }, [sectionIds, offset]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setActiveId(checkActiveSection());
    });
  }, [checkActiveSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Use rAF for initial check to avoid synchronous setState in effect
    rafRef.current = requestAnimationFrame(() => {
      setActiveId(checkActiveSection());
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, checkActiveSection]);

  return activeId;
}
