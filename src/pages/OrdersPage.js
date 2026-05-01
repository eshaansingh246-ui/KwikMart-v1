// src/pages/OrdersPage.js
import { useState, useEffect } from "react";

const STAGES = ["Order Placed", "Picking Items", "Out for Delivery", "Delivered"];

export default function OrdersPage({ latestOrder }) {
  const [stageIdx, setStageIdx] = useState(latestOrder ? 0 : -1);

  useEffect(() => {
    if (!latestOrder) return;
    setStageIdx(0);
    const intervals = [
      setTimeout(() => setStageIdx(1), 2000),
      setTimeout(() => setStageIdx(2), 5000),
      setTimeout(() => setStageIdx(3), 9000),
    ];
    return () => intervals.forEach(clearTimeout);
  }, [latestOrder]);

  const pastOrders = [
    { id: "#KW2041", date: "Yesterday, 7:30 PM", items: "Milk, Bread, Eggs", total: 150, status: "Delivered" },
    { id: "#KW1985", date: "2 days ago, 12:15 PM", items: "Tomatoes, Onions, Potatoes", total: 88, status: "Delivered" },
    { id: "#KW1834", date: "5 days ago, 8:00 AM", items: "Basmati Rice, Toor Dal", total: 625, status: "Delivered" },
  ];

  return (
    <div style={{ padding: "16px", paddingBottom: 100 }}>
      <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 16 }}>Your Orders</div>

      {/* Live order tracking */}
      {latestOrder && stageIdx >= 0 && (
        <div style={{
          background: "#fff", borderRadius: 16, padding: "16px",
          marginBottom: 16, border: "1px solid #dcfce7",
          boxShadow: "0 2px 12px rgba(12,131,31,0.1)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0c831f" }}>🟢 LIVE TRACKING</div>
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>
                {stageIdx < 3 ? "Estimated: 8–12 mins" : "Order delivered! 🎉"}
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 800 }}>₹{latestOrder.total}</div>
          </div>

          {/* Progress bar */}
          <div style={{ position: "relative", marginBottom: 14 }}>
            <div style={{ height: 3, background: "#e5e7eb", borderRadius: 2 }} />
            <div style={{
              position: "absolute", top: 0, left: 0, height: 3,
              background: "#0c831f", borderRadius: 2,
              width: `${(stageIdx / (STAGES.length - 1)) * 100}%`,
              transition: "width 1s ease",
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {STAGES.map((stage, i) => (
                <div key={stage} style={{ textAlign: "center", maxWidth: 70 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 10,
                    background: i <= stageIdx ? "#0c831f" : "#e5e7eb",
                    margin: "0 auto 4px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.5s",
                  }}>
                    {i <= stageIdx && <span style={{ color: "#fff", fontSize: 10 }}>✓</span>}
                  </div>
                  <div style={{ fontSize: 9, color: i <= stageIdx ? "#0c831f" : "#9ca3af", fontWeight: 700, lineHeight: 1.2 }}>
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {stageIdx < 3 && (
            <div style={{
              background: "#f0fdf4", borderRadius: 10, padding: "10px 12px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 20 }}>🛵</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>Ravi is on his way</div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>Delivery partner • ⭐ 4.9</div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button style={{ background: "#0c831f", color: "#fff", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700 }}>📞 Call</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Past orders */}
      <div style={{ fontSize: 14, fontWeight: 800, color: "#374151", marginBottom: 10 }}>Past Orders</div>
      {pastOrders.map(order => (
        <div key={order.id} style={{
          background: "#fff", borderRadius: 14, padding: "14px 16px",
          marginBottom: 10, border: "1px solid #f0f0f0",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#111" }}>{order.id}</span>
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#0c831f",
              background: "#f0fdf4", padding: "2px 8px", borderRadius: 6,
            }}>{order.status}</span>
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>{order.date}</div>
          <div style={{ fontSize: 12, color: "#374151", marginBottom: 8 }}>{order.items}</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 800 }}>₹{order.total}</span>
            <button style={{
              fontSize: 12, color: "#0c831f", fontWeight: 700,
              background: "none", border: "1.5px solid #0c831f", borderRadius: 8,
              padding: "5px 14px", cursor: "pointer",
            }}>Reorder</button>
          </div>
        </div>
      ))}
    </div>
  );
}
