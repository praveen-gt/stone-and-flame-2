"use client";

import { useRef, useEffect, useState } from "react";
import clsx from "clsx";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: visible ? "translateY(0)" : "translateY(32px)",
    left: visible ? "translateX(0)" : "translateX(-32px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={clsx(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
