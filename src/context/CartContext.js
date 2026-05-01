// src/context/CartContext.js
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

const initialState = {
  items: {},        // { productId: quantity }
  coupon: null,
  deliveryAddress: "HSR Layout, Sector 1, Bengaluru",
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const qty = (state.items[action.id] || 0) + 1;
      return { ...state, items: { ...state.items, [action.id]: qty } };
    }
    case "REMOVE": {
      const qty = (state.items[action.id] || 0) - 1;
      const items = { ...state.items };
      if (qty <= 0) delete items[action.id];
      else items[action.id] = qty;
      return { ...state, items };
    }
    case "CLEAR":
      return { ...state, items: {} };
    case "SET_COUPON":
      return { ...state, coupon: action.coupon };
    case "SET_ADDRESS":
      return { ...state, deliveryAddress: action.address };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem("kwikmart_cart");
      return saved ? { ...init, items: JSON.parse(saved) } : init;
    } catch { return init; }
  });

  useEffect(() => {
    localStorage.setItem("kwikmart_cart", JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = Object.values(state.items).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
