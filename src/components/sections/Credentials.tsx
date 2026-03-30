import { motion } from 'framer-motion';

const items = [
  {
    key: 'microsoft',
    title: 'Microsoft Game Studios',
    description: 'Experience shipping games and tools alongside Microsoft’s game teams.',
    logo: '/logos/microsoft.svg',
    logoClass: 'h-10 w-10 md:h-12 md:w-12',
    href: null as string | null,
  },
  {
    key: 'tesla',
    title: 'Tesla engineers',
    description: 'Background working with engineers who build at Tesla scale.',
    logo: '/logos/tesla.svg',
    logoClass: 'h-9 w-9 md:h-11 md:w-11',
    href: null,
  },
  {
    key: 'voldex',
    title: 'Roblox · Voldex · Driving Empire',
    description:
      'Contributions tied to Voldex’s Driving Empire — a flagship Roblox racing experience.',
    logo: '/logos/roblox.svg',
    logoClass: 'h-10 w-10 md:h-12 md:w-12',
    href: 'https://www.roblox.com/games/3351674303/Driving-Empire-Car-Racing',
  },
  {
    key: 'waterloo',
    title: 'University of Waterloo',
    description: 'Team members who studied at Canada’s leading tech university.',
    logo: '/logos/uwaterloo.png',
    logoClass: 'h-16 w-16 md:h-20 md:w-20',
    href: null,
  },
  {
    key: 'uoft',
    title: 'University of Toronto',
    description: 'Students and alumni from Canada’s largest research university.',
    logo: '/logos/uoft.png',
    logoClass: 'h-16 w-16 md:h-20 md:w-20',
    href: null,
  },
] as const;

export function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Where our team comes from
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Legion Studios is shaped by developers with roots at{' '}
            <span className="text-neutral-300">Microsoft Game Studios</span>,{' '}
            <span className="text-neutral-300">Tesla</span>,{' '}
            <span className="text-neutral-300">Roblox’s Voldex studio</span> (Driving Empire), and as{' '}
            <span className="text-neutral-300">students</span> from the{' '}
            <span className="text-neutral-300">University of Waterloo</span> and the{' '}
            <span className="text-neutral-300">University of Toronto</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-center min-h-[5.5rem] md:min-h-[6rem] mb-5">
                  <img
                    src={item.logo}
                    alt=""
                    className={`object-contain opacity-95 ${item.logoClass}`}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                {item.href && (
                  <span className="inline-block mt-4 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors">
                    Open on Roblox →
                  </span>
                )}
              </>
            );

            const cardClass =
              'block rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-7 text-center transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] h-full';

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={item.href ? 'group' : ''}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} cursor-pointer`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
