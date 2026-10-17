'use client';

import React from 'react';
import { PropertyCard } from './PropertyCard';

const featuredProperties = [
  {
    id: '1',
    title: 'Modern Skylight Penthouse',
    location: 'Sector 150, Noida',
    price: '₹ 3.50 Cr',
    type: 'Apartment',
    beds: 4,
    baths: 4,
    sqft: '3,200',
  },
  {
    id: '2',
    title: 'Green Valley Villa',
    location: 'Sector 44, Noida',
    price: '₹ 8.20 Cr',
    type: 'Villa',
    beds: 5,
    baths: 6,
    sqft: '5,500',
  },
  {
    id: '3',
    title: 'Corporate HQ Tower',
    location: 'Sector 62, Noida',
    price: '₹ 12.00 Cr',
    type: 'Commercial',
    beds: 0,
    baths: 8,
    sqft: '15,000',
  },
  {
    id: '4',
    title: 'Urban Loft Studio',
    location: 'Sector 137, Noida',
    price: '₹ 85.0 L',
    type: 'Studio',
    beds: 1,
    baths: 1,
    sqft: '750',
  },
  {
    id: '5',
    title: 'Horizon Business Park',
    location: 'Noida Expressway',
    price: '₹ 2.40 Cr',
    type: 'Office',
    beds: 0,
    baths: 2,
    sqft: '1,800',
  },
  {
    id: '6',
    title: 'Sunset View Residences',
    location: 'Greater Noida West',
    price: '₹ 1.10 Cr',
    type: 'Apartment',
    beds: 3,
    baths: 3,
    sqft: '1,650',
  },
];

export function Properties() {
  return (
    <section id="listings" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Curated Property Portfolio
            </h2>
            <p className="text-lg text-slate-600">
              Handpicked premium properties across Noida&apos;s most sought-after sectors. Every listing is verified for transparency and quality.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-sm font-semibold hover:border-slate-400 transition-all">
              View All
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
