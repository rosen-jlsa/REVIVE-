import { INGREDIENTS } from '../data';

export default function Ingredients() {
  return (
    <section className="mt-16 lg:mt-24 bg-charcoal text-pearl p-8 sm:p-12 lg:p-20 relative overflow-hidden" id="ingredients-section-core">
      {/* Aesthetic geometric line overlay matching clean high-end engineering */}
      <div className="absolute top-0 right-0 w-96 h-96 border-r border-t border-pearl/5 pointer-events-none transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-l border-b border-pearl/5 pointer-events-none transform -translate-x-32 translate-y-32" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 lg:mb-16">
          <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-grey block mb-2">
            BIO-CHEMICAL DOSAGE AUDIT
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3.5xl font-light tracking-wide text-white uppercase">
            Active Core Formulation
          </h2>
          <div className="w-16 h-px bg-pearl/15 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="ingredients-grid">
          {INGREDIENTS.map((ing, idx) => (
            <div 
              key={idx} 
              className="border-b border-pearl/15 pb-8 flex flex-col justify-between group hover:border-[#C5A880]/30 transition-colors duration-300"
              id={`ingredient-card-${idx}`}
            >
              <div>
                {/* Large high-fashion scientific dosage layout */}
                <div className="font-cinzel text-4xl sm:text-5xl text-[#C5A880] font-light tracking-tighter mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                  {ing.concentration}
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-medium text-white uppercase tracking-wider mb-2">
                  {ing.name}
                </h3>
                <span className="inline-block text-[10px] tracking-wider font-semibold text-[#C5A880] uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-xs mb-4 font-mono">
                  {ing.action}
                </span>
                <p className="font-sans text-xs text-pearl/70 leading-relaxed font-light">
                  {ing.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-[9px] tracking-widest text-[#C5A880]/60 font-mono">USP COMPLIANT</span>
                <span className="text-[9px] text-[#C5A885]/40 font-mono">STAGE {idx+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
