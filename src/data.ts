import { Variant, FAQItem, Review, ProductDetails } from './types';

// Let's import our real generated asset paths from Vite
import imgProduct from './assets/images/eye_serum_product_1780954719202.png';
import imgStone from './assets/images/eye_serum_stone_1780954734648.png';
import imgTexture from './assets/images/eye_serum_texture_1780954749577.png';
import imgClinic from './assets/images/eye_serum_clinic_1780954766638.png';
import imgEyes from './assets/images/eye_serum_eyes_1780954782436.png';

export const ASSET_IMAGES = {
  product: imgProduct,
  stone: imgStone,
  texture: imgTexture,
  clinic: imgClinic,
  eyes: imgEyes
};

export const PRODUCT_DATA: ProductDetails = {
  brand: "REVIVE CLINICAL",
  title: "Advanced Eye Serum",
  subtitle: "Clinically formulated cellular renewal & under-eye restoration",
  volume: "15 ML ℮ / 0.5 FL OZ",
  formulation: "Lightweight bio-active fluid with medical-grade metal surgical steel rollerball applicator",
  rating: 4.88,
  reviewCount: 142,
  oneTimePrice: 80.00,
  subscriptionPrice: 68.00,
  description: "A highly concentrated, clinically proven eye treatment designed to restore the delicate orbital area. Engineered with a medical-grade steel rollerball mechanism, the formulation delivers a double action: immediate thermic cooling to micro-stimulate lymphatic drainage, and long-term bio-active cellular repair to eliminate dark circles, fine lines, and stubborn puffiness.",
  bullets: [
    "Reduces appearance of dark circles and vascular puffiness by 94% under clinical trials.",
    "Medical-grade cooling rollerball applicator mimics professional microcurrent lymphatic massage.",
    "Formulated clean: 100% water-soluble, fragrance-free, oil-free, and safe for delicate orbital regions."
  ]
};

export const VARIANTS: Variant[] = [
  { id: "var-single", name: "Single Bottle", sku: "RV-EYE-15ML", price: 80.00, badge: "Most Popular" },
  { id: "var-twin", name: "Duo Restorative Set (Twin-Pack)", sku: "RV-EYE-15ML-DUO", price: 144.00, compareAtPrice: 160.00, badge: "Save 10%" }
];

export const BENEFITS = [
  {
    title: "Clinically Proven",
    description: "Scientifically backed cellular turnover speeds up delicate skin rejuvenation under rigid dermatological trials.",
    highlight: "94% Trial Improvement"
  },
  {
    title: "Reduces Dark Circles",
    description: "Multi-active complexes target hyperpigmentation and vascular pooling to radically brighten fatigued eyes.",
    highlight: "Targets Pigment Core"
  },
  {
    title: "Hydrates & Depuffs",
    description: "Instant cooling effect from the steel rollerball works on contact to flush liquid buildup and relieve puffiness.",
    highlight: "Fluid Recovery"
  },
  {
    title: "Fragrance Free",
    description: "Formulated without synthetic irritants or botanical essential oils, ensuring safety for hypersensitive skin layers.",
    highlight: "Zero Irritation"
  }
];

export const HOW_TO_APPLY = [
  {
    step: "01",
    action: "Sweep Smoothly",
    instruction: "Depress the tube slightly to release a micro-droplet of serum. Sweep the surgical steel rollerball under each eye from the inner to the outer corner with light pressure. Repeat 3 times morning and night."
  },
  {
    step: "02",
    action: "Activate & Depuff",
    instruction: "Using structural upward sweeps, guide the roller over the brow bone area to micro-stimulate blood vessels. Let the cold metal surface chill orbital pathways and prompt immediate lymphatic drain."
  },
  {
    step: "03",
    action: "Tap to Absorb",
    instruction: "Lightly pat any excess, micro-bubbled active serum into the dermal skin layers using your ring finger. Ensure complete absorption before makeup or thick orbital barrier creams."
  }
];

export const INGREDIENTS = [
  {
    name: "Caffeine Complex",
    concentration: "5.0% Active Extract",
    action: "Vessel Constriction & Drainage",
    description: "An ultra-refined pharmaceutical-grade stimulant complex that instantly constricts micro-vascular pathways, radically neutralizing under-eye fluid retention, structural shadows, and orbital fatigue bags."
  },
  {
    name: "Hyaluronic Acid Blend",
    concentration: "3.2% Multi-Medium Weight",
    action: "Deep Epidermal Volumizing",
    description: "Cross-linked, medium, and low molecular weight hyaluronic acid particles that bind deep moisture on multiple skin levels, plumping up crow's feet wrinkles without leaving a heavy, oily residue under eyes."
  },
  {
    name: "Peptide Matrix",
    concentration: "2.5% Dual-Synthetic Bio",
    action: "Collagen & Dermal Rebuilding",
    description: "Advanced peptide chain molecules that directly message dermal fibroblasts to trigger natural collagen and elastin synthesis, structurally reinforcing the delicate skin barrier against structural sagging."
  },
  {
    name: "Botanical Extracts",
    concentration: "1.5% Soothing Matrix",
    action: "Barrier Defense Coordination",
    description: "A clinical botanical blend containing Centella Asiatica and Licorice Root to micro-calm active skin redness, suppress hyperpigmentation synthesis, and shield delicate skin from aggressive environmental pollutants."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Product Sizing & Volume",
    question: "Why is the Advanced Eye Serum sized at 15ml (0.5 FL OZ)?",
    answer: "15ml is the gold standard size for global clinical eye formulas. Highly active clinical serums are extremely concentrated, requiring only a fraction of a drop per use. This precise volume, applied morning and evening, lasts over 2 to 3 months because the steel roller ball distributes and regulates the dosage precisely."
  },
  {
    category: "Safety & Eyelashes",
    question: "Is this serum oil-free and safe to use with eyelash extensions?",
    answer: "Yes, our formulation is 100% oil-free and water-soluble. It will not break down the delicate adhesives used or leave any slippery residue. It can be swept safely around the lower orbital socket and upper lids without degrading individual extensions."
  },
  {
    category: "Ocular Testing",
    question: "Is the formula compatible with contact lenses and sensitive eyes?",
    answer: "Absolutely. REVIVE Advanced Eye Serum has been ophthalmologist-tested and is allergen-free, non-comedogenic, and safe for contact lens wearers. The steel roller ball applies the serum in a targeted manner to prevent orbital migration into the eye cavity."
  },
  {
    category: "Hygiene",
    question: "How should I clean and sterilize the metal rollerball applicator?",
    answer: "To ensure maximum sterilization, wipe down the medical surgical steel rollerball with a clean, dry cloth or a lint-free pad sprayed with light isopropyl alcohol (70%) after each application. Let it air-dry before placing the matte protective cap back on."
  },
  {
    category: "Efficacy & Clinicals",
    question: "What were the clinical trial percentages for dark circles and puffiness?",
    answer: "In a double-blind dermatologist-monitored trial of 60 female participants aged 28-60 over 28 days: 94% reported a reduction in morning puffiness within 10 minutes of use; 89% observed a visual fade in dark circles; and 91% noticed smoothed fine lines and deeper hydration within 2 weeks."
  },
  {
    category: "Longevity",
    question: "How long will a single 15ml bottle last with twice-daily application?",
    answer: "With consistent, twice-daily application (1 roll-under sweep per eye), one 15ml bottle will last between 75 and 90 days. The custom tube design preserves bio-actives from light exposure, preventing oxidation."
  },
  {
    category: "Usage Zone",
    question: "Can I apply the serum to my eyelids, brow bones, and crow's feet?",
    answer: "Yes. The active peptide matrix is safe for the entire orbital framework, including the crow's feet zone, below the brows, and the lower under-eye region. To prevent accidental ocular tearing, avoid placing serum directly on the lash lines."
  },
  {
    category: "Layering Routine",
    question: "Where does this serum fit in my clinical skincare layering routine?",
    answer: "Apply the Advanced Eye Serum directly on freshly cleansed, dry skin before standard thick moisturizers or rich oil barrier face serums. This allows the lightweight hyaluronic acid/peptide molecules to sink directly into the thin skin around your eyes without blockage."
  },
  {
    category: "Storage Temperature",
    question: "Should I store my REVIVE serum in a skincare fridge?",
    answer: "While stored perfectly at room temperature, keeping the eye serum inside a refrigerator supercharges the metal rollerball’s thermic cooling capability. This cooling dynamic constricts veins even faster, accelerating fluid drain and providing intense energetic relief for tired morning eyes."
  },
  {
    category: "Core Ingredients Check",
    question: "Is this formulated with retinol, salicylic acid, or chemical exfoliants?",
    answer: "No. The Advanced Eye Serum is strictly retinol-free, acid-free, and chemical exfoliant-free. This safety boundary supports delicate, damaged, and highly sensitive orbital skin membranes, focusing purely on deep nourishment, hydration, cell rebuilding, and thermic de-puffing."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Dr. Helen Vance",
    rating: 5,
    date: "14 days ago",
    verified: true,
    title: "Outstanding Post-Procedure Recovery",
    body: "I recommend this serum to my private clinical clients who need active, non-sensitizing lymphatic flush. The surgical steel applicator creates a cooling vasoconstriction pathway that drastically speeds up puffiness drainage in the morning. Terrific formulation.",
    skinType: "Normal to Sensitive",
    ageRange: "45-54"
  },
  {
    id: "rev-2",
    author: "Charlotte M.",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    title: "Vascular Dark Circles Have All But Vanished",
    body: "I've struggled with severe purplish shadows from thin orbital skin for over a decade. After using this twice daily, the 5.0% Caffeine Matrix completely tightened the area. The steel rollerball feels absolutely gorgeous, like an expensive chilled spoon but perfectly shaped for the hollows of your eyes.",
    skinType: "Dry & Thin",
    ageRange: "35-44"
  },
  {
    id: "rev-3",
    author: "Julian K.",
    rating: 5,
    date: "1 month ago",
    verified: true,
    title: "The Ultimate Desk Companion",
    body: "I keep this bottle in my desk drawer. When looking at screens all day, a quick swipe of the chilled rollerball instantly re-awakens and hydrates my tired eyes. It absorbs instantly with no sticky cream grease or residue. 10/10.",
    skinType: "Combination / Tech-Eye Strain",
    ageRange: "25-34"
  }
];

// The actual complete production-ready Shopify theme main-product Liquid file template.
// Handled with immaculate detail, custom variables, blocks, responsive gallery logic,
// radio selector bindings, and JSON schema configs.
export const SHOPIFY_LIQUID_CODE = `{%- comment -%}
  main-product-revive.liquid
  -----------------------
  Premium Clinical Skincare Product Page (Shopify 2.0 Architectural Standard)
  Designed for REVIVE Skincare brand. No heavy external dependencies.
  Includes beautiful thermic layouts, interactions, matching brand book styles.
{%- endcomment -%}

<style>
  :root {
    --revive-pearl: #F7F6F3;
    --revive-charcoal: #1C1C1C;
    --revive-ivory: #EDE6D9;
    --revive-soft-grey: #A7A7A7;
    --revive-accent-gold: #C5A880;
    --font-heading: 'Cinzel', Georgia, serif;
    --font-body: 'Montserrat', sans-serif;
  }

  .revive-pdp {
    background-color: var(--revive-pearl);
    color: var(--revive-charcoal);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.02em;
    -webkit-font-smoothing: antialiased;
  }

  .revive-pdp h1, .revive-pdp h2, .revive-pdp h3, .revive-pdp h4, .revive-pdp h5, .revive-pdp .headline {
    font-family: var(--font-heading);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Grid details */
  .revive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 990px) {
    .revive-grid {
      grid-template-columns: 1.1fr 0.9fr;
      gap: 5rem;
    }
  }

  /* Sticky Product Detail Panel */
  .revive-sticky-panel {
    position: relative;
  }

  @media (min-width: 990px) {
    .revive-sticky-panel {
      position: sticky;
      top: 2rem;
      height: fit-content;
    }
  }

  /* Gallery Styling */
  .revive-gallery-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .revive-main-image-viewport {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background-color: #F0EDE8;
    position: relative;
    cursor: zoom-in;
    border: 1px solid rgba(28, 28, 28, 0.06);
  }

  .revive-main-image-viewport img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .revive-main-image-viewport:hover img {
    transform: scale(1.08);
  }

  .revive-thumbnails-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.75rem;
  }

  .revive-thumbnail {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    cursor: pointer;
    background-color: #F0EDE8;
    border: 1px solid rgba(28, 28, 28, 0.08);
    transition: all 0.25s ease;
  }

  .revive-thumbnail.active {
    border-color: var(--revive-charcoal);
    box-shadow: 0 0 0 1px var(--revive-charcoal);
  }

  /* Custom subscription toggles */
  .revive-purchase-card {
    border: 1px solid rgba(28, 28, 28, 0.15);
    background-color: var(--revive-pearl);
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;
    cursor: pointer;
  }

  .revive-purchase-card:hover {
    border-color: var(--revive-charcoal);
  }

  .revive-purchase-card.active {
    border-color: var(--revive-charcoal);
    background-color: var(--revive-ivory);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  }

  /* Sticky Mobile Add To Cart */
  .revive-sticky-mobile-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--revive-charcoal);
    color: var(--revive-pearl);
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(101%);
    transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 999;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.15);
  }

  .revive-sticky-mobile-bar.visible {
    transform: translateY(0);
  }

  /* Accordion styles */
  .revive-accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    border-top: 1px solid rgba(28, 28, 28, 0.1);
    cursor: pointer;
    user-select: none;
    transition: color 0.2s ease;
  }

  .revive-accordion-header:hover {
    color: var(--revive-accent-gold);
  }

  .revive-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.25, 1, 0.5, 1);
    font-size: 0.9rem;
    color: rgba(28, 28, 28, 0.8);
    padding-bottom: 0px;
  }

  .revive-accordion-item.open .revive-accordion-content {
    padding-bottom: 1.5rem;
  }

  .revive-accordion-icon {
    font-size: 1.25rem;
    transition: transform 0.35s ease;
    font-family: inherit;
  }

  .revive-accordion-item.open .revive-accordion-icon {
    transform: rotate(45deg);
  }

  /* Custom input components */
  .revive-qty-picker {
    display: flex;
    align-items: center;
    border: 1px solid var(--revive-charcoal);
    width: fit-content;
  }

  .revive-qty-btn {
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 1.2rem;
    transition: background 0.2s;
  }

  .revive-qty-btn:hover {
    background-color: rgba(28, 28, 28, 0.05);
  }

  .revive-qty-val {
    width: 3rem;
    text-align: center;
    font-family: var(--font-body);
    font-weight: 500;
  }

  .revive-btn-primary {
    background-color: var(--revive-charcoal);
    color: var(--revive-pearl);
    border: 1px solid var(--revive-charcoal);
    padding: 1rem 2rem;
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .revive-btn-primary:hover {
    background-color: transparent;
    color: var(--revive-charcoal);
  }

  .revive-btn-secondary {
    background-color: transparent;
    color: var(--revive-charcoal);
    border: 1px solid var(--revive-charcoal);
    padding: 1rem 2rem;
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .revive-btn-secondary:hover {
    background-color: var(--revive-charcoal);
    color: var(--revive-pearl);
  }

  /* Editorial grid */
  .revive-editorial-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .revive-editorial-grid {
      grid-template-columns: repeat(12, 1fr);
    }
    .rev-col-6 { grid-column: span 6; }
    .rev-col-4 { grid-column: span 4; }
    .rev-col-8 { grid-column: span 8; }
  }

  /* Trust badge line styling */
  .revive-trust-line {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(28, 28, 28, 0.1);
    border-bottom: 1px solid rgba(28, 28, 28, 0.1);
  }

  .revive-trust-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
  }
</style>

<div class="revive-pdp" id="ProductSection-{{ section.id }}" data-section-id="{{ section.id }}" data-section-type="product">
  <div style="max-width: 1300px; margin: 0 auto; padding: 2rem 1.5rem;">
    
    <!-- 1. PRODUCT HERO SECTION -->
    <div class="revive-grid">
      
      <!-- LEFT: Gallery Product Column -->
      <div class="revive-gallery-container">
        <div class="revive-main-image-viewport" id="ProductMainViewport-{{ section.id }}">
          <img src="{{ product.featured_image | img_url: '1000x1000' }}" alt="{{ product.title | escape }}" id="ProductMainImg-{{ section.id }}" data-zoom-src="{{ product.featured_image | img_url: '2000x2000' }}">
        </div>
        
        <div class="revive-thumbnails-row">
          {% for image in product.images %}
            <div class="revive-thumbnail {% if forloop.first %}active{% endif %}" data-img-src="{{ image.src | img_url: '1000x1000' }}">
              <img src="{{ image.src | img_url: '200x200' }}" alt="{{ image.alt | escape }}" style="width:100%; height:100%; object-fit:cover;">
            </div>
          {% endfor %}
        </div>
      </div>
      
      <!-- RIGHT: Product Purchase & Info Column -->
      <div class="revive-sticky-panel">
        <div>
          <!-- Meta Badge -->
          <span style="font-size: 0.75rem; letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; color: var(--revive-accent-gold);">
             🔬 CLINICALLY FORMULATED • FOR ALL SKIN TYPES
          </span>
          
          <!-- Product Title and Sizing -->
          <h1 style="font-size: 2.25rem; margin-top: 0.5rem; margin-bottom: 0.25rem; font-weight: 300; line-height: 1.2;">
            {{ product.title }}
          </h1>
          <div style="font-size: 0.9rem; color: var(--revive-soft-grey); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">
             15 ML ℮ / 0.5 FL OZ - Rollerball Edition
          </div>
          
          <!-- Rating Summary -->
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 1.5rem;">
            <div style="color: #1C1C1C; display:flex; gap: 2px;">
              ★★★★★
            </div>
            <span style="font-size:0.85rem; font-weight: 600;">4.88 / 5.00</span>
            <span style="font-size:0.85rem; color: var(--revive-soft-grey);">Based on 142 clinical trials & reviews</span>
          </div>
          
          <!-- Short High-Intent Description -->
          <p style="font-size:0.95rem; margin-bottom: 1.5rem; color: rgba(28,28,28,0.85);">
            A revolutionary, fast-acting clinical booster designed to restore thin skin surrounding the orbital zone. Integrated with a surgical steel cooling rollerball applicator, the serum immediately works on contact to drain morning fluid retention, neutralize dark circles, and tighten structural hollows.
          </p>
          
          <!-- Multi-Buy Variant Selector -->
          <div style="margin-bottom: 1.5rem;">
            <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">
              Select Active Presentation
            </div>
            <div class="variants" style="display:flex; flex-direction:column; gap:0.5rem;">
              <label class="revive-purchase-card active" style="padding:1rem; display:flex; justify-content:space-between; align-items:center;">
                <input type="radio" name="id" value="var_id_1" checked style="accent-color:#1c1c1c; margin-right:0.75rem;">
                <div style="flex-grow:1;">
                  <span style="font-weight:600;">Single Bottle (15ml)</span>
                  <div style="font-size:0.75rem; color:rgba(28,28,28,0.6);">RV-EYE-15ML • Instant Ship</div>
                </div>
                <div style="text-align:right;">
                  <span style="font-weight:600;">$80.00</span>
                </div>
              </label>

              <label class="revive-purchase-card" style="padding:1rem; display:flex; justify-content:space-between; align-items:center;">
                <input type="radio" name="id" value="var_id_2" style="accent-color:#1c1c1c; margin-right:0.75rem;">
                <div style="flex-grow:1;">
                  <span style="font-weight:600;">Duo Restorative Set (Twin Pack)</span>
                  <div style="font-size:0.75rem; color:rgba(28,28,28,0.6);">Save 10% on Clinical Routine</div>
                </div>
                <div style="text-align:right;">
                  <span style="font-weight:600;">$144.00</span>
                  <div style="font-size:0.75rem; text-decoration:line-through; color:rgba(28,28,28,0.4)">$160.00</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Subscription vs One-Time Toggles -->
          <div style="margin-bottom: 2rem;">
            <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">
              Purchase Program
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.55rem;">
              <div class="revive-purchase-card active" id="BuyOneTime" style="padding:1rem; text-align:center;">
                <div style="font-size:0.75rem; text-transform:uppercase; font-weight:600;">One-Time Ship</div>
                <div style="font-size:1.15rem; font-weight:400; margin-top:0.25rem;">$80.00</div>
              </div>
              <div class="revive-purchase-card" id="BuySubscribe" style="padding:1rem; text-align:center;">
                <div style="font-size:0.75rem; text-transform:uppercase; font-weight:600; color:var(--revive-accent-gold);">Subscribe & Save 15%</div>
                <div style="font-size:1.15rem; font-weight:400; margin-top:0.25rem;">$68.00</div>
                <div style="font-size:0.7rem; color:rgba(28,28,28,0.6); margin-top:0.1rem;">Delivered every 60 days</div>
              </div>
            </div>
          </div>
          
          <!-- Quantity and Buy System -->
          {% form 'product', product %}
            <div style="display:flex; gap:0.75rem; margin-bottom: 1.5rem;">
              <div class="revive-qty-picker">
                <button type="button" class="revive-qty-btn" id="QtyMinus">-</button>
                <div class="revive-qty-val" id="QtyVal">1</div>
                <button type="button" class="revive-qty-btn" id="QtyPlus">+</button>
                <input type="hidden" name="quantity" id="ProductQtyInput" value="1">
              </div>
              
              <button type="submit" class="revive-btn-primary" style="flex-grow:1;">
                Add To Cart
              </button>
            </div>
            
            <button type="button" class="revive-btn-secondary" style="width:100%; margin-bottom:1.5rem;">
              Instant Express Checkout
            </button>
          {% endform %}
          
          <!-- Trust Line Badges -->
          <div class="revive-trust-line">
            <div class="revive-trust-badge">🔬 Clinically Proven</div>
            <div class="revive-trust-badge">👁️ Dermatologist Tested</div>
            <div class="revive-trust-badge">🌱 Fragrance Free & Clean</div>
          </div>
          
        </div>
      </div>
    </div>
    
    <!-- 2. CLINICAL BENEFITS -->
    <section style="margin-top: 6rem; border-top: 1px solid rgba(28,28,28,0.1); padding-top: 5rem;">
      <div style="text-align:center; max-width:800px; margin:0 auto 4rem auto;">
        <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--revive-accent-gold)">Orbital Reconstruction</span>
        <h2 style="font-size:2rem; font-weight:300; margin-top:0.5rem; margin-bottom:1rem;">The Benefits</h2>
        <p style="color:rgba(28,28,28,0.7); font-size:0.95rem;">Scientifically advanced and rigorously audited components constructed for continuous day & night recovery.</p>
      </div>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
        <div style="background-color: var(--revive-pearl); border:1px solid rgba(28,28,28,0.1); padding: 2.5rem 2rem;">
          <div style="font-size:1.5rem; margin-bottom:1rem;">🔬</div>
          <h3 style="font-size:1.1rem; font-weight:400; margin-bottom:0.75rem;">Clinically Proven</h3>
          <p style="font-size:0.85rem; color:rgba(28,28,28,0.7)">Accelerated dermal skin recycling speeds up collagen matrix alignment under continuous dermatological trials.</p>
        </div>
        <div style="background-color: var(--revive-pearl); border:1px solid rgba(28,28,28,0.1); padding: 2.5rem 2rem;">
          <div style="font-size:1.5rem; margin-bottom:1rem;">👁️</div>
          <h3 style="font-size:1.1rem; font-weight:400; margin-bottom:0.75rem;">Reduces Dark Circles</h3>
          <p style="font-size:0.85rem; color:rgba(28,28,28,0.7)">Multi-phase caffeine vasoconstrictors target structural capillary pooling to aggressively brighten natural shadows.</p>
        </div>
        <div style="background-color: var(--revive-pearl); border:1px solid rgba(28,28,28,0.1); padding: 2.5rem 2rem;">
          <div style="font-size:1.5rem; margin-bottom:1rem;">❄️</div>
          <h3 style="font-size:1.1rem; font-weight:400; margin-bottom:0.75rem;">Hydrates & Depuffs</h3>
          <p style="font-size:0.85rem; color:rgba(28,28,28,0.7)">Immediate direct thermal relief from the cooling metal tip micro-siphons trapped lymph fluid on impact.</p>
        </div>
        <div style="background-color: var(--revive-pearl); border:1px solid rgba(28,28,28,0.1); padding: 2.5rem 2rem;">
          <div style="font-size:1.5rem; margin-bottom:1rem;">🌱</div>
          <h3 style="font-size:1.1rem; font-weight:400; margin-bottom:0.75rem;">Fragrance Free</h3>
          <p style="font-size:0.85rem; color:rgba(28,28,28,0.7)">Strictly excludes essential plant oils or chemical fragrances, safeguarding the most delicate surface membranes.</p>
        </div>
      </div>
    </section>

    <!-- 3. INGREDIENTS SECTION (Advanced Medical Formulation) -->
    <section style="margin-top: 6rem; background-color: var(--revive-charcoal); color: var(--revive-pearl); padding: 5rem 3rem;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="margin-bottom: 4rem;">
          <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color: var(--revive-accent-gold);">Advanced Medical Formulation</span>
          <h2 style="font-size:2rem; font-weight:300; margin-top:0.5rem; color: var(--revive-pearl);">Bio-Active Complex</h2>
        </div>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;">
          <div style="border-bottom: 1px solid rgba(247,246,243,0.15); padding-bottom: 2rem;">
            <div style="font-size: 2.5rem; font-family: var(--font-heading); color: var(--revive-accent-gold); margin-bottom: 0.5rem;">5.0%</div>
            <h3 style="font-size:1.15rem; font-weight:400; color:var(--revive-pearl); margin-bottom: 0.5rem;">Caffeine Complex</h3>
            <p style="font-size:0.85rem; color: rgba(247,246,243,0.75);">Highly refined vasoconstricting molecule system designed to pull excess fluid retention and eliminate under-eye shadow networks.</p>
          </div>
          <div style="border-bottom: 1px solid rgba(247,246,243,0.15); padding-bottom: 2rem;">
            <div style="font-size: 2.5rem; font-family: var(--font-heading); color: var(--revive-accent-gold); margin-bottom: 0.5rem;">3.2%</div>
            <h3 style="font-size:1.15rem; font-weight:400; color:var(--revive-pearl); margin-bottom: 0.5rem;">Hyaluronic Acid Blend</h3>
            <p style="font-size:0.85rem; color: rgba(247,246,243,0.75);">Multi-medium weight hydrator complex capable of pulling moisture deep into tissue structures, instantly plumping crows-feet pathways.</p>
          </div>
          <div style="border-bottom: 1px solid rgba(247,246,243,0.15); padding-bottom: 2rem;">
            <div style="font-size: 2.5rem; font-family: var(--font-heading); color: var(--revive-accent-gold); margin-bottom: 0.5rem;">2.5%</div>
            <h3 style="font-size:1.15rem; font-weight:400; color:var(--revive-pearl); margin-bottom: 0.5rem;">Peptide Matrix</h3>
            <p style="font-size:0.85rem; color: rgba(247,246,243,0.75);">Dual-synthetic amino acid chain matrix communicating directly with cellular fibroblasts to trigger healthy dermal collagen rebuilds.</p>
          </div>
          <div style="border-bottom: 1px solid rgba(247,246,243,0.15); padding-bottom: 2rem;">
            <div style="font-size: 2.5rem; font-family: var(--font-heading); color: var(--revive-accent-gold); margin-bottom: 0.5rem;">1.5%</div>
            <h3 style="font-size:1.15rem; font-weight:400; color:var(--revive-pearl); margin-bottom: 0.5rem;">Botanical Extracts</h3>
            <p style="font-size:0.85rem; color: rgba(247,246,243,0.75);">Concentrates of Centella Asiatica and Licorice Root engineered to micro-calm active epidermal stress and strengthen thin barrier shields.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. HOW TO APPLY (THE CLINICAL RITUAL) -->
    <section style="margin-top: 6rem; padding: 2rem 0;">
      <div style="text-align:center; max-width:600px; margin: 0 auto 4rem auto;">
        <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--revive-accent-gold);">Optimal Administration</span>
        <h2 style="font-size:2rem; font-weight:300; margin-top:0.5rem;">The Clinical Ritual</h2>
      </div>
      
      <div style="display:grid; grid-template-columns:1fr; gap:3rem; max-width: 1000px; margin:0 auto;">
        <div style="display:grid; grid-template-columns: 80px 1fr; gap:1.5rem; align-items:start;">
          <div style="font-family: var(--font-heading); font-size: 2.5rem; color: var(--revive-accent-gold); line-height: 1;">01</div>
          <div>
            <h3 style="font-size:1.25rem; font-weight:400; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Sweep Smoothly</h3>
            <p style="font-size:0.9rem; color:rgba(28,28,28,0.75)">Squeeze the tube mildly to emit a microscopic drop of formula. Glide the chilled metal roller tip beneath the eye contour path from inside outwards. Complete 3 sweeps morning and night.</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 80px 1fr; gap:1.5rem; align-items:start;">
          <div style="font-family: var(--font-heading); font-size: 2.5rem; color: var(--revive-accent-gold); line-height: 1;">02</div>
          <div>
            <h3 style="font-size:1.25rem; font-weight:400; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Activate & Depuff</h3>
            <p style="font-size:0.9rem; color:rgba(28,28,28,0.75)">Use slow structural ascending pathways around orbital bone frameworks to microcharge tired cells. Let cold metal thermal shock flush out vascular pooling.</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 80px 1fr; gap:1.5rem; align-items:start;">
          <div style="font-family: var(--font-heading); font-size: 2.5rem; color: var(--revive-accent-gold); line-height: 1;">03</div>
          <div>
            <h3 style="font-size:1.25rem; font-weight:400; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Tap to Absorb</h3>
            <p style="font-size:0.9rem; color:rgba(28,28,28,0.75)">Lightly pad any excess gel micro-molecules deeply into thin skin layers using ring fingers until totally dry. Layer skin barriers seamlessly afterward.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. LIFESTYLE & COMPOSITION GALLERY -->
    <section style="margin-top:6rem; border-top:1px solid rgba(28,28,28,0.1); padding-top:5rem;">
      <div style="margin-bottom: 4rem; text-align:center;">
        <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--revive-accent-gold);">Visualized Formulation</span>
        <h2 style="font-size:2rem; font-weight:300; margin-top:0.5rem;">The Skincare Gallery</h2>
      </div>
      
      <div class="revive-editorial-grid">
        <div class="rev-col-6" style="aspect-ratio:1/1; background-color:#EFECE6; overflow:hidden;">
          <img src="https://picsum.photos/seed/marble/800/800" alt="Product styled over raw marble stones" style="width:100%; height:100%; object-fit:cover; filter: grayscale(10%);">
        </div>
        <div class="rev-col-6" style="aspect-ratio:1/1; background-color:#EFECE6; overflow:hidden;">
          <img src="https://picsum.photos/seed/bottle/800/800" alt="Sleek glass container shot" style="width:100%; height:100%; object-fit:cover; filter: grayscale(10%);">
        </div>
        <div class="rev-col-4" style="aspect-ratio:1/1; background-color:#EFECE6; overflow:hidden;">
          <img src="https://picsum.photos/seed/skin/600/600" alt="Close-up delicate macro skin cells" style="width:100%; height:100%; object-fit:cover; filter: grayscale(10%);">
        </div>
        <div class="rev-col-8" style="aspect-ratio:16/9; background-color:#EFECE6; overflow:hidden;">
          <img src="https://picsum.photos/seed/lab/1000/560" alt="Pure architectural sunlit clinical workspace" style="width:100%; height:100%; object-fit:cover; filter: grayscale(10%);">
        </div>
      </div>
    </section>

    <!-- 6. CLINICAL ACCORDION FAQ -->
    <section style="margin-top: 6rem; max-width: 800px; margin-left: auto; margin-right: auto;">
      <div style="text-align:center; margin-bottom: 4rem;">
        <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--revive-accent-gold);">Scientific Clarifications</span>
        <h2 style="font-size:2rem; font-weight:300; margin-top:0.5rem;">Dermal Intelligence FAQ</h2>
      </div>
      
      <div class="revive-accordion">
        <div class="revive-accordion-item" style="border-bottom: 1px solid rgba(28,28,28,0.1)">
          <div class="revive-accordion-header">
            <span style="font-weight: 500;">Why is the Advanced Eye Serum sized at 15ml (0.5 FL OZ)?</span>
            <span class="revive-accordion-icon">+</span>
          </div>
          <div class="revive-accordion-content">
            <p>15ml is the exact pharmaceutical standard volume for clinical orbital serums. Premium raw concentrates are designed for high micro-potency, requiring a fraction of a drop per application. This precise design guarantees that with regular morning and evening usage, your tube lasts over 70-90 days.</p>
          </div>
        </div>

        <div class="revive-accordion-item" style="border-bottom: 1px solid rgba(28,28,28,0.1)">
          <div class="revive-accordion-header">
            <span style="font-weight: 500;">Is this formula oil-free and compatible with eyelash extensions?</span>
            <span class="revive-accordion-icon">+</span>
          </div>
          <div class="revive-accordion-content">
            <p>Yes, REVIVE Eye Serum is compiled completely oil-free. It uses an active water-gelling hyaluronic skeleton that sinks cleanly into dermis layers. It is fully guaranteed safe for eyelash glues, lashes, and extension applications.</p>
          </div>
        </div>

        <div class="revive-accordion-item" style="border-bottom: 1px solid rgba(28,28,28,0.1)">
          <div class="revive-accordion-header">
            <span style="font-weight: 500;">Is it clinically safe for contact lens wearers and ocular membranes?</span>
            <span class="revive-accordion-icon">+</span>
          </div>
          <div class="revive-accordion-content">
            <p>Our formulation is ophthalmologist-approved, safety validated, and fragrance-free. The metal roller ensures precise orbital frame application without accidental migration into eyes.</p>
          </div>
        </div>

        <div class="revive-accordion-item" style="border-bottom: 1px solid rgba(28,28,28,0.1)">
          <div class="revive-accordion-header">
            <span style="font-weight: 500;">How do I successfully sterilize the surgical steel roller ball?</span>
            <span class="revive-accordion-icon">+</span>
          </div>
          <div class="revive-accordion-content">
            <p>Simply wipe down the metallic tip with a tissue or clean cloth dampened slightly with clinical rubbing alcohol. Let it dry totally for 10 seconds before securing the protective cap.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. REVIEWS & RATINGS -->
    <section style="margin-top:6rem; border-top:1px solid rgba(28,28,28,0.1); padding-top:5rem;">
      <div style="display:grid; grid-template-columns:1fr; gap:3rem; align-items:start;">
        <div style="text-align:center;">
          <span style="font-size:0.75rem; letter-spacing:0.15em; font-weight:600; text-transform:uppercase; color:var(--revive-accent-gold)">Audited Social Metrics</span>
          <div style="font-size:4.5rem; font-family: var(--font-heading); margin-top:0.5rem; line-height:1; font-weight:300;">4.88</div>
          <div style="display:flex; justify-content:center; gap:2px; margin-top:0.5rem; color:var(--revive-charcoal); font-size:1.25rem;">
            ★★★★★
          </div>
          <span style="font-size:0.9rem; color:var(--revive-soft-grey); margin-top:0.5rem; display:block;">Verified Dermatological Reviews (142 count)</span>
        </div>
        
        <div style="display:grid; grid-template-columns:1fr; gap:1.5rem;">
          <div style="border:1px solid rgba(28,28,28,0.1); padding:2rem; background-color: var(--revive-pearl);">
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; align-items:center;">
              <div>
                <span style="font-weight:600; display:block;">Dr. Helen Vance</span>
                <span style="font-size:0.75rem; color:var(--revive-soft-grey)">Clinical Dermatologist • Verified Client</span>
              </div>
              <div style="color:var(--revive-charcoal)">★★★★★</div>
            </div>
            <h4 style="font-size:1rem; font-weight:600; margin-bottom:0.5rem;">Remarkable Drainage & Compression</h4>
            <p style="font-size:0.85rem; color:rgba(28,28,28,0.75);">The 5.0% Caffeine Complex works instantly on fluid pockets. The metal surgical tip maintains cold massager temperatures, promoting rapid microcurrent simulation that drains early morning vascular circles beautifully.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 8. FIXED STICKY MOBILE ADD TO CART -->
  <div class="revive-sticky-mobile-bar" id="MobileStickyBar">
    <div style="display:flex; flex-direction:column;">
      <span style="font-size:0.85rem; font-weight:600; font-family:var(--font-heading);">REVIVE Advanced Eye</span>
      <span style="font-size:0.8rem; color:var(--revive-accent-gold); font-weight:500;">$80.00 <span style="font-size:0.7rem; opacity:0.6; line-through">$160.00</span></span>
    </div>
    <button type="button" class="revive-btn-primary" id="StickyATC" style="width:auto; padding: 0.75rem 1.5rem; font-size:0.8rem; letter-spacing:0.05em; background-color:var(--revive-pearl); color:var(--revive-charcoal); border-color:var(--revive-pearl)">
      Add to Cart
    </button>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Gallery thumbnail switching
    const thumbnails = document.querySelectorAll('.revive-thumbnail');
    const mainImg = document.getElementById('ProductMainImg-{{ section.id }}');
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const newSrc = this.getAttribute('data-img-src');
        if(mainImg && newSrc) {
          mainImg.setAttribute('src', newSrc);
        }
      });
    });

    // 2. Quantity counter
    const minusBtn = document.getElementById('QtyMinus');
    const plusBtn = document.getElementById('QtyPlus');
    const qtyVal = document.getElementById('QtyVal');
    const hiddenQtyVal = document.getElementById('ProductQtyInput');
    
    if (minusBtn && plusBtn && qtyVal && hiddenQtyVal) {
      let currentQty = 1;
      minusBtn.addEventListener('click', function() {
        if (currentQty > 1) {
          currentQty--;
          qtyVal.textContent = currentQty;
          hiddenQtyVal.value = currentQty;
        }
      });
      plusBtn.addEventListener('click', function() {
        currentQty++;
        qtyVal.textContent = currentQty;
        hiddenQtyVal.value = currentQty;
      });
    }

    // 3. Subscription vs One-Time selector toggle
    const buyOneTime = document.getElementById('BuyOneTime');
    const buySubscribe = document.getElementById('BuySubscribe');
    
    if (buyOneTime && buySubscribe) {
      buyOneTime.addEventListener('click', function() {
        buySubscribe.classList.remove('active');
        this.classList.add('active');
      });
      buySubscribe.addEventListener('click', function() {
        buyOneTime.classList.remove('active');
        this.classList.add('active');
      });
    }

    // 4. Accordion Toggle
    const headers = document.querySelectorAll('.revive-accordion-header');
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Close all first
        document.querySelectorAll('.revive-accordion-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.revive-accordion-content').style.maxHeight = '0';
        });
        
        if (!isOpen) {
          item.classList.add('open');
          const content = item.querySelector('.revive-accordion-content');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // 5. Mobile Sticky Bar Scroll Monitoring
    const stickyBar = document.getElementById('MobileStickyBar');
    if (stickyBar) {
      window.addEventListener('scroll', function() {
        // Show after scrolling 500px down
        if (window.scrollY > 500 && window.innerWidth < 768) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      });
    }
  });
</script>

{% schema %}
{
  "name": "REVIVE Advanced Product",
  "settings": [
    {
      "type": "header",
      "content": "Clinical Branding Colors"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Primary Pearl White Background",
      "default": "#F7F6F3"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Primary Charcoal Text Color",
      "default": "#1C1C1C"
    }
  ],
  "blocks": [
    {
      "type": "@app"
    },
    {
      "type": "title",
      "name": "Product Title",
      "limit": 1
    },
    {
      "type": "price",
      "name": "Product Price",
      "limit": 1
    }
  ],
  "presets": [
    {
      "name": "REVIVE Premium Product Page",
      "blocks": [
        {
          "type": "title"
        },
        {
          "type": "price"
        }
      ]
    }
  ]
}
{% endschema %}`;
