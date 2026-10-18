import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Ruler, Wallet, FileText, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Open Plot in Noida Sector 62 | Prime Property',
  description: 'Looking for an open plot in Noida Sector 62? Explore verified property opportunities with Prime Property. Call 4755875767 for enquiries.',
  alternates: {
    canonical: '/open-plot-in-noida-sector-62',
  },
};

export default function OpenPlotPage() {
  const faqs = [
    {
      q: "How can I enquire about an open plot in Noida Sector 62?",
      a: "You can easily enquire by calling our dedicated property line at 4755875767 or by filling out the enquiry form on this page. Our team at Prime Property will provide you with the latest availability and verified details."
    },
    {
      q: "What documents should I check before purchasing a plot?",
      a: "Key documents include the title deed, land-use conversion certificates (if applicable), authority allotment letters, encumbrance certificates, and verified layout plans. It's essential to conduct thorough legal due diligence before any transaction."
    },
    {
      q: "How do I confirm whether a plot is approved?",
      a: "Plot approval can be verified through the Noida Authority's official records or by checking the RERA registration status. We assist our clients in verifying these approvals to ensure a secure purchase."
    },
    {
      q: "How can I contact Prime Property?",
      a: "You can reach us directly at 4755875767, via WhatsApp at +91 4755875767, or by visiting our office in Sector 62, Noida."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <TopBar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Noida Sector 62</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Open Plot in Noida Sector 62
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Find verified land and plot opportunities for your next investment or residential project. Prime Property provides professional assistance for genuine property deals in Noida.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead">
              Noida Sector 62 has emerged as a premier destination for both commercial and residential growth. At <strong>Prime Property</strong>, we specialize in helping buyers navigate the complexities of land acquisition. Whether you are looking for a small residential plot or a large industrial block, we provide the transparency and expert guidance needed for a secure transaction.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Explore Open Plot Opportunities in Noida Sector 62</h2>
            <p>
              The inventory of open plots in Sector 62 varies across different categories. Depending on current availability, buyers can explore:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-slate-900 shrink-0 mt-1" />
                <span><strong>Residential Plots:</strong> Ideal for independent villas or small-scale residential developments.</span>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-slate-900 shrink-0 mt-1" />
                <span><strong>Commercial Land:</strong> Strategic locations for office spaces, retail outlets, or business hubs.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Consider Property in Noida Sector 62?</h2>
            <p>
              Sector 62 is one of the most well-established institutional and residential sectors in Noida. Its advantages include:
            </p>
            <ul>
              <li><strong>Connectivity:</strong> Direct access to the Delhi-Meerut Expressway and the Blue Line Metro (Electronic City Station).</li>
              <li><strong>Business Hub:</strong> Home to major IT parks, corporate offices, and educational institutions.</li>
              <li><strong>Infrastructure:</strong> Well-planned roads, reliable utility services, and proximity to major hospitals and shopping centers.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What to Check Before Buying an Open Plot</h2>
            <p>
              Purchasing land requires careful due diligence. Before finalizing any plot for sale in Noida Sector 62, ensure you verify the following:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Title Verification</h4>
                  <p className="text-sm text-slate-500">Confirm the clear ownership of the land and check for any existing liens.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Land Use Permission</h4>
                  <p className="text-sm text-slate-500">Verify if the plot is zoned for residential, commercial, or mixed-use purposes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <Ruler className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Plot Dimensions</h4>
                  <p className="text-sm text-slate-500">Ensure the actual dimensions match the records in the allotment letter.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Authority Approvals</h4>
                  <p className="text-sm text-slate-500">Confirm approvals from the Noida Authority and RERA where applicable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-400" />
                    {faq.q}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Looking for an Open Plot in Noida Sector 62?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Connect with our experts at <strong>4755875767</strong> for current inventory, verified documentation, and personalized property tours. We ensure a transparent buying process for all our clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:4755875767" 
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Call 4755875767
                  </a>
                  <a 
                    href="https://wa.me/914755875767" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-xl"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-sm">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-slate-700 block mb-1">Plot Size</label>
                      <input type="text" placeholder="e.g. 200 Sqyd" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-slate-700 block mb-1">Budget Range</label>
                      <input type="text" placeholder="e.g. 5 Cr" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-1">Requirements</label>
                    <textarea rows={3} placeholder="Additional details..." className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all resize-none"></textarea>
                  </div>
                  <button type="button" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Request Plot Details
                  </button>
                </form>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Open Plot in Noida Sector 62 | Prime Property",
            "description": "Looking for an open plot in Noida Sector 62? Explore verified property opportunities with Prime Property.",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          })
        }}
      />
    </main>
  );
}
