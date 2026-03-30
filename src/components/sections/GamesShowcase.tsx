import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useRobloxGames } from '../../hooks/useRobloxGames';
import { GameCard } from '../ui/GameCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function GamesShowcase() {
  const { games, loading } = useRobloxGames();

  return (
    <section id="games" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            A Standard of Excellence
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We've built our name on delivering standout Roblox experiences that
            players remember. From original concepts to reimagined fan-favorites
            &mdash; we bring craft and passion to every project we touch.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.2, spaceBetween: 28 },
            }}
            className="games-swiper"
          >
            {games.map((game, i) => (
              <SwiperSlide key={game.id}>
                <GameCard game={game} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
