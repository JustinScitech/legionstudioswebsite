import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const skylineY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  const figureX = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20 pointer-events-none" />

      <motion.div className="absolute inset-0" style={{ y: skylineY }}>
        <Cityscape />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x: figureX }}
      >
        <SpiderManSwinging />
      </motion.div>

      <WebLines />

      <motion.div
        className="relative z-30 flex items-center justify-center h-full px-4"
        style={{ y: textY }}
      >
        <div className="text-center">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Forging a{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 pr-[0.15em]">
              LEGION
            </span>
            <br />
            of Worlds on Roblox
          </motion.h2>
          <motion.p
            className="mt-6 text-neutral-500 text-base md:text-lg max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where imagination meets the platform
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function Cityscape() {
  const buildings = [
    { x: 0, w: 55, h: 180 }, { x: 60, w: 30, h: 250 }, { x: 95, w: 48, h: 190 },
    { x: 148, w: 25, h: 310 }, { x: 178, w: 52, h: 220 }, { x: 235, w: 38, h: 280 },
    { x: 278, w: 60, h: 200 }, { x: 343, w: 28, h: 245 }, { x: 376, w: 48, h: 175 },
    { x: 429, w: 32, h: 295 }, { x: 466, w: 55, h: 215 }, { x: 526, w: 38, h: 265 },
    { x: 569, w: 52, h: 195 }, { x: 626, w: 28, h: 345 }, { x: 659, w: 48, h: 235 },
    { x: 712, w: 68, h: 380 }, { x: 785, w: 42, h: 205 }, { x: 832, w: 55, h: 275 },
    { x: 892, w: 32, h: 195 }, { x: 929, w: 48, h: 248 }, { x: 982, w: 38, h: 305 },
    { x: 1025, w: 58, h: 225 }, { x: 1088, w: 42, h: 268 }, { x: 1135, w: 32, h: 185 },
    { x: 1172, w: 52, h: 318 }, { x: 1229, w: 38, h: 238 }, { x: 1272, w: 48, h: 205 },
    { x: 1325, w: 62, h: 285 }, { x: 1392, w: 28, h: 198 }, { x: 1425, w: 15, h: 255 },
  ];

  return (
    <svg
      viewBox="0 0 1440 400"
      className="absolute bottom-0 w-full h-[55%] md:h-[65%]"
      preserveAspectRatio="xMidYMax slice"
    >
      {buildings.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={400 - b.h}
            width={b.w}
            height={b.h}
            fill="white"
            opacity={0.03 + (i % 4) * 0.008}
          />
          {b.h > 220 &&
            Array.from({ length: Math.floor(b.h / 35) }).map((_, j) => (
              <rect
                key={j}
                x={b.x + b.w * 0.25}
                y={400 - b.h + 12 + j * 35}
                width={b.w * 0.12}
                height={3}
                fill="white"
                opacity={0.02}
              />
            ))}
          {b.h > 300 && (
            <line
              x1={b.x + b.w / 2}
              y1={400 - b.h}
              x2={b.x + b.w / 2}
              y2={400 - b.h - 25}
              stroke="white"
              strokeWidth="1"
              opacity="0.04"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function SpiderManSwinging() {
  return (
    <svg viewBox="0 0 400 500" className="w-56 md:w-80 h-auto opacity-[0.1]">
      <g transform="translate(200, 230) rotate(-25)">
        <ellipse cx="0" cy="-48" rx="14" ry="17" fill="white" />
        <rect x="-5" y="-32" width="10" height="10" rx="3" fill="white" />
        <path d="M-15,-22 Q0,-26 15,-22 L13,22 Q0,26 -13,22 Z" fill="white" />
        <path d="M13,-18 L24,-22 L58,-62 L64,-58 L28,-16 L15,-12 Z" fill="white" />
        <circle cx="62" cy="-60" r="5" fill="white" />
        <path d="M-13,-18 L-24,-14 L-48,8 L-44,14 L-22,-6 L-15,-12 Z" fill="white" />
        <circle cx="-46" cy="11" r="4" fill="white" />
        <path d="M9,20 L16,28 L34,74 L28,78 L12,34 L5,24 Z" fill="white" />
        <path d="M-9,20 L-16,28 L-30,62 L-24,66 L-12,34 L-5,24 Z" fill="white" />
        <ellipse cx="32" cy="79" rx="7" ry="3" fill="white" transform="rotate(15, 32, 79)" />
        <ellipse cx="-27" cy="66" rx="6" ry="3" fill="white" transform="rotate(-25, -27, 66)" />
      </g>
      <line x1="262" y1="118" x2="400" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6 10" />
      <line x1="262" y1="118" x2="360" y2="15" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function WebLines() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <line x1="180" y1="0" x2="680" y2="420" stroke="white" strokeWidth="0.5" opacity="0.025" />
        <line x1="480" y1="0" x2="880" y2="520" stroke="white" strokeWidth="0.5" opacity="0.02" />
        <line x1="820" y1="0" x2="580" y2="620" stroke="white" strokeWidth="0.5" opacity="0.025" />
        <line x1="1080" y1="0" x2="720" y2="480" stroke="white" strokeWidth="0.5" opacity="0.02" />
        <line x1="1320" y1="0" x2="920" y2="380" stroke="white" strokeWidth="0.5" opacity="0.025" />
      </svg>
    </div>
  );
}
