import { motion } from 'framer-motion';
import type { Game } from '../../types';

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.a
      href={game.gameUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-white/15 group-hover:bg-neutral-900">
        <div className="aspect-square relative overflow-hidden bg-neutral-800">
          {game.thumbnailUrl ? (
            <img
              src={game.thumbnailUrl}
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 gap-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h.01M10 12h.01" />
                <path d="M15 10l2 2-2 2" />
              </svg>
              <span className="text-white/20 text-sm font-medium">{game.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors truncate">
            {game.name}
          </h3>
          {game.placeVisits > 0 && (
            <p className="text-sm text-neutral-500 mt-1">
              {game.placeVisits.toLocaleString()} visits
            </p>
          )}
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
            Play Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
