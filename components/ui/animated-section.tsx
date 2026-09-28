"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedSection({ children, className = "", animationType = "scrubFadeUp" }: { children: React.ReactNode, className?: string, animationType?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    if (animationType === "scrubFadeUp") {
      gsap.from(container.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        }
      });
    } else if (animationType === "scale") {
      gsap.from(container.current, {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
          end: "top 50%",
          scrub: 1,
        }
      });
    }
  }, { scope: container });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
