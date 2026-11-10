import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureShowcase from '../components/FeatureShowcase';
import CoachSection from '../components/CoachSection';
import JourneySection from '../components/JourneySection';
import PhoneMockup from '../components/PhoneMockup';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050A14] text-white antialiased">
      <Header />
      <main>
        <Hero />

        <section id="produit" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80"
              alt="Course en extérieur"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#050A14]/85 to-[#050A14]" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 font-[Outfit] text-xs uppercase tracking-[0.25em] text-[#40E0D0]">
                Produit
              </p>
              <h2 className="font-[Syne] text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Une expérience mobile pensée pour la haute performance
              </h2>
              <p className="mt-5 font-[Outfit] text-base leading-relaxed text-white/65 md:text-lg">
                ELITIA finalise une application React Native / Expo déjà engagée : audit,
                sécurisation, intégrations IA et publication sur les stores. Le fondateur reste
                pilote — nous accélérons la fiabilité et la qualité de lancement.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: 'iOS', label: 'App Store' },
                  { value: 'Android', label: 'Play Store' },
                  { value: 'IA', label: 'Personnalisation' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <p className="font-[Syne] text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
                      {item.value}
                    </p>
                    <p className="mt-1 font-[Outfit] text-xs text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:hidden">
              <PhoneMockup />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative hidden overflow-hidden rounded-[2rem] lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                alt="Salle de sport moderne"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#050A14]/75 p-5 backdrop-blur-md">
                <p className="font-[Outfit] text-xs uppercase tracking-[0.2em] text-[#40E0D0]">
                  Stack
                </p>
                <p className="mt-2 font-[Syne] text-lg font-bold text-white">
                  React Native · Expo · Supabase · PostgreSQL · LLM
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <FeatureShowcase />
        <CoachSection />
        <JourneySection />

        <section id="cta" className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
              alt="Athlète motivé"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#050A14]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/25 via-transparent to-[#40E0D0]/20" />
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Syne] text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Prêt à porter ELITIA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
                jusqu&apos;aux stores
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl font-[Outfit] text-base text-white/70 md:text-lg"
            >
              Audit, sécurisation, finalisation IA et publication iOS / Android — une trajectoire
              claire en trois niveaux : MVP, V1 commercialisable, version complète.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="#top"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-8 py-4 font-[Outfit] text-base font-semibold text-[#050A14] transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Lancer la collaboration
              </a>
              <a
                href="#parcours"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 font-[Outfit] text-base text-white backdrop-blur-sm transition-colors hover:border-[#40E0D0]/50 sm:w-auto"
              >
                Voir le parcours
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
