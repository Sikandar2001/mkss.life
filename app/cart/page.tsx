"use client";

import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/monitor.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/gamepad.png",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState("");

  const updateQty = (index, value) => {
    const updated = [...cart];
    updated[index].quantity = Number(value);
    setCart(updated);
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(subtotal * 0.1);
      setCouponMsg("✅ 10% Discount Applied");
    } else {
      setDiscount(0);
      setCouponMsg("❌ Invalid Coupon");
    }
  };

  const total = subtotal - discount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <table className="w-full border rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Qty</th>
            <th className="p-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id} className="border-t">
              <td className="p-4 flex items-center gap-4">
                <button onClick={() => removeItem(index)}>✖</button>
                <Image src={item.image} width={50} height={50} alt="" />
                {item.name}
              </td>
              <td className="p-4">${item.price}</td>
              <td className="p-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQty(index, e.target.value)}
                  className="border w-16 px-1"
                />
              </td>
              <td className="p-4 font-semibold">
                ${item.price * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div>
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="border px-4 py-2 mr-2"
          />
          <button onClick={applyCoupon} className="bg-red-500 text-white px-4 py-2">
            Apply
          </button>
          <p className="mt-2 text-sm">{couponMsg}</p>
        </div>

        <div className="border p-6 rounded">
          <h2 className="font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>-${discount.toFixed(0)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
