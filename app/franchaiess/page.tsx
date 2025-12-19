"use client";

import { useState } from "react";

/* =======================
   TYPES
======================= */
type Franchise = {
  id: number;
  title: string;
  description: string;
};

export default function FranchaisesPage() {
  /* =======================
     STATE (TYPED ✅)
  ======================= */
  const [openCard, setOpenCard] = useState<number | null>(null);

  /* =======================
     DUMMY DATA (example)
  ======================= */
  const franchises: Franchise[] = [
    {
      id: 1,
      title: "Food Franchise",
      description:
        "Low investment food franchise with high profit margin.",
    },
    {
      id: 2,
      title: "Delivery Franchise",
      description:
        "Start your own delivery business with full support.",
    },
    {
      id: 3,
      title: "Retail Franchise",
      description:
        "Retail franchise with brand support and training.",
    },
  ];

  /* =======================
     TOGGLE CARD (FIXED TYPE)
  ======================= */
  const toggleCard = (id: number) => {
    setOpenCard(openCard === id ? null : id);
  };

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Franchises
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6">
        {franchises.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCard(item.id)}
            >
              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>
              <span className="text-2xl">
                {openCard === item.id ? "−" : "+"}
              </span>
            </div>

            {openCard === item.id && (
              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
