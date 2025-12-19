"use client";

import { useEffect, useState } from "react";

/* =======================
   TYPES
======================= */
type Product = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

export default function HomePage() {
  /* =======================
     STATE
  ======================= */
  const [products, setProducts] = useState<Product[]>([]);

  /* =======================
     DUMMY PRODUCTS (example)
     👉 replace with Firestore later
  ======================= */
  useEffect(() => {
    setProducts([
      {
        id: "1",
        title: "Fresh Atta",
        price: 250,
      },
      {
        id: "2",
        title: "Cooking Oil",
        price: 180,
      },
      {
        id: "3",
        title: "Rice Pack",
        price: 300,
      },
    ]);
  }, []);

  /* =======================
     ADD TO CART (FIXED TYPE)
  ======================= */
  const addToCart = (product: Product) => {
    const cart: (Product & { quantity: number })[] =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems") || "[]")
        : [];

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {product.title}
            </h2>

            <p className="text-gray-700 mb-4">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
