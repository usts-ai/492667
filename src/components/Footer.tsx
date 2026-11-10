import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/content';

const footerExplore = [
  { label: 'Produit', href: '#produit' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Coachs', href: '#coachs' },
  { label: 'Parcours', href: '#parcours' },
];

const footerLegal = ['Mentions légales', 'Confidentialité', 'CGU', 'RGPD'];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050A14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(64,224,208,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="font-[Syne] text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              ELITIA
            </a>
            <p className="mt-4 max-w-sm font-[Outfit] text-base leading-relaxed text-white/60">
              Performance sportive augmentée par l&apos;intelligence artificielle.
              Entraînement, nutrition, récupération — un assistant unique.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <p className="mb-4 font-[Outfit] text-xs uppercase tracking-[0.2em] text-[#40E0D0]">
                Explorer
              </p>
              <ul className="space-y-3 font-[Outfit] text-sm text-white/70">
                {footerExplore.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors duration-300 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-[Outfit] text-xs uppercase tracking-[0.2em] text-[#40E0D0]">
                Légal
              </p>
              <ul className="space-y-3 font-[Outfit] text-sm text-white/70">
                {footerLegal.map((item) => (
                  <li key={item}>
                    <a href="#top" className="transition-colors duration-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 font-[Outfit] text-xs uppercase tracking-[0.2em] text-[#40E0D0]">
              Réseaux
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-[Outfit] text-sm text-white/80 transition-colors hover:border-[#40E0D0]/50 hover:text-[#40E0D0]"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="font-[Outfit] text-sm text-white/40">
            © {new Date().getFullYear()} ELITIA — Tous droits réservés.
          </p>
          <motion.p
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text font-[Syne] text-sm tracking-wide text-transparent"
          >
            Prêt pour iOS & Android
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
