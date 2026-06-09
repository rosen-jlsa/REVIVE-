import { ASSET_IMAGES } from '../data';

export default function EditorialGallery() {
  const galleryItems = [
    {
      img: ASSET_IMAGES.product,
      title: "CLINICAL. CLEAN. TRANSFORMATIVE.",
      subtitle: "REVIVE ADVANCED EYE SERUM",
      cols: "md:col-span-4"
    },
    {
      img: ASSET_IMAGES.clinic,
      title: "TARGETED CARE FOR YOUR MOST DELICATE AREA.",
      subtitle: "REVIVE ADVANCED EYE SERUM",
      cols: "md:col-span-4"
    },
    {
      img: ASSET_IMAGES.stone,
      title: "RENEW. RESTORE. REVIVE.",
      subtitle: "REVIVE ADVANCED EYE SERUM",
      cols: "md:col-span-4"
    },
    {
      img: ASSET_IMAGES.texture,
      title: "POWERED BY SCIENCE. MADE FOR RESULTS.",
      subtitle: "REVIVE ADVANCED EYE SERUM",
      cols: "md:col-span-6"
    },
    {
      img: ASSET_IMAGES.eyes,
      title: "BRIGHTER EYES. BETTER DAYS.",
      subtitle: "REVIVE ADVANCED EYE SERUM",
      cols: "md:col-span-6"
    }
  ];

  return (
    <section className="mt-16 lg:mt-24 border-t border-charcoal/8 pt-16" id="sculpted-gallery-frame">
      <div className="text-center max-w-[800px] mx-auto mb-12 lg:mb-16">
        <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-grey block mb-2">
          LIFESTYLE & CREATIVE AD CAMPAIGN
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3.5xl font-light tracking-wide text-charcoal uppercase mb-4">
          Atmospheric Brand Narrative
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="editorial-grid">
        {galleryItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`${item.cols} relative overflow-hidden group border border-charcoal/8 bg-charcoal`}
            id={`editorial-card-${idx}`}
          >
            {/* Aspect wrapper */}
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-85 group-hover:scale-103 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Permanent elegant print gradient overlay to guarantee maximum typography readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/30" />

              {/* High-fashion Permanent Print Ad Typographic Layout (Adheres to Lifestyle parameters) */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-20 text-white select-none">
                <div>
                  <span className="text-[9px] tracking-[0.25em] font-bold text-grey uppercase block mb-2.5">
                    CAMPAIGN N°0{idx + 1}
                  </span>
                  <h4 className="font-cinzel text-sm sm:text-base lg:text-lg font-light tracking-[0.05em] uppercase leading-snug max-w-xs">
                    {item.title}
                  </h4>
                </div>
                
                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-4">
                  <span className="font-sans text-[9px] tracking-[0.2em] font-semibold text-pearl/80 uppercase">
                    {item.subtitle}
                  </span>
                  <span className="font-mono text-[9px] text-pearl/40">
                    EST. 2026
                  </span>
                </div>
              </div>
            </div>
            
            {/* High end quiet caption descriptive card */}
            <div className="p-4 border-t border-charcoal/8 bg-white flex justify-between items-center z-10 relative">
              <div className="text-left">
                <span className="font-cinzel text-[11px] font-semibold text-charcoal tracking-wide block uppercase">
                  Layout Model 0{idx + 1}
                </span>
                <span className="text-[10px] text-charcoal/50 font-sans block mt-0.5 font-light">
                  Clinically printed lifestyle ad publication spec
                </span>
              </div>
              <div className="text-[10px] text-charcoal/40 font-mono tracking-widest hidden sm:block">
                PLATE_0{idx + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
