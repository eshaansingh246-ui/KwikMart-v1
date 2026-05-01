// src/data/products.js

export const categories = [
  { id: "fruits",    name: "Fruits & Vegetables", icon: "🥦", color: "#f0fdf4", accent: "#16a34a" },
  { id: "dairy",     name: "Dairy & Breakfast",   icon: "🥛", color: "#eff6ff", accent: "#2563eb" },
  { id: "meat",      name: "Meat & Seafood",       icon: "🥩", color: "#fff1f2", accent: "#e11d48" },
  { id: "snacks",    name: "Snacks & Munchies",    icon: "🍿", color: "#fefce8", accent: "#ca8a04" },
  { id: "beverages", name: "Cold Drinks & Juices", icon: "🧃", color: "#f0f9ff", accent: "#0284c7" },
  { id: "staples",   name: "Rice, Dal & Atta",     icon: "🌾", color: "#fdf4ff", accent: "#9333ea" },
  { id: "instant",   name: "Instant Food",         icon: "🍜", color: "#fff7ed", accent: "#ea580c" },
  { id: "cleaning",  name: "Cleaning Essentials",  icon: "🧹", color: "#f8fafc", accent: "#475569" },
  { id: "personal",  name: "Personal Care",        icon: "🧴", color: "#fdf2f8", accent: "#db2777" },
  { id: "bakery",    name: "Bakery & Biscuits",    icon: "🍞", color: "#fefce8", accent: "#b45309" },
];

export const products = [
  // Fruits & Vegetables
  { id: 1,  catId: "fruits",    name: "Tomatoes",           subtitle: "Fresh, 500g",         price: 25,   mrp: 30,   img: "🍅", tag: "BESTSELLER", inStock: true,  deliveryTime: "8 mins" },
  { id: 2,  catId: "fruits",    name: "Onions",             subtitle: "Red, 1kg",            price: 35,   mrp: 40,   img: "🧅", tag: null,          inStock: true,  deliveryTime: "8 mins" },
  { id: 3,  catId: "fruits",    name: "Bananas",            subtitle: "Robusta, 6 pcs",      price: 45,   mrp: 55,   img: "🍌", tag: "18% OFF",     inStock: true,  deliveryTime: "8 mins" },
  { id: 4,  catId: "fruits",    name: "Potatoes",           subtitle: "Washed, 1kg",         price: 28,   mrp: 35,   img: "🥔", tag: null,          inStock: true,  deliveryTime: "8 mins" },
  { id: 5,  catId: "fruits",    name: "Spinach",            subtitle: "Fresh, 250g",         price: 18,   mrp: 22,   img: "🥬", tag: null,          inStock: true,  deliveryTime: "8 mins" },
  { id: 6,  catId: "fruits",    name: "Capsicum",           subtitle: "Mixed, 3 pcs",        price: 55,   mrp: 65,   img: "🫑", tag: null,          inStock: false, deliveryTime: "8 mins" },
  { id: 7,  catId: "fruits",    name: "Mangoes",            subtitle: "Alphonso, 4 pcs",     price: 120,  mrp: 150,  img: "🥭", tag: "SEASONAL",    inStock: true,  deliveryTime: "8 mins" },
  { id: 8,  catId: "fruits",    name: "Lemon",              subtitle: "Fresh, 4 pcs",        price: 20,   mrp: 25,   img: "🍋", tag: null,          inStock: true,  deliveryTime: "8 mins" },

  // Dairy & Breakfast
  { id: 9,  catId: "dairy",     name: "Full Cream Milk",   subtitle: "Amul, 1L",            price: 62,   mrp: 66,   img: "🥛", tag: "BESTSELLER",  inStock: true,  deliveryTime: "8 mins" },
  { id: 10, catId: "dairy",     name: "Paneer",            subtitle: "Fresh, 200g",         price: 80,   mrp: 90,   img: "🧀", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 11, catId: "dairy",     name: "Curd",              subtitle: "Mother Dairy, 400g",  price: 42,   mrp: 48,   img: "🫙", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 12, catId: "dairy",     name: "Butter",            subtitle: "Amul, 100g",          price: 52,   mrp: 56,   img: "🧈", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 13, catId: "dairy",     name: "Eggs",              subtitle: "Farm Fresh, 6 pcs",   price: 48,   mrp: 54,   img: "🥚", tag: "FRESH",        inStock: true,  deliveryTime: "8 mins" },
  { id: 14, catId: "dairy",     name: "Cheese Slices",     subtitle: "Amul, 10 slices",     price: 115,  mrp: 125,  img: "🫕", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Meat & Seafood
  { id: 15, catId: "meat",      name: "Chicken Breast",    subtitle: "Boneless, 500g",      price: 180,  mrp: 210,  img: "🍗", tag: "FRESH",        inStock: true,  deliveryTime: "12 mins" },
  { id: 16, catId: "meat",      name: "Mutton Keema",      subtitle: "Fresh, 500g",         price: 380,  mrp: 420,  img: "🥩", tag: null,           inStock: true,  deliveryTime: "12 mins" },
  { id: 17, catId: "meat",      name: "Prawns",            subtitle: "Medium, 250g",        price: 220,  mrp: 260,  img: "🦐", tag: null,           inStock: true,  deliveryTime: "12 mins" },
  { id: 18, catId: "meat",      name: "Rohu Fish",         subtitle: "Cleaned, 500g",       price: 165,  mrp: 190,  img: "🐟", tag: null,           inStock: false, deliveryTime: "12 mins" },

  // Snacks
  { id: 19, catId: "snacks",    name: "Lays Classic",      subtitle: "Salted, 52g",         price: 20,   mrp: 20,   img: "🥔", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 20, catId: "snacks",    name: "Oreo Biscuits",     subtitle: "Original, 120g",      price: 40,   mrp: 45,   img: "🍪", tag: "BESTSELLER",   inStock: true,  deliveryTime: "8 mins" },
  { id: 21, catId: "snacks",    name: "Kurkure",           subtitle: "Masala Munch, 80g",   price: 30,   mrp: 30,   img: "🍿", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 22, catId: "snacks",    name: "Dark Fantasy",      subtitle: "Sunfeast, 75g",       price: 38,   mrp: 40,   img: "🍫", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Beverages
  { id: 23, catId: "beverages", name: "Coca-Cola",         subtitle: "2L bottle",           price: 90,   mrp: 95,   img: "🥤", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 24, catId: "beverages", name: "Real Juice",        subtitle: "Mixed Fruit, 1L",     price: 105,  mrp: 120,  img: "🧃", tag: "17% OFF",      inStock: true,  deliveryTime: "8 mins" },
  { id: 25, catId: "beverages", name: "Packaged Water",    subtitle: "Bisleri, 1L",         price: 20,   mrp: 20,   img: "💧", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 26, catId: "beverages", name: "Red Bull",          subtitle: "Energy, 250ml",       price: 125,  mrp: 135,  img: "⚡", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Staples
  { id: 27, catId: "staples",   name: "Basmati Rice",      subtitle: "India Gate, 5kg",     price: 485,  mrp: 540,  img: "🍚", tag: "10% OFF",      inStock: true,  deliveryTime: "8 mins" },
  { id: 28, catId: "staples",   name: "Toor Dal",          subtitle: "Organic, 1kg",        price: 140,  mrp: 160,  img: "🫘", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 29, catId: "staples",   name: "Wheat Atta",        subtitle: "Aashirvaad, 5kg",     price: 285,  mrp: 310,  img: "🌾", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 30, catId: "staples",   name: "Sunflower Oil",     subtitle: "Fortune, 1L",         price: 142,  mrp: 165,  img: "🫙", tag: "14% OFF",      inStock: true,  deliveryTime: "8 mins" },

  // Instant Food
  { id: 31, catId: "instant",   name: "Maggi Noodles",     subtitle: "2 Minute, 4 pack",    price: 56,   mrp: 60,   img: "🍜", tag: "BESTSELLER",   inStock: true,  deliveryTime: "8 mins" },
  { id: 32, catId: "instant",   name: "Haldiram Poha",     subtitle: "Ready, 80g",          price: 30,   mrp: 35,   img: "🍛", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 33, catId: "instant",   name: "MTR Upma",          subtitle: "Breakfast Mix, 200g", price: 65,   mrp: 72,   img: "🥣", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Cleaning
  { id: 34, catId: "cleaning",  name: "Surf Excel",        subtitle: "Matic, 1kg",          price: 195,  mrp: 220,  img: "🫧", tag: "11% OFF",      inStock: true,  deliveryTime: "8 mins" },
  { id: 35, catId: "cleaning",  name: "Vim Dishwash Bar",  subtitle: "Lemon, 200g",         price: 25,   mrp: 28,   img: "🧼", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 36, catId: "cleaning",  name: "Colin Glass Cleaner", subtitle: "Spray, 500ml",     price: 85,   mrp: 95,   img: "🪣", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Personal Care
  { id: 37, catId: "personal",  name: "Dove Shampoo",      subtitle: "Intense, 180ml",      price: 195,  mrp: 230,  img: "🧴", tag: "15% OFF",      inStock: true,  deliveryTime: "8 mins" },
  { id: 38, catId: "personal",  name: "Colgate Toothpaste", subtitle: "Max Fresh, 150g",   price: 82,   mrp: 90,   img: "🪥", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 39, catId: "personal",  name: "Dettol Soap",       subtitle: "Original, 3 pcs",     price: 75,   mrp: 84,   img: "🧼", tag: null,           inStock: true,  deliveryTime: "8 mins" },

  // Bakery
  { id: 40, catId: "bakery",    name: "Bread Loaf",        subtitle: "Britannia, 400g",     price: 40,   mrp: 44,   img: "🍞", tag: null,           inStock: true,  deliveryTime: "8 mins" },
  { id: 41, catId: "bakery",    name: "Bourbon Biscuits",  subtitle: "Britannia, 100g",     price: 22,   mrp: 25,   img: "🍫", tag: "BESTSELLER",   inStock: true,  deliveryTime: "8 mins" },
  { id: 42, catId: "bakery",    name: "Marie Gold",        subtitle: "Britannia, 250g",     price: 28,   mrp: 30,   img: "🫓", tag: null,           inStock: true,  deliveryTime: "8 mins" },
];

export const banners = [
  { id: 1, title: "Groceries in 10 minutes", subtitle: "Free delivery on first 3 orders", bg: "#f0fdf4", color: "#15803d", emoji: "⚡" },
  { id: 2, title: "Fresh Fruits & Veggies", subtitle: "Sourced fresh every morning", bg: "#fef9c3", color: "#92400e", emoji: "🥗" },
  { id: 3, title: "Mega Discounts Today", subtitle: "Up to 50% off on staples", bg: "#fff1f2", color: "#be123c", emoji: "🎉" },
  { id: 4, title: "Dairy Fresh Daily", subtitle: "Milk, paneer & more", bg: "#eff6ff", color: "#1d4ed8", emoji: "🥛" },
];

export const offers = [
  { id: 1, label: "FLAT ₹40 OFF",  min: "above ₹399", code: "KWICK40",  color: "#f0fdf4", border: "#86efac" },
  { id: 2, label: "FREE DELIVERY", min: "above ₹199", code: "FREEDEL",  color: "#eff6ff", border: "#93c5fd" },
  { id: 3, label: "20% CASHBACK",  min: "on first order", code: "NEW20", color: "#fdf4ff", border: "#d8b4fe" },
];
