"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =======================
   TYPES
======================= */
type CartItem = {
  quantity?: number;
};

export default function Header() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /* =======================
     UPDATE CART COUNT
  ======================= */
  const updateCartCount = () => {
    const items: CartItem[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    const totalQty = items.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );

    setCartCount(totalQty);
  };

  /* =======================
     LOAD CART COUNT
  ======================= */
  useEffect(() => {
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  /* =======================
     CLOSE DROPDOWN ON OUTSIDE CLICK
  ======================= */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* =======================
     UI
  ======================= */
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          MyStore
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6">
          {/* CART */}
          <Link href="/cart" className="relative font-medium">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ACCOUNT DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="border px-3 py-1 rounded hover:bg-gray-100"
            >
              Account
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
