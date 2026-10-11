import React, { useState } from 'react';
import { PageId } from '../types';
import { MokaLogo } from './MokaLogo';
import { STORE_CONTACT } from '../data/mockData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice for local Sfax deliveries & quick phone */}
      <div className="bg-[#3D251E] text-[#F5EDE4] text-xs py-2 px-4 border-b border-[#2D1B15]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-medium tracking-wide">
            📍 Boutique & service de livraison à <span className="text-amber-300 font-semibold">Sfax</span> et partout en Tunisie
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={STORE_CONTACT.phoneCallUrl}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{STORE_CONTACT.phoneFormatted}</span>
            </a>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300 hidden md:inline">
              ayoubelloumi90@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar matching Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#881326] rounded-lg"
          >
            <MokaLogo />
          </button>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight text-stone-700">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#881326] font-bold'
                      : 'text-stone-700 hover:text-[#881326]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#881326] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#881326] hover:bg-[#720E1E] text-white text-sm font-semibold tracking-tight shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Formulaire de Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 text-xs font-bold rounded-md bg-[#881326] text-white"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#881326] focus:outline-hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F4EFEA] border-b border-[#E8DEC8] px-4 pt-3 pb-6 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#881326] text-white'
                      : 'text-stone-800 hover:bg-[#EBE2D5]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E8DEC8] flex flex-col gap-2">
                <a
                  href={STORE_CONTACT.phoneCallUrl}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#3D251E] text-white rounded-lg text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Appeler le {STORE_CONTACT.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
