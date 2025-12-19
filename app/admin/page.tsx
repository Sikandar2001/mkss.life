"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { auth, db } from "@/app/lib/firebase";

/* =======================
   TYPES
======================= */
type Message = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  createdAt?: {
    seconds: number;
  };
};

export default function AdminPage() {
  const router = useRouter();

  /* =======================
     STATE (TYPED ✅)
  ======================= */
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* =======================
     AUTH CHECK
  ======================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin-login");
      } else {
        fetchMessages();
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  /* =======================
     FETCH MESSAGES
  ======================= */
  const fetchMessages = async () => {
    try {
      const q = query(
        collection(db, "contacts"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">),
      }));

      setMessages(data); // ✅ NO TypeScript error
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  /* =======================
     LOGOUT
  ======================= */
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin-login");
  };

  /* =======================
     LOADING STATE
  ======================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading...
      </div>
    );
  }

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Admin Panel – Contact Messages
        </h1>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full border text-sm">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id}>
                  <td className="p-3 border">{msg.name || "-"}</td>
                  <td className="p-3 border">{msg.email || "-"}</td>
                  <td className="p-3 border">{msg.phone || "-"}</td>
                  <td className="p-3 border">{msg.message || "-"}</td>
                  <td className="p-3 border">
                    {msg.createdAt?.seconds
                      ? new Date(
                          msg.createdAt.seconds * 1000
                        ).toLocaleString()
                      : "Now"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
