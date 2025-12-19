"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold">
          Exclusive
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup" className="font-semibold">
            Sign Up
          </Link>
        </nav>

        {/* SEARCH + ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-md px-3 py-1 text-sm w-52 focus:outline-none"
            />
            <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-500" />
          </div>

          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 gap-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/signup" onClick={() => setOpen(false)}>Sign Up</Link>

            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-3 py-2 text-sm"
            />

            <div className="flex gap-4 pt-2">
              <Heart />
              <ShoppingCart />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
