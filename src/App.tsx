/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');

  const handleNavigate = (page: PageId, subject?: string) => {
    if (subject) {
      setPrefilledSubject(subject);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D231E]">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={(p) => handleNavigate(p)} />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={(p) => handleNavigate(p)} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialSubject={prefilledSubject} />}
      </main>

      {/* Floating Direct Contact Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer onNavigate={(p) => handleNavigate(p)} />
    </div>
  );
}
