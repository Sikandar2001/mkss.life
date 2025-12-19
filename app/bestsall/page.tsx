"use client";

import { Heart, Eye, Star } from "lucide-react";

export default function BestSelling() {
  const products = [
    {
      id: 1,
      image: "/image/coat.png",
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      reviews: 65,
    },
    {
      id: 2,
      image: "/image/bag.png",
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      reviews: 65,
    },
    {
      id: 3,
      image: "/image/cpu.png",
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      reviews: 65,
    },
    {
      id: 4,
      image: "/image/shelf.png",
      title: "Small BookSelf",
      price: 360,
      oldPrice: null,
      reviews: 65,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-red-600 font-semibold">
            <span className="text-red-600 text-lg">●</span> This Month
          </div>
          <h1 className="text-3xl font-bold mt-2">Best Selling Products</h1>
        </div>

        {/* VIEW ALL BUTTON */}
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
          View All
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 relative hover:shadow"
          >
            {/* WISHLIST + VIEW ICONS */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-8 h-8 bg-white rounded-full grid place-items-center shadow">
                <Heart size={16} />
              </button>
              <button className="w-8 h-8 bg-white rounded-full grid place-items-center shadow">
                <Eye size={16} />
              </button>
            </div>

            {/* PRODUCT IMAGE */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />

            {/* TITLE */}
            <h3 className="mt-4 font-semibold">{product.title}</h3>

            {/* PRICE */}
            <div className="flex items-center gap-3 mt-1">
              <p className="text-red-500 font-bold">${product.price}</p>
              {product.oldPrice && (
                <p className="line-through text-gray-500 text-sm">
                  ${product.oldPrice}
                </p>
              )}
            </div>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="yellow"
                    className="text-yellow-500"
                  />
                ))}
              <p className="text-gray-600 text-sm ml-2">
                ({product.reviews})
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div className="border-b mt-10"></div>
    </div>
  );
}
