'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
            <span className="w-8 h-[1px] bg-slate-300"></span>
            Premier Real Estate in Noida
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-slate-900 mb-6 text-wrap-balance">
            Premium Open Land <span className="text-slate-400">in Sector 62, Noida.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Discover high-value open land and plots in Sector 62, Noida. Whether for commercial development or investment, we provide expert assistance for genuine real estate opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#listings"
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Explore Listings
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:border-slate-400 transition-all"
            >
              Contact Agent
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            <div>
              <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">500+</div>
              <div className="text-sm text-slate-500">Properties Sold</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">12+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">4.9/5</div>
              <div className="text-sm text-slate-500">Client Rating</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden bg-slate-100 group shadow-2xl"
        >
          {/* Fallback pattern since generation failed */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-white flex items-center justify-center p-12">
            <div className="w-full h-full border border-white/50 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">Luxury Noida Skyline</h3>
              <p className="text-sm text-slate-400 max-w-xs mx-auto">
                Discover premium living spaces in the heart of Noida.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur border border-white/20 rounded-2xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
             <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Featured Plot</div>
                  <div className="text-lg font-bold text-slate-900">Prime Commercial Plot</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">₹ 15.0 Cr+</div>
                  <div className="text-xs text-slate-500">Sector 62, Noida</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
