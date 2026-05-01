// src/components/OrderSuccess.js
import { useEffect, useState } from "react";

export default function OrderSuccess({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setShow(false); onDone(); }, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 999,
      background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div className="slide-up" style={{
        background: "#fff", borderRadius: 24, padding: "32px 28px",
        textAlign: "center", maxWidth: 320, margin: "0 20px",
      }}>
        <div style={{ fontSize: 72, marginBottom: 8 }}>🎉</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#0c831f", marginBottom: 6 }}>Order Placed!</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>Your order will arrive in 8–12 minutes</div>
        <div style={{
          background: "#f0fdf4", borderRadius: 12, padding: "12px 16px",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ fontSize: 24 }}>🛵</span>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#0c831f" }}>Ravi is on his way</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>⭐ 4.9 • 2.3 km away</div>
          </div>
        </div>
        <button onClick={() => { setShow(false); onDone(); }} style={{
          marginTop: 16, background: "#0c831f", color: "#fff",
          border: "none", borderRadius: 12, padding: "11px 28px",
          fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>Track Order →</button>
      </div>
    </div>
  );
}
