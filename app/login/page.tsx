"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Firebase Auth import
import { auth, googleProvider } from "@/app/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------- Email Login ----------------
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // ---------------- Google Login ----------------
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Image */}
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/image/photo1.avif"
            alt="Login Visual"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Login Form */}
        <div className="p-8 shadow-md rounded-md flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Login to your account</h2>

          <p className="text-sm mb-4">Enter your details below</p>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-md"
                  value={email}                     // <- यहाँ ADD किया गया है
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="border p-3 rounded-md"
                  value={password}                  // <- यहाँ ADD किया गया है
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />


            <button
              type="submit"
              className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="border border-gray-400 py-3 rounded-md w-full mt-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <Image src="/image/google.png" width={24} height={24} alt="Google" />
            Continue with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?
            <a href="/signup" className="text-blue-600 ml-1">Create Account</a>
          </p>
        </div>

      </div>
    </div>
  );
}
