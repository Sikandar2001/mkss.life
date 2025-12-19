"use client";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        message,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully ✅");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="font-semibold text-gray-800 text-lg">Call To Us</h2>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-gray-800 font-medium mt-2">
              Phone: +8801611112222
            </p>

            <div className="border-b mt-6"></div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="font-semibold text-gray-800 text-lg">Write To Us</h2>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className="text-sm text-gray-800 font-medium mt-3">
              Email: customer@exclusive.com
            </p>
            <p className="text-sm text-gray-800 font-medium">
              Email: support@exclusive.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 md:col-span-2">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-400"
            />

            <input
              type="email"
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-400"
            />

            <input
              type="text"
              placeholder="Your Phone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-400"
            />
          </div>

          <textarea
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border mt-4 rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
}
