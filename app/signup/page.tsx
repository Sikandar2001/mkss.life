"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Firebase
import { auth, googleProvider } from "@/app/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
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

  // ================= EMAIL + PHONE UNIQUE SIGNUP =================
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔴 STEP 1: PHONE NUMBER CHECK
      if (phone) {
        const phoneQuery = query(
          collection(db, "users"),
          where("phone", "==", phone)
        );

        const phoneSnap = await getDocs(phoneQuery);

        if (!phoneSnap.empty) {
          alert("This phone number is already registered.");
          setLoading(false);
          return;
        }
      }

      // 🔴 STEP 2: EMAIL SIGNUP (Firebase auto-checks duplicate email)
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCred.user;

      // 🔴 STEP 3: SAVE USER IN FIRESTORE
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        phone,
        createdAt: serverTimestamp(),
      });

      alert("Account created successfully!");
      router.push("/login");

    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE SIGNUP =================
  const handleGoogleSignup = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        createdAt: serverTimestamp(),
      });

      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
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
          <h2 className="text-2xl font-semibold mb-2">
            Create an account
          </h2>

          <form onSubmit={handleSignup} className="space-y-5">
            <input
              placeholder="Name"
              className="border-b w-full py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              type="email"
              className="border-b w-full py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
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

          <button
            onClick={handleGoogleSignup}
            className="border w-full mt-4 py-3 rounded-md"
          >
            Sign up with Google
          </button>

          <p className="text-sm mt-4">
            Already have account?
            <Link href="/login" className="text-blue-600 ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
