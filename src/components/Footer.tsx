import React from 'react';
import { PageId } from '../types';
import { MokaLogo } from './MokaLogo';
import { STORE_CONTACT, CATEGORIES } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D1B15] text-[#EBE2D5] border-t-4 border-[#881326] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <MokaLogo variant="light" />
            <p className="text-stone-300 text-sm leading-relaxed pr-2">
              Votre boutique en ligne en Tunisie qui simplifie vos courses au quotidien. Fruits secs de choix, épicerie fine, boissons et essentiels pour toute la famille.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-wider text-amber-300 font-semibold bg-stone-900/60 px-3 py-1 rounded-md border border-stone-700">
                Qualité · Choix · Prix Malins
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-white font-bold tracking-tight uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#881326]" />
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#881326]" />
                  <span>À Propos de MOKA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#881326]" />
                  <span>Nos Services & Livraison</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#881326]" />
                  <span>Formulaire de Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Nos Rayons */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-white font-bold tracking-tight uppercase">
              Nos Rayons
            </h3>
            <ul className="space-y-2 text-sm text-stone-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#881326]" />
                  <span>{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Coordonnées & Localisation */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-white font-bold tracking-tight uppercase">
              Coordonnées Officielles
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <a
                href={STORE_CONTACT.phoneCallUrl}
                className="flex items-start gap-3 hover:text-amber-300 transition-colors group"
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-stone-400">Téléphone direct</span>
                  <span className="font-semibold text-white group-hover:text-amber-300">
                    {STORE_CONTACT.phoneFormatted} ({STORE_CONTACT.phone})
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${STORE_CONTACT.email}`}
                className="flex items-start gap-3 hover:text-amber-300 transition-colors group"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-stone-400">Email commercial</span>
                  <span className="text-white group-hover:text-amber-300 break-all">
                    {STORE_CONTACT.email}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-stone-400">Siège & Distribution</span>
                  <span className="text-white">Tunisie, Sfax</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-stone-400">Disponibilité</span>
                  <span className="text-white text-xs">{STORE_CONTACT.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} MOKA SHOP. Tous droits réservés. Sfax, Tunisie.
          </p>
          <p className="text-stone-400">
            MOKA — Votre boutique, tout simplement.
          </p>
        </div>
      </div>
    </footer>
  );
};
