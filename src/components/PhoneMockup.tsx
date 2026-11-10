import React from 'react';
import { motion } from 'framer-motion';
import { performanceSeries } from '../data/content';

const PhoneMockup: React.FC = () => {
  const max = Math.max(...performanceSeries.map((d) => d.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[260px] sm:w-[280px]"
      style={{ perspective: 1200 }}
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#007BFF]/40 via-[#7B1FA2]/20 to-[#40E0D0]/40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-[#0B1220] shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="relative px-4 pb-5 pt-10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-[Outfit] text-[10px] uppercase tracking-[0.18em] text-[#40E0D0]">
                Aujourd&apos;hui
              </p>
              <p className="font-[Syne] text-lg font-bold text-white">Session HIIT</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-[#40E0D0] font-[Syne] text-sm font-bold text-[#050A14]">
              IA
            </div>
          </div>

          <div className="mb-4 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80"
              alt="Athlète en course"
              className="h-28 w-full object-cover"
            />
          </div>

          <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="mb-2 flex items-end justify-between">
              <p className="font-[Outfit] text-xs text-white/60">Charge hebdo</p>
              <p className="font-[Syne] text-xl font-bold text-white">93</p>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {performanceSeries.map((point, index) => (
                <div key={point.label} className="flex flex-1 flex-col items-center gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(point.value / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index, duration: 0.6, ease: 'easeOut' }}
                    className="w-full rounded-t-sm bg-gradient-to-t from-[#007BFF] to-[#40E0D0]"
                  />
                  <span className="font-[Outfit] text-[8px] text-white/40">{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'kcal', value: '2 140' },
              { label: 'sommeil', value: '7h42' },
              { label: 'focus', value: 'Élevé' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center"
              >
                <p className="font-[Syne] text-sm font-bold text-white">{stat.value}</p>
                <p className="font-[Outfit] text-[9px] uppercase tracking-wider text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
