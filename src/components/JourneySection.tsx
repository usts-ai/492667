import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { journeySteps } from '../data/content';

const JourneySection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="parcours" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,31,162,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-3 font-[Outfit] text-xs uppercase tracking-[0.25em] text-[#40E0D0]">
            Parcours de finalisation
          </p>
          <h2 className="font-[Syne] text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            De l&apos;audit à la publication stores
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible">
            {journeySteps.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`min-w-[200px] rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? 'border-[#40E0D0]/40 bg-white/[0.06]'
                      : 'border-white/10 bg-transparent hover:border-white/25'
                  }`}
                >
                  <span className="font-[Outfit] text-xs tracking-[0.2em] text-[#40E0D0]">
                    {item.step}
                  </span>
                  <p className="mt-1 font-[Syne] text-xl font-bold text-white">{item.title}</p>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#07101F] p-8 lg:col-span-8 lg:min-h-[360px] lg:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#007BFF]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-[#40E0D0]/15 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                transition={{ duration: 0.45 }}
                className="relative flex h-full flex-col justify-between"
              >
                <div>
                  <p className="font-[Outfit] text-sm uppercase tracking-[0.25em] text-white/40">
                    Étape {journeySteps[active].step}
                  </p>
                  <h3 className="mt-4 font-[Syne] text-4xl font-extrabold text-white md:text-5xl">
                    {journeySteps[active].title}
                  </h3>
                  <p className="mt-5 max-w-lg font-[Outfit] text-lg leading-relaxed text-white/65">
                    {journeySteps[active].text}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2">
                  {journeySteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === active
                          ? 'w-10 bg-gradient-to-r from-[#007BFF] to-[#40E0D0]'
                          : 'w-3 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
