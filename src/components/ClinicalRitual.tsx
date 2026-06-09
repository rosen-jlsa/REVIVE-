import { HOW_TO_APPLY } from '../data';

export default function ClinicalRitual() {
  return (
    <section className="mt-16 lg:mt-24 max-w-[1000px] mx-auto py-8 lg:py-16 px-4" id="clinical-ritual-section">
      <div className="text-center max-w-[600px] mx-auto mb-16">
        <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-grey block mb-2">
          ADMINISTRATION DIRECTIVE
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3.5xl font-light tracking-wide text-charcoal uppercase mb-3">
          The Clinical Ritual
        </h2>
        <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
          Follow daily for optimal bio-active absorbency and structural reinforcement under the orbital dermal frameworks.
        </p>
      </div>

      <div className="relative space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8" id="ritual-timeline">
        {/* Connection bar for desktop */}
        <div className="hidden lg:block absolute top-12 left-16 right-16 h-px bg-charcoal/10 z-0" />

        {HOW_TO_APPLY.map((step, idx) => (
          <div 
            key={idx} 
            className="relative z-10 bg-pearl p-6 hover:shadow-2xs border border-transparent hover:border-charcoal/5 group transition-all duration-300"
            id={`step-card-${step.step}`}
          >
            <div className="flex lg:flex-col gap-6 items-start">
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-white border border-charcoal/10 flex items-center justify-center font-cinzel text-2xl text-[#C5A880] shrink-0 shadow-xs group-hover:bg-charcoal group-hover:text-pearl group-hover:border-charcoal transition-all duration-500 font-bold">
                {step.step}
              </div>

              {/* Step info */}
              <div className="space-y-2 mt-2">
                <h3 className="font-cinzel text-sm sm:text-base font-semibold text-charcoal uppercase tracking-wider">
                  {step.action}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                  {step.instruction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
