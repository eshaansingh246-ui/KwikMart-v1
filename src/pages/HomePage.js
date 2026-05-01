// src/pages/HomePage.js
import { useState, useEffect, useRef } from "react";
import { categories, products, banners, offers } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function HomePage({ searchQuery, onCategoryNav }) {
  const [bannerIdx, setBannerIdx] = useState(0);
  const [selectedCat, setSelectedCat] = useState(null);
  const catScrollRef = useRef(null);

  // Auto-rotate banners
  useEffect(() => {
    const t = setInterval(() => setBannerIdx(i => (i + 1) % banners.length), 3800);
    return () => clearInterval(t);
  }, []);

  const filteredProducts = products.filter(p => {
    if (searchQuery) return p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedCat) return p.catId === selectedCat;
    return true;
  });

  const activeCat = categories.find(c => c.id === selectedCat);

  return (
    <div style={{ paddingBottom: 140 }}>

      {/* Hero Banners */}
      {!searchQuery && (
        <div style={{ padding: "12px 16px 0" }}>
          <div style={{
            borderRadius: 16, overflow: "hidden",
            background: banners[bannerIdx].bg,
            padding: "18px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            minHeight: 100,
            transition: "background 0.4s",
            border: "1px solid rgba(0,0,0,0.04)",
          }}>
            <div>
              <div style={{
                fontSize: 18, fontWeight: 900,
                color: banners[bannerIdx].color, lineHeight: 1.2,
                maxWidth: 200,
              }}>
                {banners[bannerIdx].title}
              </div>
              <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                {banners[bannerIdx].subtitle}
              </div>
            </div>
            <div style={{ fontSize: 62 }}>{banners[bannerIdx].emoji}</div>
          </div>

          {/* Banner dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 8 }}>
            {banners.map((_, i) => (
              <div key={i} onClick={() => setBannerIdx(i)} style={{
                width: i === bannerIdx ? 20 : 6, height: 6,
                borderRadius: 3,
                background: i === bannerIdx ? "#0c831f" : "#e5e7eb",
                cursor: "pointer", transition: "all 0.3s",
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Coupons strip */}
      {!searchQuery && (
        <div style={{ padding: "14px 16px 0" }}>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {offers.map(offer => (
              <div key={offer.id} style={{
                background: offer.color,
                border: `1px dashed ${offer.border}`,
                borderRadius: 10, padding: "8px 12px",
                minWidth: 130, flexShrink: 0,
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#111" }}>{offer.label}</div>
                <div style={{ fontSize: 10, color: "#6b7280" }}>{offer.min}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0c831f", marginTop: 2 }}>Code: {offer.code}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {!searchQuery && (
        <div style={{ padding: "16px 0 0" }}>
          <div style={{ padding: "0 16px", marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#111" }}>Shop by Category</span>
          </div>
          <div
            ref={catScrollRef}
            style={{ display: "flex", gap: 10, overflowX: "auto", padding: "0 16px 4px" }}
          >
            {categories.map(cat => (
              <div
                key={cat.id}
                onClick={() => setSelectedCat(selectedCat === cat.id ? null : cat.id)}
                style={{
                  flexShrink: 0,
                  background: selectedCat === cat.id ? cat.color : "#f9fafb",
                  border: selectedCat === cat.id ? `2px solid ${cat.accent}` : "2px solid transparent",
                  borderRadius: 12, padding: "10px 12px",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: 4, cursor: "pointer", minWidth: 72,
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: 26 }}>{cat.icon}</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, textAlign: "center",
                  color: selectedCat === cat.id ? cat.accent : "#4b5563",
                  lineHeight: 1.2, maxWidth: 64,
                }}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section title */}
      <div style={{ padding: "16px 16px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: "#111" }}>
          {searchQuery
            ? `Results for "${searchQuery}"`
            : activeCat
              ? activeCat.name
              : "🔥 Best Sellers"}
        </span>
        {searchQuery || selectedCat ? (
          <button
            onClick={() => { setSelectedCat(null); }}
            style={{
              fontSize: 11, color: "#0c831f", fontWeight: 700,
              background: "none", border: "none", cursor: "pointer",
            }}
          >
            {searchQuery ? "" : "Clear"}
          </button>
        ) : null}
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: 56 }}>🔍</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#374151", marginTop: 12 }}>No products found</div>
          <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>Try a different search term</div>
        </div>
      ) : (
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 12, padding: "0 16px",
        }}>
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
