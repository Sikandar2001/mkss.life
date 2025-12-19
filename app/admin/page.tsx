"use client";

import { useEffect, useState } from "react";
import { auth } from "@/app/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export default function AdminPage() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  const fetchMessages = async () => {
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setMessages(data);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin-login");
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Admin Panel – Contact Messages
        </h1>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-5 py-2 rounded-lg"
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
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td className="p-3 border">{msg.name}</td>
                <td className="p-3 border">{msg.email}</td>
                <td className="p-3 border">{msg.phone}</td>
                <td className="p-3 border">{msg.message}</td>
                <td className="p-3 border">
                  {msg.createdAt?.seconds
                    ? new Date(msg.createdAt.seconds * 1000).toLocaleString()
                    : "Now"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
