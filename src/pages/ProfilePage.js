// src/pages/ProfilePage.js

const menuItems = [
  { icon: "📦", label: "My Orders",       sub: "View all past orders" },
  { icon: "📍", label: "Saved Addresses", sub: "Home, Office & more"  },
  { icon: "💳", label: "Payment Methods", sub: "UPI, Cards & Wallets"  },
  { icon: "🎟", label: "Coupons & Offers", sub: "Your saved coupons"  },
  { icon: "🔔", label: "Notifications",   sub: "Manage alerts"        },
  { icon: "⭐", label: "Rate the App",    sub: "Tell us what you think"},
  { icon: "💬", label: "Help & Support",  sub: "Chat, Call, FAQ"      },
  { icon: "ℹ️", label: "About KwikMart",  sub: "Version 1.0.0"        },
];

export default function ProfilePage() {
  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Profile header */}
      <div style={{ background: "#0c831f", padding: "20px 16px 30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 32,
            background: "rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28,
          }}>👤</div>
          <div>
            <div style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>João Silva</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>+244 923 456 789</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>joao.silva@email.com</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        margin: "-16px 16px 0", background: "#fff",
        borderRadius: 16, padding: "14px 12px",
        display: "flex", boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        border: "1px solid #f0f0f0",
      }}>
        {[
          { label: "Orders", value: "12" },
          { label: "Saved", value: "₹340" },
          { label: "Points", value: "420" },
        ].map((stat, i) => (
          <div key={stat.label} style={{
            flex: 1, textAlign: "center",
            borderRight: i < 2 ? "1px solid #f0f0f0" : "none",
          }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#0c831f" }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div style={{ padding: "20px 16px 0" }}>
        {menuItems.map((item, i) => (
          <div key={item.label} style={{
            background: "#fff", borderRadius: 12, padding: "13px 14px",
            marginBottom: 8, display: "flex", alignItems: "center",
            gap: 12, cursor: "pointer", border: "1px solid #f0f0f0",
          }}>
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.sub}</div>
            </div>
            <span style={{ color: "#d1d5db", fontSize: 18 }}>›</span>
          </div>
        ))}

        <button style={{
          width: "100%", background: "#fff", border: "1.5px solid #fca5a5",
          borderRadius: 12, padding: "13px", marginTop: 8,
          color: "#e11d48", fontSize: 14, fontWeight: 700,
        }}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
