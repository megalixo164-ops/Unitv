import React from 'react';
import { useScroll, useSpring, motion } from 'motion/react';

/**
 * Lightweight section wrapper that preserves active compositor animations
 * when scrolling up and down the page.
 */
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

/**
 * Top Scroll Progress Indicator Bar in the official LeandroTV+ rainbow gradient
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 32,
    restDelta: 0.002,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#00A8FF] pointer-events-none"
    />
  );
};
