import { TopBar } from '@/components/TopBar';
import { Hero } from '@/components/Hero';
import { Properties } from '@/components/Properties';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale contrast-125">
            <div className="text-xl font-bold tracking-tighter">DLF HOMES</div>
            <div className="text-xl font-bold tracking-tighter">GODREJ PROPERTIES</div>
            <div className="text-xl font-bold tracking-tighter">TATA HOUSING</div>
            <div className="text-xl font-bold tracking-tighter">ATS GREEN</div>
            <div className="text-xl font-bold tracking-tighter">M3M INDIA</div>
          </div>
        </div>
      </section>

      <Properties />
      
      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-slate-100 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                   {/* Fallback pattern */}
                   <div className="text-center">
                      <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                         <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                         </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Verified Real Estate</h3>
                      <p className="text-slate-500 max-w-xs mx-auto italic">
                        &quot;Trust is our most valuable asset. We ensure every deal is legally sound and transparent.&quot;
                      </p>
                   </div>
                </div>
                {/* Float experience card */}
                <div className="absolute -bottom-6 -right-6 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl">
                   <div className="text-4xl font-bold mb-1">12+</div>
                   <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Years Experience</div>
                </div>
             </div>

             <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                  Expertise That Matters in <span className="text-slate-400">Noida&apos;s Market.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-3xl font-bold text-slate-200">01</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Market Intelligence</h4>
                      <p className="text-slate-600 leading-relaxed">
                        We provide data-driven insights into upcoming sectors, infrastructure developments (like the Jewar Airport), and investment hotspots. Explore specialized opportunities like <Link href="/open-plot-in-noida-sector-62" className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4 hover:decoration-slate-900 transition-all">open plots in Sector 62</Link> for premium investment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-3xl font-bold text-slate-200">02</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Documentation Support</h4>
                      <p className="text-slate-600 leading-relaxed">
                        From RERA compliance to registration assistance, we handle the complex paperwork so you can focus on your new beginning.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-3xl font-bold text-slate-200">03</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Tailored Negotiation</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Our seasoned negotiators ensure you get the best value, whether you are buying a home or leasing a large corporate floor.
                      </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
}
