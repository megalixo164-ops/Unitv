import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Reusable Scroll-Triggered Reveal Wrapper for Sections & Cards
 * Uses GPU-accelerated transform & opacity for silky-smooth mobile & desktop scrolling.
 */
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.14, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Top Scroll Progress Indicator Bar in the official LeandroTV+ rainbow gradient
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1.5 z-[60] origin-left bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#00A8FF]"
    />
  );
};
