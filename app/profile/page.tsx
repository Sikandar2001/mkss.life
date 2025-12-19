"use client";

import { useEffect, useState } from "react";

/* =======================
   TYPES
======================= */
type User = {
  name?: string;
  email?: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ SAFE JSON PARSE
    const savedUser: User | null = JSON.parse(
      localStorage.getItem("profileUser") || "null"
    );

    const savedAddress =
      localStorage.getItem("profileAddress") || "";

    if (savedUser) setUser(savedUser);
    if (savedAddress) setAddress(savedAddress);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          My Profile
        </h1>

        {user ? (
          <>
            <p className="mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-2">
              <strong>Address:</strong>{" "}
              {address || "Not added"}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-500">
            No user data found
          </p>
        )}
      </div>
    </div>
  );
}
