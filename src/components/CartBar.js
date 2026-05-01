// src/components/CartBar.js
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function CartBar({ onClick }) {
  const { state, totalItems } = useCart();

  const total = Object.entries(state.items).reduce((acc, [id, qty]) => {
    const p = products.find(p => p.id === Number(id));
    return acc + (p ? p.price * qty : 0);
  }, 0);

  if (totalItems === 0) return null;

  return (
    <div
      onClick={onClick}
      className="slide-up"
      style={{
        position: "fixed",
        bottom: 64, left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: 398,
        background: "#0c831f",
        borderRadius: 16,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 90,
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(12,131,31,0.45)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          background: "rgba(255,255,255,0.2)",
          borderRadius: 8, padding: "3px 10px",
          color: "#fff", fontSize: 13, fontWeight: 800,
        }}>
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </div>
        <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>View Cart</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>₹{total}</span>
        <span style={{ color: "#fff", fontSize: 18 }}>›</span>
      </div>
    </div>
  );
}
