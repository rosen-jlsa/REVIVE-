import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Eye, Sparkles, Heart, Plus, Minus, ArrowRight, RefreshCw, ZoomIn } from 'lucide-react';
import { PRODUCT_DATA, VARIANTS, ASSET_IMAGES } from '../data';
import { Variant, PurchaseOption } from '../types';

interface ProductHeroProps {
  onAddToCart: (item: {
    title: string;
    variantName: string;
    quantity: number;
    price: number;
    type: 'one-time' | 'subscription';
  }) => void;
}

export default function ProductHero({ onAddToCart }: ProductHeroProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(VARIANTS[0]);
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscription'>('one-time');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLensVisible, setIsLensVisible] = useState<boolean>(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [zoomBackgroundPos, setZoomBackgroundPos] = useState('0% 0%');
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  // Gallery images array
  const galleryImages = [
    { src: ASSET_IMAGES.product, alt: 'REVIVE Advanced Eye Serum with steel rollerball next to luxury branding box' },
    { src: ASSET_IMAGES.stone, alt: 'Active serum container lying over wet raw white marble and dark granite stones' },
    { src: ASSET_IMAGES.eyes, alt: 'Macro shot of hydrated glowing eye skin representing dermatological treatment' },
    { src: ASSET_IMAGES.texture, alt: 'Macro translucent eye gel serum texture showing tiny oxygen bubbles' },
    { src: ASSET_IMAGES.clinic, alt: 'Pristine sunlit clinical laboratory setup reflecting scientific precision' }
  ];

  // Dynamic Prices
  const basePrice = selectedVariant.price;
  const isSubscriber = purchaseType === 'subscription';
  const unitPrice = isSubscriber ? Number((basePrice * 0.85).toFixed(2)) : basePrice;
  const savingsAmount = isSubscriber ? Number((basePrice * 0.15).toFixed(2)) : 0;

  // Handles active product zoom placement
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Convert to percentage for CSS property background position
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setLensPos({ x: x - 50, y: y - 50 }); // Center the 100px lens
    setZoomBackgroundPos(`${xPercent}% ${yPercent}%`);
  };

  const handleAddToCartClick = () => {
    onAddToCart({
      title: `REVIVE ${PRODUCT_DATA.title}`,
      variantName: selectedVariant.name,
      quantity,
      price: unitPrice,
      type: purchaseType
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-8 lg:py-16 max-w-[1300px] mx-auto text-charcoal font-sans" id="product-hero-core">
      
      {/* LEFT: Premium Clinical Gallery Layout (Outer col span 7) */}
      <div className="lg:col-span-7 flex flex-col gap-4" id="gallery-column">
        {/* Main Focus Viewport */}
        <div 
          className="relative aspect-square overflow-hidden bg-white/50 border border-charcoal/5 cursor-zoom-in group select-none flex items-center justify-center p-2"
          onMouseEnter={() => setIsLensVisible(true)}
          onMouseLeave={() => setIsLensVisible(false)}
          onMouseMove={handleMouseMove}
          id="main-image-viewport"
        >
          <img
            src={galleryImages[activeImageIndex].src}
            alt={galleryImages[activeImageIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out z-10"
            referrerPolicy="no-referrer"
          />

          {/* Luxury Lens Overlay Indicator */}
          <div className="absolute top-4 left-4 z-20 bg-charcoal/80 text-pearl py-1.5 px-3 uppercase text-[10px] tracking-widest font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            HOVER TO DISCOVER MOLECULAR DESIGN
          </div>

          {/* Zoom Window Panel (Absolute overlay matching the target on hover) */}
          <AnimatePresence>
            {isLensVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-30 pointer-events-none border border-charcoal/10"
                style={{
                  backgroundImage: `url(${galleryImages[activeImageIndex].src})`,
                  backgroundPosition: zoomBackgroundPos,
                  backgroundSize: '220%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Thumbnails Grid */}
        <div className="grid grid-cols-5 gap-3" id="thumbnails-row">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`aspect-square relative overflow-hidden border transition-all duration-300 p-0.5 bg-white cursor-pointer ${
                activeImageIndex === idx 
                  ? 'border-charcoal shadow-sm ring-1 ring-charcoal' 
                  : 'border-charcoal/10 hover:border-charcoal/40'
              }`}
              title={`Switch view to ${img.alt}`}
              id={`thumbnail-btn-${idx}`}
            >
              <img
                src={img.src}
                alt={`Thumbnail preview ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>

        {/* Visual Notice: Clinical Quality Assurance */}
        <div className="bg-ivory/30 border border-charcoal/5 p-4 mt-2 flex items-start gap-3 rounded-xs font-sans text-xs text-charcoal/80 leading-relaxed" id="clinical-gallery-assurance">
          <ShieldCheck className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-charcoal uppercase tracking-wider text-[10px] mb-1">
              Cryogenic Preservation Standard
            </p>
            Each bottle is pressure-sealed in cleanroom environments with zero microbiological exposure. Thermally protected during shipping inside heavy matte carbon boxes.
          </div>
        </div>
      </div>

      {/* RIGHT: High-Intent Product Information Column (Outer col span 5) */}
      <div className="lg:col-span-5 flex flex-col justify-start" id="product-info-column">
        
        {/* Meta / Fine-text Header Badge */}
        <div className="flex items-center gap-2 mb-2" id="meta-badges">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-grey uppercase block mb-3">
            CLINICALLY FORMULATED &bull; FOR ALL SKIN TYPES
          </span>
        </div>

        {/* Product Heading & Sizing */}
        <div className="border-b border-charcoal/8 pb-4 mb-5" id="title-pricing-header">
          <h1 className="font-cinzel text-3xl sm:text-[38px] text-charcoal font-light leading-[1.1] mb-2 uppercase">
            {PRODUCT_DATA.title}
          </h1>
          <p className="font-cinzel italic text-sm text-charcoal/60 mb-2 font-light">
            {PRODUCT_DATA.volume} e / 0.5 FL OZ &bull; Cellular Renewal Matrix
          </p>

          {/* Social Proof Indicator */}
          <div className="flex items-center gap-3 mt-3 font-sans" id="social-proof-stars">
            <span className="text-[#D4AF37] text-sm select-none tracking-tight">★★★★★</span>
            <span className="text-xs font-semibold tracking-tight text-charcoal">
              {PRODUCT_DATA.rating}/5 based on dermatological trials
            </span>
            <span className="text-xs text-charcoal/50 hover:underline cursor-pointer" onClick={() => {
              const el = document.getElementById('reviews-section-core');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              ({PRODUCT_DATA.reviewCount} trials)
            </span>
          </div>
        </div>

        {/* Short Impact Description */}
        <p className="text-sm text-charcoal/80 leading-relaxed mb-6 font-light" id="clinical-impact-desc">
          {PRODUCT_DATA.description}
        </p>

        {/* Variant Selection Frame */}
        <div className="mb-6" id="variant-selection-frame">
          <label className="block text-[11px] font-bold tracking-widest text-[#111111]/60 uppercase mb-3">
            1. Select Active Presentation
          </label>
          <div className="space-y-3">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVariant(v);
                }}
                className={`w-full text-left p-4 border flex items-center justify-between transition-all duration-300 relative rounded-none cursor-pointer ${
                  selectedVariant.id === v.id
                    ? 'border-charcoal bg-white shadow-xs'
                    : 'border-charcoal/10 hover:border-charcoal/30 bg-transparent'
                }`}
                id={`variant-btn-${v.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedVariant.id === v.id ? 'border-charcoal' : 'border-charcoal/30'
                  }`}>
                    {selectedVariant.id === v.id && (
                      <div className="w-2 h-2 rounded-full bg-charcoal" />
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-sm block tracking-wide text-charcoal">{v.name}</span>
                    <span className="text-[10px] text-charcoal/50 uppercase tracking-wider block font-sans">
                      {v.sku} &bull; Medical Glass Presentation
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-semibold text-sm block text-charcoal">
                    ${(isSubscriber ? v.price * 0.85 : v.price).toFixed(2)}
                  </span>
                  {v.compareAtPrice && (
                    <span className="text-xs text-charcoal/40 line-through block font-sans">
                      ${v.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {v.badge && (
                  <span className="absolute -top-2.5 right-4 bg-charcoal text-pearl text-[9px] font-semibold tracking-widest px-2 py-0.5 uppercase z-10-wrapper">
                    {v.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Purchase option panel (mimicking premium subscription app integrations like Recharge) */}
        <div className="mb-6 space-y-3" id="subscription-card-deck">
          <label className="block text-[11px] font-bold tracking-widest text-[#111111]/60 uppercase mb-2">
            2. Choose Purchase Program
          </label>

          {/* Subscribe Box */}
          <div
            onClick={() => setPurchaseType('subscription')}
            className={`transition-all duration-300 p-4 flex justify-between items-center cursor-pointer select-none border ${
              purchaseType === 'subscription'
                ? 'border-charcoal bg-white shadow-xs'
                : 'border-charcoal/10 opacity-80 hover:opacity-100 bg-transparent'
            }`}
            id="subscription-box-choice"
          >
            <div>
              <div className="font-semibold text-[13px] text-charcoal mb-1">Subscribe & Save 15%</div>
              <div className="text-[11px] text-charcoal/50">Delivered every 30 days. Cancel anytime.</div>
            </div>
            <div className="font-semibold text-charcoal">
              ${(basePrice * 0.85).toFixed(2)}
            </div>
          </div>

          {/* One-time Box */}
          <div
            onClick={() => setPurchaseType('one-time')}
            className={`transition-all duration-300 p-4 flex justify-between items-center cursor-pointer select-none border ${
              purchaseType === 'one-time'
                ? 'border-charcoal bg-white shadow-xs'
                : 'border-charcoal/10 opacity-75 hover:opacity-100 bg-transparent'
            }`}
            id="one-time-box-choice"
          >
            <div>
              <div className="font-semibold text-[13px] text-charcoal">One-time Purchase</div>
              <div className="text-[11px] text-charcoal/50">Single release under standard order prescription</div>
            </div>
            <div className="font-semibold text-charcoal">
              ${basePrice.toFixed(2)}
            </div>
          </div>

          <AnimatePresence>
            {purchaseType === 'subscription' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-ivory/20 p-3 pt-1 text-xs text-charcoal/70 space-y-2 border-t border-charcoal/5 font-sans"
                id="subscription-benefits-drawer"
              >
                <div className="flex items-center gap-2 text-charcoal font-medium text-[10px] uppercase tracking-wide">
                  <RefreshCw className="w-3.5 h-3.5 text-grey" />
                  VIP Subscriber Benefits Enrolled:
                </div>
                <ul className="list-disc pl-4 space-y-1 text-charcoal/75 text-[11px] leading-relaxed">
                  <li>Unlock 15% structural discount on every replenishment cycle</li>
                  <li>Unlock complimentary DHL prioritised express shipping forever</li>
                  <li>Cancel, skip, or edit frequency in two painless clicks from Shopify Admin dashboard</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quantity selector & Add to card action buttons */}
        <div className="space-y-4 mb-6" id="add-to-cart-trigger-box">
          <div className="flex gap-3 items-center">
            {/* Minimalist Quantity Input */}
            <div className="flex items-center border border-charcoal bg-white select-none">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                title="Decrease Quantity"
                id="qty-decrement-btn"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center font-semibold text-sm font-sans" id="qty-display-counter">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-11 h-11 flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                title="Increase Quantity"
                id="qty-increment-btn"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Main Add to Cart */}
            <button
              onClick={handleAddToCartClick}
              className="flex-1 min-h-11 bg-charcoal text-pearl font-montserrat text-[13px] font-semibold tracking-[0.2em] hover:bg-charcoal/90 transition-all duration-300 uppercase flex items-center justify-center gap-3 cursor-pointer p-4"
              id="add-to-cart-main-btn"
            >
              Add To Cart &mdash; ${(unitPrice * quantity).toFixed(2)}
            </button>

            {/* Aesthetic Wishlist heart */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="w-11 h-11 border border-charcoal/20 hover:border-charcoal flex items-center justify-center transition-colors group cursor-pointer"
              title="Add to Wishlist"
              id="wishlist-toggle-btn"
            >
              <Heart className={`w-4.5 h-4.5 transition-colors duration-300 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-charcoal/60 group-hover:text-charcoal'}`} />
            </button>
          </div>

          {/* Complimentary Instant Buy Outlets */}
          <button
            onClick={() => alert(`Redirecting directly to encrypted Shopify VIP Checkout...`)}
            className="w-full h-11 border border-charcoal hover:bg-charcoal hover:text-pearl text-charcoal bg-transparent font-sans text-xs tracking-widest font-semibold transition-all duration-300 uppercase flex items-center justify-center gap-2 cursor-pointer"
            id="express-checkout-btn"
          >
            Express One-Click Checkout
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Minimalist trust badge strip below buttons */}
        <div className="flex gap-4 flex-wrap text-[11px] text-grey tracking-[0.05em] mt-6 mb-4" id="pdp-trust-badges">
          <span>🔬 Clinically Proven</span>
          <span>👁️ Dermatologist Tested</span>
          <span>🌱 Fragrance Free</span>
        </div>

        {/* Minimalist bulleted value statements */}
        <div className="border-t border-charcoal/10 pt-4" id="clinical-bullets-panel">
          <ul className="space-y-2.5">
            {PRODUCT_DATA.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs text-charcoal/70 leading-relaxed font-sans">
                <span className="text-charcoal text-sm leading-none shrink-0">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
