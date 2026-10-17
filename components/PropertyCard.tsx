'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';

interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  beds: number;
  baths: number;
  sqft: string;
}

export function PropertyCard({ title, location, price, type, beds, baths, sqft }: PropertyProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {/* Placeholder image pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white flex items-center justify-center p-8">
           <div className="text-center opacity-50">
              <Maximize2 className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{type}</span>
           </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-slate-900 rounded-full shadow-sm">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">
          {title}
        </h3>
        <div className="text-2xl font-bold text-slate-900 mb-4 font-mono tabular-nums">
          {price}
        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-600 tabular-nums">{beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-600 tabular-nums">{baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-600 tabular-nums">{sqft}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
