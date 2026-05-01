// src/components/BottomNav.js
import { useCart } from "../context/CartContext";

const NAV = [
  { id: "home",    icon: "🏠", label: "Home"    },
  { id: "search",  icon: "🔍", label: "Search"  },
  { id: "cart",    icon: "🛒", label: "Cart"    },
  { id: "orders",  icon: "📦", label: "Orders"  },
  { id: "profile", icon: "👤", label: "Profile" },
];

export default function BottomNav({ active, onChange }) {
  const { totalItems } = useCart();

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: "50%",
      transform: "translateX(-50%)",
      width: "100%", maxWidth: 430,
      background: "#fff",
      borderTop: "1px solid #f0f0f0",
      display: "flex",
      paddingBottom: "env(safe-area-inset-bottom, 8px)",
      zIndex: 100,
    }}>
      {NAV.map(item => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            style={{
              flex: 1, background: "none", border: "none",
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 2, padding: "8px 0", position: "relative",
            }}
          >
            {/* Cart badge */}
            {item.id === "cart" && totalItems > 0 && (
              <div style={{
                position: "absolute", top: 4, right: "50%",
                transform: "translateX(8px)",
                background: "#0c831f", color: "#fff",
                fontSize: 9, fontWeight: 800,
                width: 16, height: 16, borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {totalItems > 9 ? "9+" : totalItems}
              </div>
            )}
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{
              fontSize: 10, fontWeight: isActive ? 700 : 500,
              color: isActive ? "#0c831f" : "#9ca3af",
            }}>
              {item.label}
            </span>
            {isActive && (
              <div style={{
                position: "absolute", bottom: 0, left: "50%",
                transform: "translateX(-50%)",
                width: 24, height: 3,
                background: "#0c831f", borderRadius: "3px 3px 0 0",
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
