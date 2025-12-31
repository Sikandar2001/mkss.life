"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Firebase
import { auth } from "@/app/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore();

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailKey = email.toLowerCase();

      // 🔒 STEP 1: CHECK IF USER ALREADY EXISTS IN FIRESTORE
      const userRef = doc(db, "users", emailKey);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        alert("Account already exists. Please login.");
        setLoading(false);
        router.push("/auth/login");
        return;
      }

      // ✅ STEP 2: CREATE USER IN FIREBASE AUTH
      const cred = await createUserWithEmailAndPassword(
        auth,
        emailKey,
        password
      );

      // ✅ STEP 3: SAVE USER IN FIRESTORE
      await setDoc(userRef, {
        uid: cred.user.uid,
        name,
        email: emailKey,
        phone,
        provider: "password",
        createdAt: serverTimestamp(),
      });

      alert("Signup successful! Please login.");

      // 🔥 STEP 4: AUTO REDIRECT TO LOGIN PAGE
      router.push("/auth/login");

    } catch (error: any) {
      alert(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <Image
          src="/image/photo1.avif"
          alt="Signup"
          width={520}
          height={520}
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />

        {/* FORM */}
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold mb-6">
            Create an account
          </h2>

          <form onSubmit={handleSignup} className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="border-b w-full py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="border-b w-full py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border-b w-full py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border-b w-full py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="bg-red-500 text-white w-full py-3 rounded-md"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="text-sm mt-4">
            Already have an account?
            <Link href="/auth/login" className="text-blue-600 ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
