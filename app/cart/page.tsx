"use client";

import { useEffect, useState } from "react";

/* =======================
   TYPES
======================= */
type CartItem = {
  id: string;
  title?: string;
  price: number;
  quantity: number;
  image?: string;
};

export default function CartPage() {
  /* =======================
     STATE (TYPED ✅)
  ======================= */
  const [cart, setCart] = useState<CartItem[]>([]);
  const [couponMsg, setCouponMsg] = useState<string>("");

  /* =======================
     LOAD CART FROM LOCALSTORAGE
  ======================= */
  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[];

    setCart(items);
  }, []);

  /* =======================
     UPDATE QUANTITY (FIXED TYPE)
  ======================= */
  const updateQty = (index: number, value: number | string) => {
    const updated = [...cart];
    updated[index].quantity = Number(value);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  /* =======================
     REMOVE ITEM
  ======================= */
  const removeItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  /* =======================
     TOTAL PRICE
  ======================= */
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Cart is empty 🛒
      </div>
    );
  }

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        <table className="w-full border text-sm mb-6">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border text-left">Product</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Qty</th>
              <th className="p-3 border">Subtotal</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border">₹{item.price}</td>
                <td className="p-3 border">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQty(index, e.target.value)
                    }
                    className="w-16 border px-2 py-1 rounded"
                  />
                </td>
                <td className="p-3 border">
                  ₹{item.price * item.quantity}
                </td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            Total: ₹{total}
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-lg">
            Checkout
          </button>
        </div>

        {couponMsg && (
          <p className="mt-4 text-green-600">{couponMsg}</p>
        )}
      </div>
    </div>
  );
}
