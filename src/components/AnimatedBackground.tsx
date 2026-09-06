import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      id="site-animated-background"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle Warm Ambient Glows in Brand Cream / Gold Tints */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#C9972B]/10 via-[#F6EFE2] to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#5C1A2B]/5 via-[#C9972B]/8 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-[#C9972B]/10 via-[#F6EFE2] to-transparent blur-3xl"
      />

      {/* Floating Animated Botanical Ribbon SVG Top Right */}
      <motion.svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-24 right-4 sm:right-12 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] text-[#C9972B] opacity-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
          <circle cx="250" cy="250" r="210" strokeDasharray="4 8" opacity="0.6" />
          <circle cx="250" cy="250" r="160" opacity="0.4" />
          <circle cx="250" cy="250" r="110" strokeDasharray="3 6" opacity="0.5" />
          
          <path
            d="M250 40 C300 130, 350 180, 460 250 C350 320, 300 370, 250 460 C200 370, 150 320, 40 250 C150 180, 200 130, 250 40 Z"
            opacity="0.5"
          />
          <path
            d="M100 100 C180 160, 200 200, 250 250 C300 300, 320 340, 400 400"
            opacity="0.35"
          />
          <path
            d="M400 100 C320 160, 300 200, 250 250 C200 300, 180 340, 100 400"
            opacity="0.35"
          />
          <circle cx="250" cy="250" r="8" fill="#C9972B" opacity="0.5" />
        </g>
      </motion.svg>

      {/* Floating Animated Botanical Ribbon SVG Bottom Left */}
      <motion.svg
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-10 -left-20 sm:left-6 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] text-[#5C1A2B] opacity-15"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 140, repeat: Infinity, ease: 'linear' },
          scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <g stroke="currentColor" strokeWidth="0.75" strokeLinecap="round">
          <circle cx="225" cy="225" r="190" strokeDasharray="3 7" opacity="0.6" />
          <circle cx="225" cy="225" r="135" opacity="0.4" />
          <path
            d="M225 35 Q260 130 225 225 Q190 130 225 35"
            opacity="0.6"
          />
          <path
            d="M225 225 Q260 320 225 415 Q190 320 225 225"
            opacity="0.6"
          />
          <path
            d="M35 225 Q130 260 225 225 Q130 190 35 225"
            opacity="0.6"
          />
          <path
            d="M225 225 Q320 260 415 225 Q320 190 225 225"
            opacity="0.6"
          />
        </g>
      </motion.svg>

      {/* Subtle Floating Sparkles in Gold */}
      {[
        { top: '15%', left: '10%', delay: 0, duration: 6, size: 14 },
        { top: '28%', right: '12%', delay: 1.5, duration: 7, size: 18 },
        { top: '55%', left: '6%', delay: 2.2, duration: 8, size: 16 },
        { top: '70%', right: '8%', delay: 0.8, duration: 6.5, size: 12 },
        { top: '88%', left: '20%', delay: 3, duration: 7.5, size: 15 },
      ].map((sparkle, idx) => (
        <motion.div
          key={idx}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            width: sparkle.size,
            height: sparkle.size,
          }}
          className="absolute text-[#C9972B]"
          animate={{
            y: [-12, 12, -12],
            opacity: [0.2, 0.65, 0.2],
            scale: [0.85, 1.15, 0.85],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* Soft Waveform Contour Lines */}
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-0 w-full opacity-10 text-[#C9972B]"
      >
        <motion.path
          d="M0 160 C320 280, 720 40, 1080 180 C1260 250, 1380 200, 1440 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{
            d: [
              "M0 160 C320 280, 720 40, 1080 180 C1260 250, 1380 200, 1440 160",
              "M0 140 C360 80, 680 260, 1040 120 C1220 180, 1360 240, 1440 140",
              "M0 160 C320 280, 720 40, 1080 180 C1260 250, 1380 200, 1440 160",
            ],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
};
