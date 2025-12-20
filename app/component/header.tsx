"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

// 🔥 Firebase
import { auth } from "@/app/lib/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();

  // ✅ LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setProfileOpen(false);
      alert("Logged out successfully!");
      router.push("/login"); // redirect
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <Link href="/" className="text-xl font-bold">
            Exclusive
          </Link>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4 relative">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-md px-3 py-1 text-sm w-56"
            />
            <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-500" />
          </div>

          <Heart className="w-5 h-5 cursor-pointer" />

          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>

          {/* PROFILE */}
          <div className="relative">
            <User
              className="w-5 h-5 cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-purple-600 text-white rounded-lg shadow-lg text-sm z-50">
                <Link
                  href="/account"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  My Account
                </Link>

                <Link
                  href="/orders"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  My Orders
                </Link>

                <Link
                  href="/reviews"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  My Reviews
                </Link>

                {/* ✅ REAL LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-purple-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 py-3">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
