"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCart(items);
  }, []);

  const updateQty = (index: number, qty: number) => {
    const updated = [...cart];
    updated[index].quantity = qty;
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* BREADCRUMB */}
      <p className="text-sm text-gray-400 mb-6">
        Home / <span className="text-black">Cart</span>
      </p>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left font-medium">Product</th>
              <th className="p-4 text-center font-medium">Price</th>
              <th className="p-4 text-center font-medium">Quantity</th>
              <th className="p-4 text-center font-medium">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  {item.title}
                </td>
                <td className="p-4 text-center">
                  ${item.price}
                </td>
                <td className="p-4 text-center">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQty(index, Number(e.target.value))
                    }
                    className="w-16 border border-gray-400 rounded px-2 py-1 text-center"
                  />
                </td>
                <td className="p-4 text-center">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-between mt-6">
        <Link
          href="/"
          className="border border-gray-400 px-6 py-2 text-sm"
        >
          Return To Shop
        </Link>

        <button className="border border-gray-400 px-6 py-2 text-sm">
          Update Cart
        </button>
      </div>

      {/* COUPON + CART TOTAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-start">

        {/* COUPON */}
        <div className="flex gap-4">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="border border-gray-400 px-4 py-2 w-full max-w-[220px]"
          />
          <button className="bg-red-500 text-white px-6 py-2">
            Apply Coupon
          </button>
        </div>

        {/* CART TOTAL */}
        <div className="border border-gray-400 p-6 w-full max-w-[360px] ml-auto">
          <h3 className="font-medium mb-4">Cart Total</h3>

          <div className="flex justify-between text-sm mb-3">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-sm mb-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <hr className="my-3 border-gray-300" />

          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="mt-6 w-full bg-red-500 text-white py-2">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
