"use client";

import { useState, useEffect } from "react";
import {
  UserIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const [user, setUser] = useState({
    name: "Deepali Chaudhary",
    email: "Skrb01102001@gmail.com",
    phone: "+918542898438",
  });

  const [address, setAddress] = useState("");

  // ✅ Load from localStorage (Safe for SSR)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedUser = JSON.parse(localStorage.getItem("profileUser"));
    const savedAddress = localStorage.getItem("profileAddress");

    if (savedUser) setUser(savedUser);
    if (savedAddress) setAddress(savedAddress);
  }, []);

  // ✅ Save Profile
  const saveProfile = () => {
    localStorage.setItem("profileUser", JSON.stringify(user));
    setIsEditing(false);
  };

  // ✅ Save Address
  const saveAddress = () => {
    localStorage.setItem("profileAddress", address);
    setShowAddress(false);
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-8 flex flex-col md:flex-row gap-8">
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-teal-600 rounded-md text-white p-6 shadow-lg">
        {/* EDIT BUTTON */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1 text-sm hover:text-gray-200"
          >
            <PencilSquareIcon className="w-5 h-5" />
            Edit
          </button>
        </div>

        {/* PROFILE IMAGE & NAME */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-20 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
            <UserIcon className="w-12 h-12 text-white" />
          </div>

          <h2 className="mt-3 text-lg font-semibold">{user.name}</h2>
          <p className="text-sm opacity-90">{user.email}</p>
          <p className="text-sm opacity-90">{user.phone}</p>
        </div>

        <div className="border-b border-white border-opacity-40 my-6"></div>

        <div className="space-y-4">
          <MenuItem text="My Orders" Icon={ShoppingBagIcon} />
          <MenuItem
            text="Help & Customer Support"
            Icon={QuestionMarkCircleIcon}
          />
          <MenuItem text="My Address" Icon={MapPinIcon} />
          <MenuItem text="Download our App" Icon={ArrowDownTrayIcon} />
        </div>

        <div className="border-b border-white border-opacity-40 my-6"></div>

        <button className="w-full border border-white py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-teal-600 transition">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Sign Out
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-2/3 lg:w-3/4">
        <h1 className="text-3xl font-bold text-teal-600 mt-2">My Profile</h1>
        <div className="border-b mt-3 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* USER CARD */}
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
                <UserIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-teal-700">
                {user.name}
              </h2>
            </div>

            <div className="mt-4 text-gray-700 text-sm">
              <p>
                <strong>Mobile:</strong> {user.phone}
              </p>
              <p className="mt-1">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>

          {/* ADDRESS BOOK CARD */}
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-teal-700">
                Address Book
              </h2>
            </div>

            <p className="mt-4 text-gray-700 text-sm">
              Checkout faster with your saved addresses
            </p>

            <button
              onClick={() => setShowAddress(true)}
              className="w-full border border-teal-600 text-teal-600 py-3 rounded-md font-medium hover:bg-teal-600 hover:text-white transition mt-6"
            >
              View Items
            </button>
          </div>
        </div>
      </div>

      {/* ✅ EDIT MODAL */}
      {isEditing && (
        <Modal title="Edit Profile" onClose={() => setIsEditing(false)}>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Name"
            className="w-full border px-3 py-2 rounded-md text-sm mb-3"
          />

          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-md text-sm mb-3"
          />

          <input
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Phone"
            className="w-full border px-3 py-2 rounded-md text-sm mb-3"
          />

          <button
            onClick={saveProfile}
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
          >
            Save
          </button>
        </Modal>
      )}

      {/* ✅ ADDRESS MODAL */}
      {showAddress && (
        <Modal title="Your Address" onClose={() => setShowAddress(false)}>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your full address"
            className="w-full border px-3 py-2 rounded-md text-sm h-24 mb-3"
          />

          <button
            onClick={saveAddress}
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
          >
            Save Address
          </button>
        </Modal>
      )}
    </div>
  );
}

/* ✅ MENU ITEM */
function MenuItem({ text, Icon }) {
  return (
    <div className="flex items-center gap-2 text-sm cursor-pointer">
      <Icon className="w-5 h-5" />
      <p>{text}</p>
    </div>
  );
}

/* ✅ MODAL */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
