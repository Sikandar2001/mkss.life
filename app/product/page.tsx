"use client";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
  const thumbnails = [
    "/image/p1.png",
    "/image/p2.png",
    "/image/p3.png",
    "/image/p4.png",
    "/image/p5.png",
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* ============================
            MAIN GRID
        ============================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT IMAGE SECTION */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {thumbnails.map((src, i) => (
                <div key={i} className="border rounded-lg p-1 cursor-pointer">
                  <Image src={src} alt="" width={80} height={80} className="rounded-md" />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 border rounded-lg p-4 flex justify-center items-center">
              <Image src="/image/p1.png" alt="" width={400} height={400} className="rounded-md" />
            </div>
          </div>

          {/* RIGHT INFO SECTION */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Havic HV G-92 Gamepad
            </h1>

            <div className="flex items-center mt-2 gap-2">
              <StarIcon className="w-5 text-yellow-400" />
              <p className="text-sm text-gray-500">(150 Reviews)</p>
              <p className="ml-4 text-green-500 font-semibold">In Stock</p>
            </div>

            <p className="text-2xl mt-4 font-semibold">$192.00</p>

            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              PlayStation 5 Controller Skin high quality vinyl with air channel adhesive
              for easy bubble-free install & mess-free removal. Pressure sensitive.
            </p>

            {/* Colors */}
            <div className="mt-6">
              <h3 className="font-semibold">Colours:</h3>
              <div className="flex gap-3 mt-2">
                <span className="w-6 h-6 rounded-full bg-red-500 border"></span>
                <span className="w-6 h-6 rounded-full bg-blue-500 border"></span>
                <span className="w-6 h-6 rounded-full bg-black border"></span>
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <h3 className="font-semibold">Size:</h3>
              <div className="flex gap-3 mt-2">
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    className="px-4 py-2 rounded-md border hover:bg-black hover:text-white transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Buttons */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-2">-</button>
                <span className="px-4 py-2 border-x">2</span>
                <button className="px-3 py-2">+</button>
              </div>

              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
                Buy Now
              </button>

              <button className="border px-4 py-3 rounded-md hover:bg-gray-100">
                <HeartIcon className="w-6" />
              </button>
            </div>

            {/* Delivery Box (black line removed) */}
            <div className="border rounded-lg p-4 mt-8 space-y-6">

              {/* Free Delivery */}
              <div className="flex gap-4 items-start">
                <Image src="/delivery.png" width={40} height={40} alt="" />
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Enter your postal code for Delivery Availability.
                  </p>
                </div>
              </div>

              {/* Return Delivery */}
              <div className="flex gap-4 items-start">
                <Image src="/return.png" width={40} height={40} alt="" />
                <div>
                  <h3 className="font-semibold">Return Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns • Details
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================
            RELATED ITEMS
        ============================ */}
        <h2 className="mt-16 text-xl font-semibold">Related Items</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">

          {[
            { name: "HAVIT HV-G92", price: "$120", old: "$160", img: "/g1.png" },
            { name: "AK-900 Keyboard", price: "$960", old: "$1200", img: "/g2.png" },
            { name: "IPS Gaming Monitor", price: "$370", old: "$400", img: "/g3.png" },
            { name: "RGB CPU Cooler", price: "$160", old: "$170", img: "/g4.png" },
          ].map((p, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <Image src={p.img} width={200} height={200} alt="" className="mx-auto" />
              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p className="text-sm mt-1">
                <span className="text-red-500 font-semibold">{p.price}</span>{" "}
                <span className="line-through text-gray-500">{p.old}</span>
              </p>
              <div className="flex justify-between mt-3">
                <button className="text-sm bg-black text-white px-3 py-1 rounded-md">
                  Add to Cart
                </button>
                <HeartIcon className="w-6 text-gray-500" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
