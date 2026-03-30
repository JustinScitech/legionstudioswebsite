import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Building Worlds That Inspire
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At Legion Studios, every game begins with a vision &mdash; to create
            immersive experiences that resonate with players around the globe.
            We're not just developing games; we're crafting universes where
            creativity knows no bounds and every player can become part of
            something extraordinary.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.015] text-left hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Original Concepts</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              From the ground up, we design unique gameplay experiences that push
              the boundaries of what's possible on Roblox.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.015] text-left hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reimagined Classics</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              We take beloved franchises and bring them to life on Roblox with
              fresh mechanics and faithful attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
