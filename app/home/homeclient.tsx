"use client";

import { useRef } from "react";
import {
  Headphones,
  Home,
  Car,
  Sparkles,
  Diamond,
  Wrench,
  Leaf,
  Shirt,
  Dumbbell,
  Briefcase,
  Package,
  Factory,
  Sofa,
  User,
} from "lucide-react";

const categories = [
  { name: "Business Services", icon: User },
  { name: "Consumer Electronics", icon: Headphones },
  { name: "Home & Garden", icon: Home },
  { name: "Vehicle Parts & Accessories", icon: Car },
  { name: "Beauty", icon: Sparkles },
  { name: "Jewelry, Eyewear...", icon: Diamond },
  { name: "Tools & Hardware", icon: Wrench },
  { name: "Environment", icon: Leaf },
  { name: "Apparel & Accessories", icon: Shirt },
  { name: "Sports & Entertainment", icon: Dumbbell },
  { name: "Commercial Equipment &...", icon: Briefcase },
  { name: "Packaging & Printing", icon: Package },
  { name: "Industrial Machinery", icon: Factory },
  { name: "Furniture", icon: Sofa },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full py-8 bg-white">
      {/* Categories */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 px-4 overflow-x-auto scrollbar-hide
          md:grid md:grid-cols-7 md:gap-8 md:overflow-visible
        "
      >
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="
                min-w-[120px]
                md:min-w-0
                flex flex-col items-center text-center
                cursor-pointer
              "
            >
              <div
                className="
                  w-24 h-24
                  rounded-full
                  border
                  flex items-center justify-center
                  hover:shadow-md transition
                "
              >
                <Icon className="w-7 h-7 text-gray-700" />
              </div>
              <p className="mt-3 text-sm text-gray-700">
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="
          md:hidden
          absolute right-3 top-1/2 -translate-y-1/2
          w-10 h-10
          rounded-full
          bg-white shadow-md
          flex items-center justify-center
        "
      >
        →
      </button>
    </div>
  );
}
