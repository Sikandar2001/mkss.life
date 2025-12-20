"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Firebase
import { auth } from "@/app/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore();

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailKey = email.toLowerCase();

      // ✅ STEP 1: LOGIN FROM AUTH (SOURCE OF TRUTH)
      const cred = await signInWithEmailAndPassword(
        auth,
        emailKey,
        password
      );

      const user = cred.user;

      // ✅ STEP 2: ENSURE FIRESTORE DOC EXISTS
      const userRef = doc(db, "users", emailKey);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        // 🔥 AUTO-FIX OLD USERS
        await setDoc(userRef, {
          uid: user.uid,
          email: emailKey,
          provider: "password",
          createdAt: serverTimestamp(),
        });
      }

      alert("Login successful!");
      router.push("/");

    } catch (error: any) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <Image
          src="/image/photo1.avif"
          alt="Login"
          width={520}
          height={520}
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />

        <div className="max-w-md">
          <h2 className="text-2xl font-semibold mb-2">
            Log in to Exclusive
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Enter your details below
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="border-b w-full py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="bg-red-500 text-white px-8 py-2 rounded-md"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="text-sm mt-4">
            Don’t have an account?
            <Link href="/signup" className="text-blue-600 ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
