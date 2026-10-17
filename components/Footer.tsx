'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-6 block">
              Noida Prime
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Your trusted partner for premium real estate investments in Noida. We combine deep market intelligence with a commitment to transparency and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#listings" className="text-slate-500 hover:text-slate-900 transition-colors">Featured Listings</Link></li>
              <li><Link href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">Market Trends</Link></li>
              <li><Link href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Property Valuation</Link></li>
              <li><Link href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Legal Assistance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="text-slate-500">Sector 62, Noida, UP, India</li>
              <li><a href="mailto:info@noidaprime.com" className="text-slate-500 hover:text-slate-900 transition-colors">info@noidaprime.com</a></li>
              <li><a href="tel:+919876543210" className="text-slate-500 hover:text-slate-900 transition-colors">+91 98765 43210</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Noida Prime Properties. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-900">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
