import { BENEFITS } from '../data';
import { Droplet, Eye, Activity, Leaf } from 'lucide-react';

export default function Benefits() {
  const benefitIcons = [
    <Droplet className="w-6 h-6 text-charcoal group-hover:scale-110 transition-transform duration-300" />,
    <Eye className="w-6 h-6 text-charcoal group-hover:scale-110 transition-transform duration-300" />,
    <Activity className="w-6 h-6 text-charcoal group-hover:scale-110 transition-transform duration-300" />,
    <Leaf className="w-6 h-6 text-charcoal group-hover:scale-110 transition-transform duration-300" />
  ];

  return (
    <section className="mt-16 lg:mt-24 border-t border-charcoal/8 pt-12" id="clinical-benefits-section">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <span className="text-[10px] tracking-[0.15em] font-semibold uppercase text-grey block mb-2">
          ORBITAL DECONGESTION METRIC
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3.5xl font-light tracking-wide text-charcoal uppercase mb-3">
          Clinically Verified Outcomes
        </h2>
        <p className="font-sans text-charcoal/70 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
          Dermatologically scrutinized ingredients and application mechanics combined to spark active under-eye recovery.
        </p>
      </div>

      {/* Grid mimicking benefits-strip exactly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-w border-charcoal/8 bg-white" id="benefits-grid">
        {BENEFITS.map((benefit, idx) => {
          return (
            <div
              key={idx}
              className="border border-charcoal/8 border-collapse p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-pearl/30 group"
              id={`benefit-card-${idx}`}
            >
              {/* Graphic Icon as requested by the branding guidelines */}
              <div className="mb-6 p-4 bg-[#EDE6D9]/40 border border-charcoal/8 inline-block">
                {benefitIcons[idx] || <Droplet className="w-6 h-6 text-charcoal" />}
              </div>
              
              <h3 className="font-cinzel text-[13px] tracking-[0.1em] text-charcoal mb-2 font-bold uppercase">
                {benefit.title}
              </h3>
              
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed max-w-[220px] font-light">
                {benefit.description}
              </p>

              <div className="mt-6 pt-4 border-t border-charcoal/8 w-full flex justify-between items-center text-[9px] tracking-wider text-charcoal/40 font-mono">
                <span>FORMULA PARAMETER</span>
                <span className="text-grey font-semibold font-sans">{benefit.highlight}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
