import React from 'react';
import { motion } from 'motion/react';

interface MotifProps {
  className?: string;
  animate?: boolean;
}

export const DecorativeMotif: React.FC<MotifProps> = ({ className = '', animate = false }) => {
  const content = (
    <g strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Fine gold linework geometric & organic curves */}
      <circle cx="200" cy="200" r="180" strokeDasharray="3 6" opacity="0.6" />
      <circle cx="200" cy="200" r="140" opacity="0.4" />
      <circle cx="200" cy="200" r="90" strokeDasharray="2 4" opacity="0.5" />
      
      {/* Delicate curved botanical petals / ribbons */}
      <path d="M200 20 C240 100, 280 140, 380 200 C280 260, 240 300, 200 380 C160 300, 120 260, 20 200 C120 140, 160 100, 200 20 Z" opacity="0.5" />
      <path d="M72 72 C140 120, 160 160, 200 200 C240 240, 260 280, 328 328" opacity="0.4" />
      <path d="M328 72 C260 120, 240 160, 200 200 C160 240, 140 280, 72 328" opacity="0.4" />
      
      {/* Subtle leaf accent lines */}
      <path d="M200 60 Q220 110 200 160 Q180 110 200 60" opacity="0.6" />
      <path d="M200 240 Q220 290 200 340 Q180 290 200 240" opacity="0.6" />
      <path d="M60 200 Q110 220 160 200 Q110 180 60 200" opacity="0.6" />
      <path d="M240 200 Q290 220 340 200 Q290 180 240 200" opacity="0.6" />

      {/* Delicate center crest mark */}
      <circle cx="200" cy="200" r="6" fill="#C9972B" opacity="0.7" />
    </g>
  );

  if (animate) {
    return (
      <motion.svg
        id="decorative-botanical-motif"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className={`pointer-events-none select-none text-[#C9972B] opacity-15 stroke-current ${className}`}
        aria-hidden="true"
      >
        {content}
      </motion.svg>
    );
  }

  return (
    <svg
      id="decorative-botanical-motif"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-[#C9972B] opacity-15 stroke-current ${className}`}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
};

export const SubtleCornerFlourish: React.FC<MotifProps> = ({ className = '' }) => {
  return (
    <svg
      id="subtle-corner-flourish"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-[#C9972B] opacity-15 stroke-current ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 10 H90 C130 10 150 30 150 70 V150 M10 10 V90 C10 130 30 150 70 150 H150"
        strokeWidth="0.8"
        strokeDasharray="2 4"
      />
      <circle cx="10" cy="10" r="3" fill="#C9972B" />
      <path d="M20 20 Q80 20 80 80 Q20 80 20 20" strokeWidth="0.7" />
    </svg>
  );
};
