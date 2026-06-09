import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItem: {
    title: string;
    variantName: string;
    quantity: number;
    price: number;
    type: 'one-time' | 'subscription';
  } | null;
  onRemove: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItem, onRemove }: CartDrawerProps) {
  const totalPrice = cartItem ? cartItem.price * cartItem.quantity : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 z-50 backdrop-blur-xs"
            id="cart-backdrop"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-pearl border-l border-charcoal/10 text-charcoal z-50 flex flex-col shadow-2xl mr-0"
            id="cart-panel"
          >
            {/* Header */}
            <div className="p-6 border-b border-charcoal/10 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-charcoal" />
                <span className="font-cinzel text-lg tracking-wider font-semibold">BAG</span>
                {cartItem && (
                  <span className="bg-charcoal text-pearl text-xs px-2 py-0.5 rounded-full font-sans font-medium">
                    {cartItem.quantity}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-charcoal/5 transition-colors absolute right-4 top-5 rounded-full text-charcoal/60 hover:text-charcoal cursor-pointer"
                id="close-cart-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItem ? (
                <div className="flex gap-4 items-start bg-white p-4 border border-charcoal/5 group transition-all duration-300 shadow-xs hover:border-charcoal/10">
                  <div className="w-20 h-20 bg-pearl p-1 overflow-hidden border border-charcoal/5">
                    <img
                      src={ASSET_IMAGES.product}
                      alt={cartItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-sans font-semibold text-sm line-clamp-1 tracking-tight">
                        {cartItem.title}
                      </h4>
                      <span className="font-sans font-medium text-xs text-charcoal">
                        ${(cartItem.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="text-xs text-charcoal/60 mt-0.5 space-y-0.5 font-sans">
                      <p>Presentation: {cartItem.variantName}</p>
                      <p className="flex items-center gap-1">
                        Program: {cartItem.type === 'subscription' ? (
                          <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-medium text-[10px] uppercase">
                            Auto-Replenish (Save 15%)
                          </span>
                        ) : (
                          'One-Time Purchase'
                        )}
                      </p>
                      <p>Qty: {cartItem.quantity} x ${cartItem.price.toFixed(2)}</p>
                    </div>

                    <button
                      onClick={onRemove}
                      className="text-xs font-semibold text-red-500 hover:text-red-700 mt-3 flex items-center gap-1 transition-colors cursor-pointer"
                      id="remove-item-btn"
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-medium tracking-wide">YOUR BAG IS EMPTY</h3>
                    <p className="text-sm font-sans text-charcoal/60 mt-1 max-w-xs mx-auto">
                      Explore the advanced formulation of REVIVE and recover your natural under-eye brightness.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="font-sans font-semibold text-xs tracking-widest text-charcoal underline underline-offset-4 uppercase hover:text-charcoal/70 transition-colors cursor-pointer"
                    id="continue-shopping-btn"
                  >
                    CONTINUE BROWSING
                  </button>
                </div>
              )}
            </div>

            {/* Footer Pricing & Checkout */}
            {cartItem && (
              <div className="p-6 border-t border-charcoal/10 bg-white space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-charcoal/60">
                    <span>Shipping</span>
                    <span className="font-sans font-medium uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1 text-[10px]">
                      Complimentary Clinical Delivery
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal/60">
                    <span>Tax (calc at checkout)</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-charcoal/5 font-sans font-semibold">
                    <span className="text-charcoal">Subtotal</span>
                    <span className="text-base">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <button
                    onClick={() => {
                      alert("Connecting securely to Shopify VIP Checkout Server Gateway...");
                    }}
                    className="w-full bg-charcoal text-pearl font-sans text-xs tracking-widest font-semibold py-4 hover:bg-charcoal/90 hover:shadow-lg transition-all duration-300 uppercase flex items-center justify-center gap-2 group cursor-pointer"
                    id="checkout-btn"
                  >
                    Proceed To Checkout
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-charcoal/50 leading-relaxed max-w-xs mx-auto font-sans">
                    Guaranteed authentic clinical formula fresh from REVIVE labs. Secure 256-bit SSL encrypted shopping connection.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
