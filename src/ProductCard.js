// src/components/ProductCard.js
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { state, dispatch } = useCart();
  const qty = state.items[product.id] || 0;
  const discount = product.mrp > product.price
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #f0f0f0",
      borderRadius: 16,
      padding: "12px 10px 10px",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      transition: "box-shadow 0.2s",
    }}>
      {/* Discount badge */}
      {discount > 0 && (
        <div style={{
          position: "absolute", top: 8, left: 8,
          background: "#f0fdf4", color: "#15803d",
          fontSize: 9, fontWeight: 800,
          padding: "2px 6px", borderRadius: 5,
          letterSpacing: 0.3,
        }}>
          {discount}% OFF
        </div>
      )}

      {/* Tag badge */}
      {product.tag && !discount && (
        <div style={{
          position: "absolute", top: 8, left: 8,
          background: product.tag === "BESTSELLER" ? "#fef9c3" : "#eff6ff",
          color: product.tag === "BESTSELLER" ? "#92400e" : "#1d4ed8",
          fontSize: 8, fontWeight: 800,
          padding: "2px 6px", borderRadius: 5,
          letterSpacing: 0.3,
        }}>
          {product.tag}
        </div>
      )}

      {/* Product Image */}
      <div style={{
        fontSize: 56, textAlign: "center",
        marginBottom: 8, lineHeight: 1,
        filter: product.inStock ? "none" : "grayscale(1) opacity(0.4)",
      }}>
        {product.img}
      </div>

      {/* Delivery time */}
      <div style={{
        fontSize: 10, color: "#6b7280", fontWeight: 600,
        marginBottom: 4, display: "flex", alignItems: "center", gap: 3,
      }}>
        <span>⏱</span> {product.deliveryTime} delivery
      </div>

      {/* Name & subtitle */}
      <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 2, minHeight: 34 }}>
        {product.name}
      </div>
      <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>
        {product.subtitle}
      </div>

      {/* Price + Add button */}
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#111" }}>
            ₹{product.price}
          </div>
          {product.mrp > product.price && (
            <div style={{ fontSize: 10, color: "#9ca3af", textDecoration: "line-through" }}>
              ₹{product.mrp}
            </div>
          )}
        </div>

        {!product.inStock ? (
          <div style={{
            fontSize: 10, color: "#9ca3af", fontWeight: 600,
            border: "1px solid #e5e7eb", borderRadius: 8,
            padding: "6px 10px",
          }}>
            Out of stock
          </div>
        ) : qty === 0 ? (
          <button
            onClick={() => dispatch({ type: "ADD", id: product.id })}
            style={{
              background: "#fff", border: "1.5px solid #0c831f",
              borderRadius: 10, color: "#0c831f",
              fontSize: 13, fontWeight: 800,
              padding: "6px 16px", cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            ADD
          </button>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#0c831f", borderRadius: 10, padding: "5px 8px",
          }}>
            <button
              onClick={() => dispatch({ type: "REMOVE", id: product.id })}
              style={{
                background: "none", border: "none", color: "#fff",
                fontSize: 18, fontWeight: 900, lineHeight: 1,
                width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >−</button>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, minWidth: 16, textAlign: "center" }}>
              {qty}
            </span>
            <button
              onClick={() => dispatch({ type: "ADD", id: product.id })}
              style={{
                background: "none", border: "none", color: "#fff",
                fontSize: 18, fontWeight: 900, lineHeight: 1,
                width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >+</button>
          </div>
        )}
      </div>
    </div>
  );
}
