'use client';

import React from 'react';
import Link from 'next/link';

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          Noida Prime
        </Link>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#featured" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Featured
          </Link>
          <Link href="#listings" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Listings
          </Link>
          <Link href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            About
          </Link>
          <Link href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Contact
          </Link>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center shrink-0">
          <Link 
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            Get Expert Advice
          </Link>
        </div>
      </div>
    </header>
  );
}
