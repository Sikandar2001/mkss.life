"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // ✅ CART COUNT SYNC WITH LOCALSTORAGE
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCartCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalQty = items.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );
      setCartCount(totalQty);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  // ✅ CLICK OUTSIDE TO CLOSE DROPDOWN
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ✅ ✅ ONLY NEW LOGOUT FUNCTION ADDED
  const handleLogout = async () => {
    try {
      await signOut(auth);        // ✅ Firebase logout
      localStorage.clear();     // ✅ Clear cart + profile
      setOpen(false);
      router.push("/login");    // ✅ Go to login page
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Logout failed ❌");
    }
  };

  return (
    <>
      {/* ✅ TOP ANNOUNCEMENT BAR (SAME AS YOUR UI) */}
      <div className="w-full bg-teal-600 text-white text-center text-sm py-2">
        Buy 2 & Get 2 FREE + FREE Full Size Product
      </div>

      {/* ✅ MAIN HEADER (NO UI CHANGE) */}
      <header className="w-full bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* ✅ LOGO */}
          <Link href="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          {/* ✅ NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/signup" className="hover:text-black">Sign Up</Link>
          </nav>

          {/* ✅ SEARCH + ICONS */}
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {/* ✅ SEARCH BOX */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border rounded-md px-4 py-2 text-sm w-56 pr-10 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>

            {/* ✅ WISHLIST */}
            <button className="text-xl">🤍</button>

            {/* ✅ CART ICON */}
            <Link href="/cart" className="relative text-xl cursor-pointer">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* ✅ USER ICON */}
            <button onClick={() => setOpen(!open)} className="text-xl relative">
              👤
            </button>

            {/* ✅ DROPDOWN MENU (UI SAME) */}
            {open && (
              <div className="absolute right-0 top-12 w-64 rounded-xl shadow-xl 
              bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 
              text-white overflow-hidden z-50">

                <div className="py-2">
                  <Link href="/profile" onClick={() => setOpen(false)}>
                    <DropdownItem icon="👤" text="Manage My Account" />
                  </Link>

                  <Link href="/cart" onClick={() => setOpen(false)}>
                    <DropdownItem icon="🛍️" text="My Order" />
                  </Link>

                  <DropdownItem icon="❌" text="My Cancellations" />
                  <DropdownItem icon="⭐" text="My Reviews" />

                  <hr className="my-2 border-white/30" />

                  {/* ✅ ✅ ONLY THIS PART IS CHANGED (LOGOUT WORKING) */}
                  <div onClick={handleLogout}>
                    <DropdownItem icon="↩️" text="Logout" danger />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </header>
    </>
  );
}

/* ✅ REUSABLE DROPDOWN ITEM (SAME AS YOURS) */
function DropdownItem({ icon, text, danger }) {
  return (
    <div
      className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition cursor-pointer
        ${danger ? "hover:bg-red-500/70" : "hover:bg-white/20"}
      `}
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
