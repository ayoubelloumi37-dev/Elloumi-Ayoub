import React, { useState } from 'react';
import { PageId } from '../types';
import {
  CATEGORIES,
  FEATURED_PRODUCTS,
  SERVICES,
  TESTIMONIALS,
  STORE_CONTACT,
  heroImg,
  nutsImg,
  shopShelvesImg,
  boxImg,
} from '../data/mockData';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Sparkles,
  ShoppingBag,
  Star,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, subject?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#FAF7F2] text-[#2D231E]">
      {/* =========================================================================
          HERO SECTION (Editorial Bistey & MOKA Style)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8DEC8]">
        {/* Subtle decorative background warmth */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#881326]/10 text-[#881326] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Le marché chez vous · Sfax, Tunisie</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2D1B15] leading-[0.95] text-balance">
                LE QUOTIDIEN A MEILLEUR GOÛT.
              </h1>

              <p className="text-lg sm:text-xl text-stone-700 font-medium leading-relaxed max-w-2xl">
                Bienvenue chez <strong className="text-[#881326]">MOKA Shop</strong>. Les essentiels de la maison, les meilleurs fruits secs et les saveurs d'ici. Votre marché, plus simple à chaque commande.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-4 rounded-xl bg-[#881326] hover:bg-[#720E1E] text-white text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Passer une commande / Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={STORE_CONTACT.phoneCallUrl}
                  className="px-6 py-4 rounded-xl bg-[#EBE2D5] hover:bg-[#DDD3C4] text-[#3D251E] text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#DDD3C4]"
                >
                  <Phone className="w-4 h-4 text-[#881326]" />
                  <span>{STORE_CONTACT.phoneFormatted}</span>
                </a>
              </div>

              {/* Trust Indicators / Badges */}
              <div className="pt-6 border-t border-[#E8DEC8] grid grid-cols-3 gap-4 max-w-lg">
                <div className="space-y-0.5">
                  <span className="block text-xl font-bold font-display text-[#881326]">100% Frais</span>
                  <span className="block text-xs text-stone-600">Fruits secs & terroir</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-xl font-bold font-display text-[#881326]">Sfax & Tunisie</span>
                  <span className="block text-xs text-stone-600">Livraison suivie</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-xl font-bold font-display text-[#881326]">Prix Justes</span>
                  <span className="block text-xs text-stone-600">Offres régulières</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Hero Image Card (Inspired by Bistey & MOKA Mobile) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/3] lg:aspect-square">
                <img
                  src={heroImg}
                  alt="MOKA Shop Sélection Gourmande et Fruits Secs à Sfax"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 block">
                      Sélection MOKA Shop
                    </span>
                    <p className="font-display text-xl font-bold">
                      À portée de main.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#881326] text-xs font-bold uppercase tracking-wider">
                    Sfax · Tunisie
                  </span>
                </div>
              </div>

              {/* Decorative Floating Sticker */}
              <div className="absolute -bottom-5 -left-5 bg-[#3D251E] text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-stone-700">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold">
                  ★ 5.0
                </div>
                <div className="text-xs">
                  <p className="font-bold">Clients satisfaits</p>
                  <p className="text-stone-300">À Sfax & partout en Tunisie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RAYONS VEDETTES & CATALOGUE VITRINE (Bistey Cards Style)
          ========================================================================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#881326] bg-[#881326]/10 px-3 py-1 rounded-full">
              Catalogue MOKA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2D1B15] mt-2 tracking-tight">
              NOS RAYONS ET PRODUITS PHARES
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Fruits secs sélectionnés, épicerie fine, boissons fraîches et indispensables pour la famille.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold text-[#881326] hover:text-[#720E1E] transition-colors cursor-pointer group"
          >
            <span>Commander ou demander un devis</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Segmented Control (Interactive functional tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#881326] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-[#EBE2D5] border border-stone-200'
            }`}
          >
            Tous les rayons ({FEATURED_PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#881326] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-[#EBE2D5] border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (Inspired by Bistey's clean beige cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E8DEC8] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#881326]/40 transition-all duration-300 group"
            >
              {/* Image Container (65% of card focus) */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA] cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                {product.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#881326] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-xs">
                    Coup de Cœur
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span>{product.origin}</span>
                    <span>{product.packaging}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-stone-900 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E8DC]">
                  <p className="text-xs font-semibold text-[#881326] mb-3">
                    {product.priceEstimate}
                  </p>

                  <button
                    onClick={() => onNavigate('contact', product.name)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#3D251E] hover:bg-[#881326] text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Demander ce produit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL SPLIT SECTION: "LE MARCHÉ À PORTÉE DE MAIN"
          ========================================================================= */}
      <section className="bg-[#3D251E] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border-4 border-stone-700 shadow-2xl aspect-[4/3]">
                <img
                  src={shopShelvesImg}
                  alt="Rayons épicerie MOKA Shop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full">
                Notre Philosophie
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                VOTRE BOUTIQUE, TOUT SIMPLEMENT.
              </h2>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                Chez MOKA Shop, nous avons pensé chaque rayon pour répondre aux attentes des foyers à Sfax et en Tunisie : des fruits secs d’une fraîcheur remarquable, des produits d’épicerie sélectionnés chez les meilleurs producteurs et des prix justes toute l'année.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#881326] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Sélection Rigoureuse</h4>
                    <p className="text-xs text-stone-300">
                      Chaque produit est goûté, contrôlé et validé pour garantir une fraîcheur optimale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#881326] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Contact & Commande Faciles</h4>
                    <p className="text-xs text-stone-300">
                      Remplissez notre formulaire ou contactez-nous directement par téléphone ou WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#881326] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Livraison Locale & Tunisie</h4>
                    <p className="text-xs text-stone-300">
                      Nous vous livrons à domicile ou sur votre lieu de travail à Sfax avec soin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-900 rounded-xl font-bold text-sm tracking-wide transition-colors cursor-pointer"
                >
                  Découvrir notre histoire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LES 5 SERVICES MOKA (Résumé d'impact)
          ========================================================================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#881326] bg-[#881326]/10 px-3 py-1 rounded-full">
            Nos Engagements
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 mt-2 tracking-tight">
            LES SERVICES MOKA SHOP
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Conçus pour rendre vos courses agréables, économiques et sans tracas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DEC8] hover:border-[#881326] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#881326] block mb-3">
                  0{index + 1}.
                </span>
                <h3 className="font-display text-lg font-bold text-stone-900 leading-snug">
                  {serv.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {serv.subtitle}
                </p>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="mt-6 text-xs font-bold text-[#881326] hover:text-[#720E1E] flex items-center gap-1 cursor-pointer pt-3 border-t border-stone-100"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          AVIS & CONFIANCE (Style Bistey Testimonial)
          ========================================================================= */}
      <section className="bg-[#EBE2D5] py-16 lg:py-20 border-y border-[#DDD3C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              APPROUVÉ PAR NOS CLIENTS À SFAX
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Le retour authentique de nos clients sur la qualité des produits et le service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#DDD3C4] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-stone-100">
                  <p className="font-bold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BANNER CTA CONVERSION FINALE (Contact Lead Capture Callout)
          ========================================================================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#881326] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full">
              Prêt à commander ?
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              FAITES VOS COURSES EN TOUTE SIMPLICITÉ CHEZ MOKA SHOP.
            </h2>
            <p className="text-stone-200 text-base sm:text-lg leading-relaxed">
              Envoyez-nous votre liste ou posez-nous vos questions via notre formulaire de contact dédié. Réponse assurée et préparation soignée à Sfax.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-[#881326] hover:bg-stone-100 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Accéder au formulaire de contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={STORE_CONTACT.phoneCallUrl}
                className="px-6 py-4 bg-black/20 hover:bg-black/30 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Appeler : {STORE_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
