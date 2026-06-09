import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Search, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQ_ITEMS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mt-16 lg:mt-24 max-w-[850px] mx-auto px-4" id="faq-section-wrapper">
      <div className="text-center max-w-[600px] mx-auto mb-12">
        <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-grey block mb-2">
          SCIENTIFIC CLARIFICATIONS
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3.5xl font-light tracking-wide text-charcoal uppercase mb-3">
          Dermal Intelligence FAQ
        </h2>
        
        {/* Search bar inside clinical FAQ to support quick customer navigation, driving superior CRO */}
        <div className="relative max-w-md mx-auto mt-6" id="faq-search-box">
          <input
            type="text"
            placeholder="Search our medical database..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-charcoal/15 text-xs text-charcoal tracking-wide focus:border-charcoal focus:outline-hidden placeholder-charcoal/40 font-sans"
            id="faq-search-input"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-charcoal/40" />
        </div>
      </div>

      <div className="space-y-4" id="faq-accordion-box">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-charcoal/8 pb-4 bg-transparent font-sans"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left py-4 flex justify-between items-center gap-4 text-charcoal hover:opacity-80 transition-opacity duration-250 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${idx}`}
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[9px] tracking-[0.15em] font-bold text-grey uppercase block">
                      {faq.category}
                    </span>
                    <span className="font-light text-sm sm:text-base leading-tight block font-cinzel text-charcoal">
                      {faq.question}
                    </span>
                  </div>
                  <Plus className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-charcoal' : 'text-charcoal/40'}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                      id={`faq-content-container-${idx}`}
                    >
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light pb-4 pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 border border-dashed border-charcoal/15 space-y-2">
            <HelpCircle className="w-8 h-8 text-charcoal/30 mx-auto" />
            <p className="text-xs text-charcoal/60 font-sans">No matches found for your clinical search.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold underline text-charcoal cursor-pointer"
              id="clear-faq-search-btn"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
