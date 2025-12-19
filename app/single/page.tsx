"use client";

import { useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function SingleFieldForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "singleData"), {
        username: username,
      });

      alert("Saved!");
      setUsername("");
    } catch (error) {
      console.log(error);
      alert("Error saving");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <button type="submit">Save</button>
    </form>
  );
}
