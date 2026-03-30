import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2.5,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 50,
    suffix: 'M+',
    label: 'YouTube Views',
    description: 'Across Roblox content and animated commissions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: 'K+',
    label: 'Unique Sessions',
    description: 'Players who\'ve experienced our worlds',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: null,
    suffix: '',
    label: 'Indie Studio',
    description: 'Passionate creators building from the ground up',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export function Stats() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group text-center p-10 rounded-2xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-white/20 mb-6 flex justify-center group-hover:text-white/40 transition-colors duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-3">
                {stat.value !== null ? (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                ) : (
                  <span className="text-3xl md:text-4xl">&#9776;</span>
                )}
              </div>
              <div className="text-base font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-sm text-neutral-500 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
