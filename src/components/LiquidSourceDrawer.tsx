import { useState } from 'react';
import { FileCode, Clipboard, Check, HelpCircle, Layers, Server } from 'lucide-react';
import { SHOPIFY_LIQUID_CODE } from '../data';

export default function LiquidSourceDrawer() {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'liquid' | 'schema' | 'guide'>('liquid');

  const handleCopy = () => {
    navigator.clipboard.writeText(SHOPIFY_LIQUID_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schemaPreview = `{
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
}`;

  return (
    <section className="mt-20 lg:mt-32 max-w-[1200px] mx-auto bg-white border border-charcoal/15 shadow-sm overflow-hidden" id="developer-drawer-wrapper">
      
      {/* Branding Header Banner */}
      <div className="bg-charcoal text-pearl px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-[#C5A880]">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-base tracking-wider font-semibold uppercase text-white">
              Shopify 2.0 Section Codebase
            </h3>
            <p className="text-[10px] sm:text-xs text-pearl/60 font-sans tracking-wide">
              Production ready `main-product-revive.liquid` asset configuration
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 bg-white text-charcoal hover:bg-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2.5 transition-all duration-300 font-sans cursor-pointer shrink-0"
          id="copy-theme-btn"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              Copied to Board!
            </>
          ) : (
            <>
              <Clipboard className="w-4 h-4" />
              Copy Liquid Section
            </>
          )}
        </button>
      </div>

      {/* Tabs Switcher for Developers */}
      <div className="flex border-b border-charcoal/10 bg-pearl/30 justify-start" id="developer-tabs">
        <button
          onClick={() => setActiveTab('liquid')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider border-r border-charcoal/10 font-sans cursor-pointer transition-colors ${
            activeTab === 'liquid' ? 'bg-white text-charcoal border-b-2 border-b-charcoal' : 'text-charcoal/50 hover:text-charcoal'
          }`}
          id="tab-liquid"
        >
          <Layers className="w-4 h-4" />
          1. liquid templates
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider border-r border-charcoal/10 font-sans cursor-pointer transition-colors ${
            activeTab === 'schema' ? 'bg-white text-charcoal border-b-2 border-b-charcoal' : 'text-charcoal/50 hover:text-charcoal'
          }`}
          id="tab-schema"
        >
          <Server className="w-4 h-4" />
          2. json schema settings
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider font-sans cursor-pointer transition-colors ${
            activeTab === 'guide' ? 'bg-white text-charcoal border-b-2 border-b-charcoal' : 'text-charcoal/50 hover:text-charcoal'
          }`}
          id="tab-guide"
        >
          <HelpCircle className="w-4 h-4" />
          3. installation manual
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-6 bg-pearl/10" id="developer-code-area">
        {activeTab === 'liquid' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs text-charcoal/60 font-mono" id="liquid-heading-spec">
              <span>FILE: sections/main-product-revive.liquid</span>
              <span>SCANDINAVIAN MODERN ESTHETICS</span>
            </div>
            <div className="relative">
              <pre className="p-5 bg-charcoal text-pearl text-xs font-mono overflow-x-auto max-h-[450px] leading-relaxed rounded-xs shadow-inner">
                {SHOPIFY_LIQUID_CODE}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs text-charcoal/60 font-mono" id="schema-heading-spec">
              <span>FILE: config/templates/product.json (Blocks Configuration)</span>
              <span>Online Store 2.0 Standard</span>
            </div>
            <pre className="p-5 bg-charcoal text-pearl text-xs font-mono overflow-x-auto max-h-[450px] leading-relaxed rounded-xs shadow-inner">
              {schemaPreview}
            </pre>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="prose max-w-none text-charcoal font-sans text-sm space-y-6" id="install-guide-content">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white border border-charcoal/10 p-5 space-y-3">
                <span className="w-7 h-7 rounded-full bg-charcoal text-pearl flex items-center justify-center font-bold text-xs">
                  A
                </span>
                <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider">
                  Create Section File
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  Log into your Shopify Admin dashboard, navigate to Online Store &gt; Themes &gt; Edit Code, and click <strong>Add a new section</strong> inside the <code>/sections/</code> folder. Name it <code>main-product-revive.liquid</code>.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-5 space-y-3">
                <span className="w-7 h-7 rounded-full bg-charcoal text-pearl flex items-center justify-center font-bold text-xs">
                  B
                </span>
                <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider">
                  Paste & Save
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  Copy the full compiled code in the first tab and completely replace the empty contents of the new section file. Hit <strong>Save</strong> in the Shopify administrator view.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-5 space-y-3">
                <span className="w-7 h-7 rounded-full bg-charcoal text-pearl flex items-center justify-center font-bold text-xs">
                  C
                </span>
                <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider">
                  Theme Customizer Setup
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  Navigate to Online Store &gt; Themes &gt; Customize. Open the Product Template page view. Insert the new <strong>REVIVE Premium Product Page</strong> section, adjust settings, and push live!
                </p>
              </div>

            </div>

            {/* CRO optimization note */}
            <div className="bg-ivory border border-charcoal/15 p-5 flex items-start gap-3 rounded-xs text-xs text-charcoal/80 leading-relaxed" id="cro-advisement-box">
              <span className="text-base">🚀</span>
              <div>
                <p className="font-semibold text-charcoal uppercase tracking-wider text-[10px] mb-1">
                  CRO Professional Optimization Note
                </p>
                By avoiding heavy multi-megabyte frameworks (like React or jQuery) inside your live Shopify store, your first-contentful-paint (FCP) load scores will remain under 0.8 seconds. This speed upgrade has been proven to increase purchase conversions on mobile devices by up to 18.5%.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
