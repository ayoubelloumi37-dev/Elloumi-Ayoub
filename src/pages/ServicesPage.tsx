import React from 'react';
import { PageId } from '../types';
import { SERVICES, STORE_CONTACT } from '../data/mockData';
import {
  ShoppingCart,
  BadgePercent,
  BookOpen,
  Truck,
  HeartHandshake,
  ArrowRight,
  MapPin,
  CheckCircle,
  HelpCircle,
  Phone,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, subject?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6" />;
    }
  };

  const sfaxZones = [
    'Sfax Ville & Centre-ville',
    'Route de Téniour',
    'Route de Tunis',
    'Sakiet Ezzit',
    'Sakiet Eddaïer',
    'Route de Gremda',
    'Route de l’Aéroport',
    'Route de Soukra',
    'Route de Mahedia',
    'Thyna & zones périphériques',
  ];

  const faqs = [
    {
      q: 'Comment passer une commande ou obtenir un renseignement ?',
      a: 'C’est très simple : utilisez notre formulaire de contact en précisant les produits désirés, ou contactez-nous directement par téléphone ou WhatsApp au 51 308 083. Notre équipe prépare votre commande et valide les détails avec vous.',
    },
    {
      q: 'Quels sont les délais de livraison à Sfax ?',
      a: 'Pour le Grand Sfax, les livraisons s’effectuent généralement le jour même ou sous 24h selon la disponibilité des stocks et l’heure de votre demande.',
    },
    {
      q: 'Livrez-vous dans d’autres villes de Tunisie ?',
      a: 'Oui, nous proposons des solutions d’expédition et de livraison dans les principales régions de Tunisie selon les zones desservies par nos transporteurs partenaires.',
    },
    {
      q: 'Peut-on demander des fruits secs en grande quantité ?',
      a: 'Absolument ! Que ce soit pour un événement familial, une pâtisserie ou des besoins professionnels, nous proposons des tarifs dégressifs sur nos amandes, pistaches et dattes en volume.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#2D231E] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#881326] bg-[#881326]/10 px-3 py-1 rounded-full">
            Nos Prestations
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-stone-900 mt-3 tracking-tight">
            LES SERVICES MOKA SHOP
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
            Une gamme complète de services pensés pour simplifier votre quotidien, de la commande à la livraison.
          </p>
        </div>

        {/* The 5 Key Services in Detailed Cards */}
        <div className="space-y-8 mb-20">
          {SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DEC8] shadow-xs hover:border-[#881326] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Icon & Title */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#881326]/10 text-[#881326] flex items-center justify-center font-bold">
                    {getIcon(serv.icon)}
                  </div>
                  <span className="font-display text-2xl font-bold text-[#881326]">
                    0{index + 1}.
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  {serv.title}
                </h2>
                <p className="text-sm font-semibold text-[#881326]">
                  {serv.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                  {serv.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DEC8] flex flex-col justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                  Points forts du service :
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {serv.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#881326] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('contact', serv.title)}
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3D251E] hover:bg-[#881326] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Demander un renseignement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process: Comment ça marche en 3 étapes */}
        <div className="bg-[#EBE2D5] rounded-3xl p-8 sm:p-14 border border-[#DDD3C4] mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#881326]">
              Simple & Pratique
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              COMMENT ÇA FONCTIONNE ?
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Commander chez MOKA Shop ne prend que quelques minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-[#DDD3C4] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#881326] text-white text-sm font-bold flex items-center justify-center font-display">
                1
              </span>
              <h3 className="font-display text-xl font-bold text-stone-900">
                Faites votre liste
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Parcourez nos rayons (fruits secs, épicerie, boissons, hygiène) et préparez les articles et quantités souhaités.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#DDD3C4] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#881326] text-white text-sm font-bold flex items-center justify-center font-display">
                2
              </span>
              <h3 className="font-display text-xl font-bold text-stone-900">
                Envoyez votre demande
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Remplissez notre formulaire de contact ou joignez-nous directement au 51 308 083. Nous confirmons la disponibilité et le tarif.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#DDD3C4] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#881326] text-white text-sm font-bold flex items-center justify-center font-display">
                3
              </span>
              <h3 className="font-display text-xl font-bold text-stone-900">
                Livraison à domicile
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nous préparons votre commande avec le plus grand soin et la livrons à votre adresse à Sfax ou en Tunisie.
              </p>
            </div>
          </div>
        </div>

        {/* Zones de Livraison à Sfax */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#881326]">
                Couverture Géographique
              </span>
              <h2 className="font-display text-3xl font-bold text-stone-900">
                ZONES DESSERVIES À SFAX ET EN TUNISIE
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                MOKA Shop assure des livraisons quotidiennes dans l'ensemble des délégations et artères principales de Sfax, ainsi que des envois sécurisés pour toute la Tunisie.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={STORE_CONTACT.phoneCallUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3D251E] text-white rounded-xl text-xs font-bold hover:bg-[#881326] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Vérifier votre zone ({STORE_CONTACT.phoneFormatted})</span>
                </a>
              </div>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DEC8] lg:w-96">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#881326]" />
                <span>Exemples de secteurs couverts :</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {sfaxZones.map((zone, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#881326]" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900">
              QUESTIONS FRÉQUENTES
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Tout ce que vous devez savoir sur nos services et la livraison.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E8DEC8] space-y-2"
              >
                <h3 className="font-bold text-stone-900 text-base flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#881326] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#881326] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            BESOIN D’UN SERVICE PARTICULIER ?
          </h2>
          <p className="text-stone-200 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Dites-nous ce dont vous avez besoin : notre équipe à Sfax se fera un plaisir de vous aider.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#881326] hover:bg-stone-100 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer"
          >
            <span>Nous écrire via le formulaire</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
