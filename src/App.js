// src/App.js
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import CartBar from "./components/CartBar";
import OrderSuccess from "./components/OrderSuccess";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";

function AppInner() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [latestOrder, setLatestOrder] = useState(null);

  const handleOrderPlaced = (total) => {
    setLatestOrder({ total, time: new Date() });
    setShowOrderSuccess(true);
    setActiveTab("orders");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab !== "home") setSearchQuery("");
  };

  // Cart page is a full-screen overlay
  if (activeTab === "cart") {
    return (
      <CartPage
        onBack={() => setActiveTab("home")}
        onOrderPlaced={handleOrderPlaced}
      />
    );
  }

  return (
    <>
      {/* Search tab just focuses search on home */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={(q) => { setSearchQuery(q); if (q) setActiveTab("home"); }}
        onCartOpen={() => setActiveTab("cart")}
      />

      <main style={{ minHeight: "calc(100dvh - 120px)" }}>
        {activeTab === "home"    && <HomePage searchQuery={searchQuery} />}
        {activeTab === "search"  && <HomePage searchQuery={searchQuery} />}
        {activeTab === "orders"  && <OrdersPage latestOrder={latestOrder} />}
        {activeTab === "profile" && <ProfilePage />}
      </main>

      <CartBar onClick={() => setActiveTab("cart")} />
      <BottomNav active={activeTab} onChange={handleTabChange} />

      {showOrderSuccess && (
        <OrderSuccess onDone={() => setShowOrderSuccess(false)} />
      )}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
