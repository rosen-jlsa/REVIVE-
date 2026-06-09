import { useState } from 'react';
import { Sparkles, Calendar, UserCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  const [filterType, setFilterType] = useState<string>('all');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({
    'rev-1': 14,
    'rev-2': 29,
    'rev-3': 8
  });
  const [clickedHelpful, setClickedHelpful] = useState<Record<string, boolean>>({});

  const handleHelpfulClick = (id: string) => {
    if (clickedHelpful[id]) return;
    setHelpfulCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
    setClickedHelpful(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="mt-16 lg:mt-24 border-t border-charcoal/10 pt-16 lg:pt-24 max-w-[1100px] mx-auto px-4" id="reviews-section-core">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="reviews-sub-grid">
        
        {/* Left Column: Social Proof Ratings Sidebar (col span 4) */}
        <div className="lg:col-span-4 text-center lg:text-left space-y-6" id="ratings-sidebar">
          <div>
            <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-grey block mb-2">
              AUDITED PATIENT OUTCOMES
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-light tracking-wide text-charcoal uppercase mb-4">
              Clinical Reviews
            </h2>
          </div>

          <div className="bg-white border border-charcoal/8 p-8 text-center space-y-3" id="scores-card">
            <div className="font-cinzel text-6xl text-charcoal font-light leading-none tracking-tighter">
              4.88
            </div>
            
            <div className="flex justify-center gap-1 text-[#D4AF37]" id="sidebar-ratings-stars">
              <span>★★★★★</span>
            </div>

            <p className="text-xs text-charcoal/60 font-sans tracking-wide">
              Based on 142 double-blind practitioner-monitored records.
            </p>

            <button
              onClick={() => alert("Review submissions are closed. Clinical enrollment limited to validated dermatological testers.")}
              className="w-full text-[10px] tracking-widest uppercase font-semibold py-3 border border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-pearl transition-all duration-300 cursor-pointer"
              id="write-review-btn"
            >
              Request Tester Enrollment
            </button>
          </div>

          {/* Trial statistics box */}
          <div className="bg-white p-6 border border-charcoal/8 space-y-4 text-xs font-sans text-charcoal/80" id="trial-stats-box">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-charcoal">
              <Sparkles className="w-4 h-4 text-grey" />
              28-Day Clinical Trial Efficacy
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>De-creased Morning Puffiness</span>
                  <span>94%</span>
                </div>
                <div className="w-full h-1 bg-charcoal/5">
                  <div className="h-full bg-charcoal" style={{ width: '94%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Reduced Visual Halo Rings</span>
                  <span>89%</span>
                </div>
                <div className="w-full h-1 bg-charcoal/5">
                  <div className="h-full bg-charcoal" style={{ width: '89%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Plumped Orbital Fine Lines</span>
                  <span>91%</span>
                </div>
                <div className="w-full h-1 bg-charcoal/5">
                  <div className="h-full bg-charcoal" style={{ width: '91%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Cards Feed (col span 8) */}
        <div className="lg:col-span-8 space-y-6" id="reviews-feed">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white border border-charcoal/8 p-6 sm:p-8 space-y-4 relative group"
              id={`review-card-${rev.id}`}
            >
              {/* Header meta lines */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-charcoal/8 pb-4 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center font-cinzel text-charcoal/70 text-sm font-semibold">
                    {rev.author.split(' ').pop()?.charAt(0) || 'R'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm flex items-center gap-1.5 text-charcoal">
                      {rev.author}
                      {rev.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold tracking-widest text-grey uppercase" title="Dermatologist Approved Account">
                          <UserCheck className="w-3.5 h-3.5" />
                          VERIFIED CASE
                        </span>
                      )}
                    </h4>
                    <p className="text-[10px] text-charcoal/50">
                      Skin Profile: <span className="font-medium text-charcoal/70">{rev.skinType}</span> • Age Range: <span className="font-medium text-charcoal/70">{rev.ageRange}</span>
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-1.5 sm:gap-0 font-sans">
                  {/* Rating Stars */}
                  <span className="text-[#D4AF37] text-xs select-none">★★★★★</span>
                  <span className="text-[10px] text-charcoal/40 font-mono flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 opacity-50" />
                    {rev.date}
                  </span>
                </div>
              </div>

              {/* Review Body */}
              <div className="space-y-2">
                <h4 className="font-cinzel text-sm sm:text-base font-semibold text-charcoal uppercase tracking-wider">
                  "{rev.title}"
                </h4>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                  {rev.body}
                </p>
              </div>

              {/* Footer interactive helpful ticker */}
              <div className="flex justify-between items-center bg-pearl/20 border-t border-charcoal/8 pt-4 font-sans text-xs">
                <span className="text-[10px] text-charcoal/40 font-mono">SPEC: RV-REV-{rev.id.toUpperCase()}</span>
                <button
                  onClick={() => handleHelpfulClick(rev.id)}
                  disabled={clickedHelpful[rev.id]}
                  className={`flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                    clickedHelpful[rev.id] 
                      ? 'text-emerald-700 font-bold' 
                      : 'text-charcoal/60 hover:text-charcoal'
                  }`}
                  id={`helpful-btn-${rev.id}`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Helpful ({helpfulCounts[rev.id]}) {clickedHelpful[rev.id] && '— Thank You'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
