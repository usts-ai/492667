import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { pillars } from '../data/content';

const FeatureShowcase: React.FC = () => {
  const [active, setActive] = useState(pillars[0].id);
  const current = pillars.find((p) => p.id === active) ?? pillars[0];

  return (
    <section id="fonctionnalites" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(0,123,255,0.12),_transparent_40%),radial-gradient(circle_at_80%_60%,_rgba(64,224,208,0.1),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-[Outfit] text-xs uppercase tracking-[0.25em] text-[#40E0D0]">
            Fonctionnalités
          </p>
          <h2 className="font-[Syne] text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Quatre piliers.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
              Un assistant unique.
            </span>
          </h2>
        </motion.div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none md:flex-wrap md:overflow-visible">
          {pillars.map((pillar) => {
            const isActive = pillar.id === active;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActive(pillar.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 font-[Outfit] text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#007BFF] to-[#40E0D0] font-semibold text-[#050A14]'
                    : 'border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {pillar.title}
              </button>
            );
          })}
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-media'}
              initial={{ opacity: 0, scale: 0.97, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[280px] overflow-hidden rounded-[2rem] lg:col-span-7 lg:min-h-[420px]"
            >
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/35 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="font-[Outfit] text-sm text-[#40E0D0]">{current.subtitle}</p>
                <h3 className="mt-1 font-[Syne] text-3xl font-bold text-white md:text-4xl">
                  {current.title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-panel'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8 lg:col-span-5"
            >
              <div>
                <p className="font-[Outfit] text-base leading-relaxed text-white/70 md:text-lg">
                  {current.description}
                </p>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <motion.p
                  key={current.metric}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-[Syne] text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] md:text-6xl"
                >
                  {current.metric}
                </motion.p>
                <p className="mt-2 font-[Outfit] text-sm uppercase tracking-[0.18em] text-white/45">
                  {current.metricLabel}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
