'use client';

import { useEffect, useState, useRef } from 'react';

interface Props {
  value: string; // e.g., "9+", "4", "24/7", "100%"
  className?: string;
}

export function AnimatedCounter({ value, className }: Props) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const match = value.match(/\d+/);
    if (!match) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(value);
      return;
    }
    
    const target = parseInt(match[0], 10);
    const suffix = value.replace(match[0], '');
    const prefix = value.substring(0, value.indexOf(match[0]));
    
    let isMounted = true;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        let current = 0;
        const duration = 1200; // 1.2s count up duration
        const stepTime = Math.max(Math.floor(duration / target), 15);
        const timer = setInterval(() => {
          current += Math.ceil(target / (duration / stepTime));
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          if (isMounted) {
            setDisplayValue(`${prefix}${current}${suffix}`);
          }
        }, stepTime);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}
