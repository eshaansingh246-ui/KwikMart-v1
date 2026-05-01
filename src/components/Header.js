// src/components/Header.js
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header({ onSearchChange, searchQuery, onCartOpen, onAddressOpen }) {
  const { totalItems } = useCart();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid #f0f0f0",
    }}>
      {/* Top bar */}
      <div style={{ background: "#0c831f", padding: "10px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          {/* Logo + Delivery */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div onClick={onAddressOpen} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>kwik</span>
                  <span style={{
                    background: "#fbbf24", color: "#78350f",
                    fontSize: 10, fontWeight: 800, padding: "1px 6px",
                    borderRadius: 4, letterSpacing: 0.5
                  }}>MART</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 1 }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.9)" }}>📍</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.95)", fontWeight: 600, maxWidth: 160, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                    HSR Layout, Bengaluru
                  </span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery badge */}
          <div style={{
            background: "rgba(255,255,255,0.15)", borderRadius: 20,
            padding: "5px 12px", display: "flex", alignItems: "center", gap: 5
          }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <div>
              <div style={{ color: "#fff", fontSize: 12, fontWeight: 800, lineHeight: 1 }}>10 mins</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 9, lineHeight: 1 }}>delivery</div>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div style={{
          background: "#fff", borderRadius: 10,
          display: "flex", alignItems: "center", gap: 8, padding: "9px 12px",
        }}>
          <span style={{ fontSize: 16, opacity: 0.4 }}>🔍</span>
          <input
            type="text"
            placeholder='Search "tomatoes"'
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            style={{
              border: "none", outline: "none", flex: 1,
              fontSize: 14, color: "#111", background: "transparent",
            }}
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} style={{
              border: "none", background: "none", fontSize: 16,
              color: "#9ca3af", padding: 0, display: "flex"
            }}>✕</button>
          )}
        </div>
      </div>

      {/* Offers strip */}
      <div style={{
        background: "#f0fdf4", padding: "6px 16px",
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 12, color: "#15803d", fontWeight: 600,
        borderBottom: "1px solid #dcfce7",
        overflowX: "auto", whiteSpace: "nowrap",
      }}>
        <span>🎁</span>
        <span>FREEDEL on orders above ₹199</span>
        <span style={{ opacity: 0.3 }}>•</span>
        <span>Use KWICK40 to get ₹40 off on ₹399+</span>
        <span style={{ opacity: 0.3 }}>•</span>
        <span>NEW20: 20% off on first order</span>
      </div>
    </header>
  );
}
