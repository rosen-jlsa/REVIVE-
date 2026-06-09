import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, Menu, Sparkles, Check, Search } from 'lucide-react';

// Brand components
import ProductHero from './components/ProductHero';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import ClinicalRitual from './components/ClinicalRitual';
import EditorialGallery from './components/EditorialGallery';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import LiquidSourceDrawer from './components/LiquidSourceDrawer';
import CartDrawer from './components/CartDrawer';
import { PRODUCT_DATA, ASSET_IMAGES } from './data';

export default function App() {
  const [cartItem, setCartItem] = useState<{
    title: string;
    variantName: string;
    quantity: number;
    price: number;
    type: 'one-time' | 'subscription';
  } | null>(null);

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [showStickyATC, setShowStickyATC] = useState<boolean>(false);
  const [bannerCleared, setBannerCleared] = useState<boolean>(false);

  // Scroll listener to activate Mobile Sticky ATC after passing the main hero
  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky ATC after scrolling deep past the primary product details card
      if (window.scrollY > 620) {
        setShowStickyATC(true);
      } else {
        setShowStickyATC(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: typeof cartItem) => {
    if (!item) return;

    // Check if item is already in cart, update quantity if the same, else set new
    setCartItem(prev => {
      if (prev && prev.variantName === item.variantName && prev.type === item.type) {
        return {
          ...prev,
          quantity: prev.quantity + item.quantity
        };
      }
      return item;
    });

    // Automatically slide open our luxury Cart drawer to provide incredible CRO feedback
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = () => {
    setCartItem(null);
  };

  return (
    <div className="min-h-screen bg-pearl text-charcoal flex flex-col font-sans relative" id="app-root-frame">
      
      {/* 1. TOP ANNOUNCEMENT TICKER (High-End Promotion) */}
      {!bannerCleared && (
        <div className="bg-charcoal text-pearl text-[10px] sm:text-xs tracking-widest font-medium py-2.5 px-4 text-center select-none flex items-center justify-center gap-2 border-b border-pearl/10 relative" id="announcement-banner">
          <span>COMPLIMENTARY DHL EXPRESS DELIVERY ENROLLED ON ALL PRESCRIPTIONS</span>
          <span className="hidden sm:inline-block opacity-40">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[#C5A880]">
            <Sparkles className="w-3.5 h-3.5" />
            DERMATOLOGY GRADE FORMULA
          </span>
          <button 
            onClick={() => setBannerCleared(true)}
            className="absolute right-4 hover:opacity-60 text-pearl/50 hover:text-pearl text-[11px] font-sans cursor-pointer"
            title="Dismiss Announcement"
            id="dismiss-announcement-btn"
          >
            ✕
          </button>
        </div>
      )}

      {/* 2. PREMIUM MINIMAL BRAND HEADER (Shopify Navigation Style) */}
      <header className="sticky top-0 bg-pearl/95 backdrop-blur-md border-b border-charcoal/8 z-40 transition-all duration-300" id="shopify-header">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 h-[70px] flex justify-between items-center bg-transparent">
          
          {/* Left Side: Brand Wordmark (matching LAPTOP mockup) */}
          <div className="flex flex-col items-start" id="brand-wordmark">
            <a href="#" className="font-cinzel text-2xl font-light tracking-[0.2em] hover:opacity-85 transition-opacity block select-none text-charcoal">
              REVIVE
            </a>
            <span className="text-[8px] tracking-[0.15em] font-bold uppercase text-grey block -mt-0.5 font-sans">
              Clinical Dermal Labs
            </span>
          </div>
 
          {/* Center Side: Core Navigation Links (SHOP, ABOUT, SCIENCE, INGREDIENTS, JOURNAL) */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-charcoal/85" id="desktop-nav-links">
            <a href="#product-hero-core" className="hover:text-charcoal transition-colors">SHOP</a>
            <a href="#sculpted-gallery-frame" className="hover:text-charcoal transition-colors">ABOUT</a>
            <a href="#clinical-benefits-section" className="hover:text-charcoal transition-colors">SCIENCE</a>
            <a href="#ingredients-section-core" className="hover:text-charcoal transition-colors">INGREDIENTS</a>
            <a href="#clinical-ritual-section" className="hover:text-charcoal transition-colors">JOURNAL</a>
          </nav>
 
          {/* Right Side: Search and Utility Cart Bag */}
          <div className="flex items-center gap-4 sm:gap-6" id="right-nav-meta">
            {/* Search mockup icon as requested by laptop mockup visual details */}
            <button 
              onClick={() => {
                const el = document.getElementById('faq-search-box-input');
                if (el) {
                  el.focus();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="p-1.5 hover:bg-charcoal/5 transition-colors cursor-pointer text-charcoal" 
              title="Search Medical Archives"
              id="global-search-trigger"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <a href="#developer-drawer-wrapper" className="hidden xl:inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-grey hover:underline">
              ⚡ Shopify 2.0 Code Drawer
            </a>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 tracking-[0.1em] text-charcoal font-sans font-bold text-[11px] py-1.5 px-3 hover:bg-charcoal/5 transition-colors cursor-pointer relative"
              id="view-bag-trigger-btn"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-charcoal" />
                {cartItem && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-charcoal text-pearl text-[9px] font-sans font-bold flex items-center justify-center animate-pulse">
                    {cartItem.quantity}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline uppercase">BAG</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. MAIN PRODUCT SHOP SYSTEM LAYOUT */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 bg-transparent" id="main-product-layout">
        
        {/* 2.5 BRAND EDITORIAL BILLBOARD (Awaken Your Eyes - laptop mockup representation) */}
        <section className="max-w-[1300px] mx-auto mt-6 border border-charcoal/8 bg-ivory grid grid-cols-1 md:grid-cols-12 overflow-hidden" id="lifestyle-editorial-billboard">
          <div className="md:col-span-6 p-8 sm:p-14 lg:p-18 flex flex-col justify-center items-start text-left bg-ivory relative z-10">
            <span className="text-[10px] tracking-[0.2em] font-bold text-grey uppercase mb-3 block">
              CLINICAL INNOVATION • REVIVE EYE
            </span>
            <h2 className="font-cinzel text-3.5xl sm:text-4.5xl lg:text-5.5xl font-light text-charcoal leading-[1.15] mb-4">
              Awaken<br/>Your Eyes
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-8 max-w-sm font-light">
              Advanced clinical skincare powered by our double-action cellular renewal matrix. Engineered for brighter, firmer, more youthful eyes.
            </p>
            <a 
              href="#product-hero-core"
              className="px-8 py-3.5 bg-charcoal text-pearl font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-opacity-90 transition-all duration-350 select-none cursor-pointer border border-charcoal"
              id="billboard-shop-now-btn"
            >
              SHOP NOW &mdash; $68.00
            </a>
          </div>
          
          <div className="md:col-span-6 min-h-[300px] md:min-h-full relative overflow-hidden group" id="billboard-img-container">
            <img 
              src={ASSET_IMAGES.stone} 
              alt="REVIVE serum on architectural marble stone" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:scale-103 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Subtle ivory overlay matching the layout colors on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-ivory via-transparent to-transparent opacity-30 pointer-events-none" />
          </div>
        </section>
        
        {/* Core Product Presentation (Columns & Selectors) */}
        <section className="bg-transparent" id="product-hero-anchor">
          <ProductHero onAddToCart={handleAddToCart} />
        </section>

        {/* Clinical Benefits Block Deck */}
        <Benefits />

        {/* Bio-Active Formulation Breakdown Section */}
        <Ingredients />

        {/* Workflow & Application Instructions */}
        <ClinicalRitual />

        {/* Editorial Composition masonry grid */}
        <EditorialGallery />

        {/* FAQ Accordions Feed */}
        <FAQ />

        {/* Patient Evaluations and Trial Stats */}
        <Reviews />

        {/* Shopify Source Theme Developer Drawer */}
        <LiquidSourceDrawer />

      </main>

      {/* 4. BRAND FOOTER BLOCK */}
      <footer className="bg-charcoal text-pearl mt-24 border-t border-pearl/10 py-16 px-6 font-sans text-xs" id="pdp-footer">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12" id="footer-grid">
          
          <div className="space-y-4" id="footer-col-brand">
            <h4 className="font-cinzel text-base tracking-widest text-white uppercase">
              REVIVE CLINICAL
            </h4>
            <div className="w-6 h-px bg-[#C5A880]" />
            <p className="font-sans leading-relaxed text-pearl/60 font-light">
              Advanced, clean clinical bio-actives precision-engineered to restore orbital dermal density. Tested, verified, and audited under rigid ophthalmic parameters.
            </p>
          </div>

          <div className="space-y-4" id="footer-col-nav">
            <h4 className="font-cinzel text-xs tracking-wider font-semibold text-white uppercase">
              Dermal Studies
            </h4>
            <ul className="space-y-2 text-pearl/60">
              <li><a href="#product-hero-core" className="hover:underline">Orbital Serum 15ml</a></li>
              <li><a href="#ingredients-section-core" className="hover:underline">Advanced Peptides Study</a></li>
              <li><a href="#reviews-section-core" className="hover:underline">Clinical Trial Percentages</a></li>
              <li><a href="#faq-section-wrapper" className="hover:underline">Medical Practitioner Registry</a></li>
            </ul>
          </div>

          <div className="space-y-4" id="footer-col-philosophy">
            <h4 className="font-cinzel text-xs tracking-wider font-semibold text-white uppercase">
              Formula Parameters
            </h4>
            <p className="text-pearl/60 leading-relaxed font-light">
              100% Fragrance-Free. Allergen-Free. Retinol-Free. Safe for contact lens users, sensitive eye barriers, and eyelash extension adhesives.
            </p>
          </div>

          <div className="space-y-4" id="footer-col-contact">
            <h4 className="font-cinzel text-xs tracking-wider font-semibold text-white uppercase">
              Clinical Registry
            </h4>
            <p className="text-pearl/60 leading-relaxed font-light">
              Dermal formulation coordinates recorded under USP Lab registration guidelines. Handled inside cryogenic environments.
            </p>
            <div className="text-[10px] text-[#C5A880] font-mono tracking-wider font-semibold block uppercase">
              EST. 2026 CLINICAL STUDY
            </div>
          </div>

        </div>

        {/* Global Copyright disclaimer */}
        <div className="max-w-[1200px] mx-auto border-t border-pearl/10 mt-12 pt-8 text-center text-pearl/40 flex flex-col md:flex-row md:justify-between items-center gap-4 text-[10px]" id="footer-copyright-row">
          <p>© 2026 REVIVE Clinical Dermal Laboratories. All dermal rights reserved. Standard Liquid 2.0.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Dermal Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">DTC Terms of Prescription</a>
          </div>
        </div>
      </footer>

      {/* 5. DYNAMIC LUXURY OFF-CANVAS CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItem={cartItem}
        onRemove={handleRemoveCartItem}
      />

      {/* 6. FIXED STICKY MOBILE ADD TO CART (CRO standard, scrolls into view dynamically on mobile layout) */}
      <AnimatePresence>
        {showStickyATC && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1C1C1C] text-[#F7F6F3] p-4 flex items-center justify-between z-40 outline-hidden border-t border-white/5 shadow-2xl"
            id="mobile-sticky-atc-bar"
          >
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-xs font-semibold tracking-wider text-[#EDE6D9] uppercase line-clamp-1">
                REVIVE Advanced Eye
              </span>
              <span className="font-sans text-xs tracking-wide text-[#C5A880] font-bold">
                $80.00
              </span>
            </div>

            <button
              onClick={() => {
                handleAddToCart({
                  title: `REVIVE ${PRODUCT_DATA.title}`,
                  variantName: 'Single Bottle (15ml)',
                  quantity: 1,
                  price: 80.00,
                  type: 'one-time'
                });
              }}
              className="bg-[#F7F6F3] text-[#1C1C1C] font-serif text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 transform select-none cursor-pointer"
              id="sticky-atc-action-btn"
            >
              Add To Bag
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
