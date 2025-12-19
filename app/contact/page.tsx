"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  /* =======================
     SUBMIT HANDLER (TYPED)
  ======================= */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !message) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

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
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full mb-4 p-3 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full mb-4 p-3 rounded-lg"
          required
        />

        <input
          type="tel"
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border w-full mb-4 p-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border w-full mb-4 p-3 rounded-lg"
          rows={4}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
