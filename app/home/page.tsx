"use client";

import { useState } from "react";

export default function HomePage() {
  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, old: 160 },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, old: 1160 },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, old: 400 },
    { id: 4, name: "S-Series Comfort Chair", price: 375, old: 400 },
  ];

  // ✅ ADD TO CART FUNCTION
  const addToCart = (product) => {
    let cart =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems")) || []
        : [];

    // ✅ CHECK IF PRODUCT ALREADY EXISTS
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("✅ Product added to cart");
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ✅ MAIN SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 mt-6">

        {/* ✅ LEFT SIDEBAR */}
        <aside className="col-span-3 border rounded p-4 text-sm space-y-2">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, i) => (
            <p
              key={i}
              className="cursor-pointer hover:text-red-500 flex justify-between"
            >
              {item} <span>›</span>
            </p>
          ))}
        </aside>

        {/* ✅ HERO BANNER */}
        <section className="col-span-9 bg-black text-white rounded flex items-center justify-between p-8">
          <div>
            <p className="text-gray-300 mb-2">iPhone 14 Series</p>
            <h2 className="text-4xl font-bold mb-4">
              Up to 10% <br /> off Voucher
            </h2>
            <button className="underline">Shop Now →</button>
          </div>

          <div className="text-7xl">📱</div>
        </section>
      </div>

      {/* ✅ FLASH SALES */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            <span className="text-red-500">Today’s</span> Flash Sales
          </h2>
          <p className="text-sm text-gray-500">03 : 23 : 19 : 56</p>
        </div>

        {/* ✅ PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded p-4 text-center relative"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -40%
              </span>

              <div className="text-6xl mb-4">🎮</div>

              <h3 className="font-semibold text-sm mb-2">{item.name}</h3>

              <p className="font-bold text-red-500">
                ₹{item.price}{" "}
                <span className="line-through text-gray-400 text-sm ml-2">
                  ₹{item.old}
                </span>
              </p>

              {/* ✅ ADD TO CART BUTTON (FIXED) */}
              <button
                onClick={() => addToCart(item)}
                className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
