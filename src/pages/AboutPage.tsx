import React from 'react';
import { PageId } from '../types';
import { STORE_CONTACT, nutsImg, shopShelvesImg, heroImg, boxImg } from '../data/mockData';
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] text-[#2D231E] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#881326] bg-[#881326]/10 px-3 py-1 rounded-full">
            Notre Histoire & Nos Valeurs
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-stone-900 mt-3 tracking-tight">
            À PROPOS DE MOKA SHOP
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
            Votre boutique en ligne en Tunisie qui simplifie vos courses au quotidien.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              UNE BOUTIQUE PENSÉE POUR VOS BESOINS QUOTIDIENS
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              Fondée à <strong>Sfax</strong>, la boutique <strong>MOKA</strong> est née d'un constat simple : faire ses courses de produits alimentaires et trouver des fruits secs de qualité supérieure ne devrait jamais être une corvée ni coûter une fortune.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              Nous avons rassemblé au même endroit les essentiels du foyer tunisien : <strong>fruits secs sélectionnés avec rigueur (amandes de Sfax, pistaches, dattes royales)</strong>, épicerie salée et sucrée, boissons et gazouz, biscuits pour les pauses gourmandes, jusqu'aux articles d'hygiène et d'entretien pour la maison.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              Notre mission est de réconcilier la convivialité de l'épicerie de quartier avec la praticité moderne du contact en ligne et de la livraison à domicile.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EBE2D5] text-[#3D251E] text-xs font-bold">
                <MapPin className="w-4 h-4 text-[#881326]" />
                <span>Ancré à Sfax, Tunisie</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EBE2D5] text-[#3D251E] text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#881326]" />
                <span>Sélection 100% Goût</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3]">
              <img
                src={nutsImg}
                alt="Fruits secs MOKA Shop à Sfax"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  Le Savoir-Faire Tunisien
                </p>
                <p className="font-display text-2xl font-bold mt-1">
                  Fruits secs & amandes d’excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E8DEC8] mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#881326]">
              Ce qui nous guide
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              NOS QUATRE VALEURS FONDAMENTALES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#881326]/10 text-[#881326] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                1. Qualité & Fraîcheur
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pas de compromis : nous sélectionnons nos arrivages de fruits secs et de denrées auprès de filières de confiance reconnues pour leur sérieux.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                2. Proximité Humaine
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Derrière MOKA, une équipe attentive à l'écoute de chaque client. Nous vous conseillons par téléphone, email ou WhatsApp comme dans votre boutique préférée.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#3D251E]/10 text-[#3D251E] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                3. Prix Compétitifs
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Des tarifs transparents et étudiés pour permettre à toutes les familles de remplir leurs placards sans se ruiner.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                4. Simplicité Absolue
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Une prise de contact directe, des échanges sans complexité technique et une livraison rapide jusqu'à chez vous.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery / Boutique Atmosphere */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#881326]">
                Dans les coulisses
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 mt-1">
                L’ATMOSPHÈRE MOKA SHOP
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm max-w-md">
              Des produits soigneusement emballés, des étagères garnies et un conditionnement respectueux des normes d'hygiène alimentaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#E8DEC8]">
              <img
                src={shopShelvesImg}
                alt="Étagères MOKA Shop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#E8DEC8]">
              <img
                src={boxImg}
                alt="Panier gourmand préparé MOKA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#E8DEC8]">
              <img
                src={heroImg}
                alt="Produits du quotidien et huile d'olive"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-[#3D251E] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FEF08A]">
            UNE QUESTION ? UNE COMMANDE SPÉCIALE ?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Nous répondons avec plaisir à toutes vos sollicitations. Écrivez-nous par formulaire ou contactez-nous directement au {STORE_CONTACT.phoneFormatted}.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-[#881326] hover:bg-[#720E1E] text-white rounded-xl font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer"
          >
            <span>Accéder au formulaire de contact</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
