import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.4)_0%,_black_70%)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          className="relative inline-block mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
        >
          <img
            src="/logo.png"
            alt="Legion Studios"
            className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover"
          />
          <motion.div
            className="absolute -inset-2 rounded-2xl border border-white/10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          LEGION
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            STUDIOS
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-neutral-400 font-light max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Independent Roblox Game Studio
        </motion.p>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-white/40 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
