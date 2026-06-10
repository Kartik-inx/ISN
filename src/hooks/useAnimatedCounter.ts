"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  startOnView = true,
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const startCounting = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = Date.now() + delay;
    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(tick);
  }, [end, duration, delay, hasStarted]);

  useEffect(() => {
    if (!startOnView) {
      startCounting();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startOnView, startCounting]);

  return { count, ref };
}
