// src/pages/CartPage.js
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function CartPage({ onBack, onOrderPlaced }) {
  const { state, dispatch } = useCart();
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(false);

  const VALID_COUPONS = {
    KWICK40: { type: "flat", value: 40, min: 399, label: "₹40 OFF" },
    NEW20:   { type: "percent", value: 20, min: 0,   label: "20% OFF" },
    FREEDEL: { type: "delivery", value: 0, min: 199, label: "Free Delivery" },
  };

  const cartItems = products.filter(p => state.items[p.id]);
  const subtotal = cartItems.reduce((acc, p) => acc + p.price * state.items[p.id], 0);
  const deliveryFee = subtotal > 199 ? 0 : 25;
  const platformFee = 4;

  let discount = 0;
  if (couponApplied) {
    const c = VALID_COUPONS[couponApplied];
    if (c.type === "flat") discount = Math.min(c.value, subtotal);
    if (c.type === "percent") discount = Math.round((subtotal * c.value) / 100);
    if (c.type === "delivery") discount = 0;
  }

  const finalDelivery = couponApplied && VALID_COUPONS[couponApplied]?.type === "delivery" ? 0 : deliveryFee;
  const total = subtotal - discount + finalDelivery + platformFee;

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!VALID_COUPONS[code]) { setCouponError("Invalid coupon code"); return; }
    const c = VALID_COUPONS[code];
    if (subtotal < c.min) { setCouponError(`Min order ₹${c.min} required`); return; }
    setCouponApplied(code);
    setCouponError("");
  };

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
      setLoading(false);
      onOrderPlaced();
    }, 1800);
  };

  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb", paddingBottom: 120 }}>
      {/* Header */}
      <div style={{
        background: "#fff", padding: "16px", position: "sticky", top: 0, zIndex: 10,
        borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 12,
      }}>
        <button onClick={onBack} style={{
          background: "#f3f4f6", border: "none", borderRadius: 10,
          width: 36, height: 36, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
        }}>←</button>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800 }}>My Cart</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <div style={{ fontSize: 80 }}>🛒</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 16 }}>Your cart is empty</div>
          <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>Add items to get started</div>
          <button onClick={onBack} style={{
            marginTop: 24, background: "#0c831f", color: "#fff",
            border: "none", borderRadius: 12, padding: "12px 28px",
            fontSize: 14, fontWeight: 700, cursor: "pointer",
          }}>Shop Now</button>
        </div>
      ) : (
        <>
          {/* Delivery address */}
          <div style={{ background: "#fff", margin: "10px 12px", borderRadius: 14, padding: "14px 16px", border: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <span style={{ fontSize: 20 }}>📍</span>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, letterSpacing: 0.5 }}>DELIVERING TO</div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>{state.deliveryAddress}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>Est. delivery: 8–12 mins ⚡</div>
                </div>
              </div>
              <button style={{ fontSize: 12, color: "#0c831f", fontWeight: 700, background: "none", border: "none" }}>Change</button>
            </div>
          </div>

          {/* Cart items */}
          <div style={{ margin: "0 12px" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#9ca3af", marginBottom: 8, letterSpacing: 0.5 }}>YOUR ITEMS</div>
            {cartItems.map(p => {
              const qty = state.items[p.id];
              return (
                <div key={p.id} style={{
                  background: "#fff", borderRadius: 14, padding: "12px 16px",
                  marginBottom: 8, display: "flex", alignItems: "center", gap: 12,
                  border: "1px solid #f0f0f0",
                }}>
                  <span style={{ fontSize: 36 }}>{p.img}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>{p.subtitle}</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#111", marginTop: 4 }}>₹{p.price * qty}</div>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "#0c831f", borderRadius: 10, padding: "6px 10px",
                  }}>
                    <button onClick={() => dispatch({ type: "REMOVE", id: p.id })}
                      style={{ background: "none", border: "none", color: "#fff", fontSize: 18, fontWeight: 900, lineHeight: 1, cursor: "pointer" }}>−</button>
                    <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, minWidth: 18, textAlign: "center" }}>{qty}</span>
                    <button onClick={() => dispatch({ type: "ADD", id: p.id })}
                      style={{ background: "none", border: "none", color: "#fff", fontSize: 18, fontWeight: 900, lineHeight: 1, cursor: "pointer" }}>+</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coupon */}
          <div style={{ background: "#fff", margin: "10px 12px", borderRadius: 14, padding: "14px 16px", border: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
              <span>🎟</span> Apply Coupon
            </div>
            {couponApplied ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0fdf4", borderRadius: 10, padding: "10px 14px" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#15803d" }}>✓ {couponApplied} applied!</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>You saved {VALID_COUPONS[couponApplied].label}</div>
                </div>
                <button onClick={() => { setCouponApplied(null); setCouponInput(""); }}
                  style={{ fontSize: 11, color: "#e11d48", fontWeight: 700, background: "none", border: "none" }}>Remove</button>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    value={couponInput}
                    onChange={e => { setCouponInput(e.target.value.toUpperCase()); setCouponError(""); }}
                    placeholder="Enter coupon code"
                    style={{
                      flex: 1, border: "1.5px solid #e5e7eb", borderRadius: 10,
                      padding: "9px 12px", fontSize: 13, outline: "none",
                      fontWeight: 600, letterSpacing: 0.5,
                    }}
                  />
                  <button onClick={applyCoupon} style={{
                    background: "#0c831f", color: "#fff", border: "none",
                    borderRadius: 10, padding: "9px 16px", fontSize: 13, fontWeight: 700,
                  }}>Apply</button>
                </div>
                {couponError && <div style={{ fontSize: 11, color: "#e11d48", marginTop: 5, fontWeight: 600 }}>{couponError}</div>}
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {Object.keys(VALID_COUPONS).map(code => (
                    <div key={code} onClick={() => setCouponInput(code)} style={{
                      fontSize: 10, fontWeight: 700, color: "#0c831f",
                      border: "1px dashed #0c831f", borderRadius: 6,
                      padding: "3px 8px", cursor: "pointer",
                    }}>{code}</div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Bill summary */}
          <div style={{ background: "#fff", margin: "0 12px", borderRadius: 14, padding: "16px", border: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Bill Details</div>
            {[
              { label: "Item Total", value: `₹${subtotal}` },
              { label: "Delivery Fee", value: finalDelivery === 0 ? "FREE" : `₹${finalDelivery}`, green: finalDelivery === 0 },
              { label: "Platform Fee", value: `₹${platformFee}` },
              ...(discount > 0 ? [{ label: `Coupon (${couponApplied})`, value: `-₹${discount}`, green: true }] : []),
            ].map(row => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>{row.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: row.green ? "#0c831f" : "#111" }}>{row.value}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px dashed #e5e7eb", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 800 }}>To Pay</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#0c831f" }}>₹{total}</span>
            </div>
          </div>

          {/* Checkout button */}
          <div style={{ position: "fixed", bottom: "env(safe-area-inset-bottom, 0px)", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#fff", padding: "12px 16px", borderTop: "1px solid #f0f0f0", zIndex: 10 }}>
            <button onClick={placeOrder} disabled={loading} style={{
              width: "100%", background: loading ? "#6b7280" : "#0c831f",
              color: "#fff", border: "none", borderRadius: 14, padding: "16px",
              fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center",
              justifyContent: "space-between", cursor: loading ? "not-allowed" : "pointer",
            }}>
              <span>{loading ? "Placing order..." : `Pay ₹${total}`}</span>
              {!loading && <span>Place Order →</span>}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
