import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Games', href: '#games' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.2 }}
    >
      <div
        className={`
          flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500
          ${scrolled
            ? 'bg-black/80 border-white/10 backdrop-blur-xl shadow-2xl shadow-white/5'
            : 'bg-black/40 border-white/5 backdrop-blur-md'
          }
        `}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-2 px-3 shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.img
              src="/logo.png"
              alt="Legion Studios"
              className="w-8 h-8 rounded-full object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 4px rgba(255,255,255,0.2)',
                  '0 0 12px rgba(255,255,255,0.4)',
                  '0 0 4px rgba(255,255,255,0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-sm font-bold text-white hidden sm:inline">Legion</span>
        </motion.a>

        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden px-3 py-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 md:hidden min-w-[180px]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
