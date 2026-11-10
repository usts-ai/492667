import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 160]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.35]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80"
          alt="Athlète en entraînement intensif"
          className="h-full w-full object-cover object-center"
          style={{
            transform: `translate(${mouse.x * 0.3}px, ${mouse.y * 0.3}px) scale(1.08)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-[#050A14]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/30 via-transparent to-[#050A14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/80 via-[#050A14]/35 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 font-[Outfit] text-xs uppercase tracking-[0.3em] text-[#40E0D0] md:text-sm"
            >
              Application mobile · Performance · IA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-[Syne] text-[clamp(3.2rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight text-white"
            >
              ELITIA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 max-w-xl font-[Outfit] text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
            >
              L&apos;assistant sportif intelligent qui réunit entraînement, nutrition et
              récupération dans une expérience ultra-personnalisée.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-7 py-3.5 font-[Outfit] text-sm font-semibold text-[#050A14] transition-transform duration-300 hover:scale-[1.03] sm:text-base"
              >
                Découvrir la plateforme
              </a>
              <a
                href="#produit"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-[Outfit] text-sm text-white backdrop-blur-sm transition-colors hover:border-[#40E0D0]/50 hover:text-[#40E0D0] sm:text-base"
              >
                Voir le produit
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <PhoneMockup />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14 flex items-center gap-3 md:mt-16"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1"
          >
            <span className="h-2 w-1 rounded-full bg-[#40E0D0]" />
          </motion.span>
          <span className="font-[Outfit] text-xs uppercase tracking-[0.2em] text-white/45">
            Défiler
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
