import React from 'react';
import { motion } from 'framer-motion';
import { coachHighlights } from '../data/content';

const CoachSection: React.FC = () => {
  return (
    <section id="coachs" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 font-[Outfit] text-xs uppercase tracking-[0.25em] text-[#40E0D0]">
              Espace coach
            </p>
            <h2 className="font-[Syne] text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Suivez plusieurs athlètes. Intervenez au bon moment.
            </h2>
          </div>
          <p className="max-w-sm font-[Outfit] text-sm leading-relaxed text-white/55 md:text-base">
            Une interface dédiée pour accompagner, analyser et ajuster les parcours de performance
            de chaque sportif.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coachHighlights.map((coach, index) => (
            <motion.article
              key={coach.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />
              </div>
              <div className="relative -mt-10 px-5 pb-6">
                <div className="rounded-2xl border border-white/10 bg-[#0B1220]/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-[Syne] text-xl font-bold text-white">{coach.name}</h3>
                      <p className="font-[Outfit] text-sm text-white/55">{coach.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-[Syne] text-2xl font-bold text-[#40E0D0]">{coach.athletes}</p>
                      <p className="font-[Outfit] text-[10px] uppercase tracking-wider text-white/40">
                        athlètes
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${55 + coach.athletes}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0]"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
