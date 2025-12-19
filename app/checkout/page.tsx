"use client";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE — BILLING FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <form className="flex flex-col gap-4">

            <div>
              <label className="text-sm">First Name*</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="text-sm">Company Name</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="text-sm">Street Address*</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Street Address"
              />
            </div>

            <div>
              <label className="text-sm">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Apartment"
              />
            </div>

            <div>
              <label className="text-sm">Town/City*</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Town/City"
              />
            </div>

            <div>
              <label className="text-sm">Phone Number*</label>
              <input
                type="text"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="text-sm">Email Address*</label>
              <input
                type="email"
                className="p-3 w-full rounded-md mt-1 bg-white shadow-sm"
                placeholder="Email Address"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="h-4 w-4 accent-red-500" />
              <p className="text-sm">Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="w-full">

          {/* PRODUCT LIST */}
          <div className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-3">
              <Image src="/monitor.png" width={50} height={50} alt="Product" />
              <p className="font-medium text-sm">LCD Monitor</p>
            </div>
            <p className="font-medium">$650</p>
          </div>

          <div className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-3">
              <Image src="/gamepad.png" width={50} height={50} alt="Product" />
              <p className="font-medium text-sm">H1 Gamepad</p>
            </div>
            <p className="font-medium">$1100</p>
          </div>

          {/* TOTAL SECTION — Removed all borders */}
          <div className="py-3 flex justify-between text-sm">
            <p>Subtotal</p>
            <p>$1750</p>
          </div>

          <div className="py-3 flex justify-between text-sm">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div className="py-3 flex justify-between font-semibold">
            <p>Total</p>
            <p>$1750</p>
          </div>

          {/* PAYMENT METHODS */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" className="h-4 w-4 accent-red-500" />
              <p>Bank</p>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="payment" className="h-4 w-4 accent-red-500" />
              <p>Cash on delivery</p>
            </div>
          </div>

          {/* PAYMENT ICONS */}
          <div className="mt-4 flex items-center gap-3">
            <Image src="/visa.png" width={40} height={20} alt="Visa" />
            <Image src="/master.png" width={40} height={20} alt="MasterCard" />
            <Image src="/paypal.png" width={40} height={20} alt="PayPal" />
          </div>

          {/* COUPON + APPLY */}
          <div className="flex gap-3 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-3 w-full rounded-md text-sm bg-white shadow-sm"
            />
            <button className="bg-red-500 text-white px-6 rounded-md text-sm">
              Apply Coupon
            </button>
          </div>

          {/* PLACE ORDER BUTTON */}
          <button className="bg-red-500 text-white w-full py-3 mt-6 rounded-md text-sm">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
