import React, { useState } from 'react';
import { STORE_CONTACT } from '../data/mockData';
import { MessageCircle, Phone, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover options when clicked */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-xl border border-stone-200 p-4 w-72 text-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div>
              <p className="font-bold text-sm text-[#881326]">MOKA Shop Sfax</p>
              <p className="text-xs text-stone-500">Service client direct</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-md"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 my-3">
            Une question sur un produit ou la livraison ? Contactez-nous directement :
          </p>

          <div className="flex flex-col gap-2">
            <a
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ouvrir WhatsApp ({STORE_CONTACT.phone})</span>
            </a>

            <a
              href={STORE_CONTACT.phoneCallUrl}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#3D251E] hover:bg-[#2B1914] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Appeler au {STORE_CONTACT.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#881326] hover:bg-[#720E1E] text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        aria-label="Contact rapide MOKA"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
        </span>
        <span className="text-xs font-bold tracking-tight whitespace-nowrap">
          Besoin d'aide ? 51 308 083
        </span>
        <MessageCircle className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
