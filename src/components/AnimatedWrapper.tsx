'use client';
import type { ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';

interface AnimatedWrapperProps {
  children: ReactNode;
  animationType?: AnimationType;
  className?: string;
  delay?: string; 
  duration?: string;
  threshold?: number;
  once?: boolean; 
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animationType = 'fade-up',
  className,
  delay = 'delay-0',
  duration = 'duration-700',
  threshold = 0.1,
  once = true,
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
             setIsVisible(false); 
          }
        }
      },
      { threshold } 
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'fade-in': return 'opacity-0';
        case 'fade-up': return 'opacity-0 translate-y-8';
        case 'slide-in-left': return 'opacity-0 -translate-x-12';
        case 'slide-in-right': return 'opacity-0 translate-x-12';
        case 'scale-up': return 'opacity-0 scale-90';
        default: return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all ease-out',
        duration,
        delay,
        getAnimationClasses(),
        className
      )}
    >
      {children}
    </Component>
  );
};
