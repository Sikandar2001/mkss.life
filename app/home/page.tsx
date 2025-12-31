"use client";

import { useRef } from "react";
import {
  Wrench,
  ShoppingBag,
  BriefcaseBusiness,
  Gift,
  Sofa,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const categories = [
 
  { title: "Tools & Hardware", icon: Wrench },
  { title: "Shoes & Accessories", icon: ShoppingBag },
  { title: "Luggage, Bags & Cases", icon: BriefcaseBusiness },
  { title: "Gifts & Crafts", icon: Gift },
  { title: "Furniture", icon: Sofa },
  { title: "Personal Care & Household", icon: Sparkles },
  { title: "Lights & Lighting", icon: Lightbulb },
];

export default function HomePage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* ===== EXISTING HOME CONTENT ===== */}
      <section className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl font-bold">Home Page Content</h1>
      </section>

      {/* ===== CATEGORIES SLIDER (BOTTOM) ===== */}
      <section className="relative bg-white py-12 mt-10">
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
        >
          ←
        </button>

        {/* SLIDER (UI SAME) */}
        <div
          ref={sliderRef}
          className="flex gap-8 px-10 overflow-x-auto scrollbar-hide"
        >
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="min-w-[130px] flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full border flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-tight">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
        >
          →
        </button>
      </section>
    </main>
  );
}
