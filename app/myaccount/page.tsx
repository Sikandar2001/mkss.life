"use client";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT PANEL */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg">
            My Account
          </h3>

          {/* SECTIONS */}
          <div className="space-y-6 text-[15px]">

            {/* Manage */}
            <div>
              <p className="text-gray-500 mb-2 font-medium">Manage Account</p>
              <ul className="space-y-2">
                <li className="text-red-500 font-semibold bg-red-50 p-2 rounded-md cursor-pointer">
                  My Profile
                </li>
                <li className="text-gray-700 hover:text-black cursor-pointer">Address Book</li>
                <li className="text-gray-700 hover:text-black cursor-pointer">Payment Methods</li>
              </ul>
            </div>

            {/* Orders */}
            <div>
              <p className="text-gray-500 mb-2 font-medium">My Orders</p>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-black cursor-pointer">My Returns</li>
                <li className="text-gray-700 hover:text-black cursor-pointer">My Cancellations</li>
              </ul>
            </div>

            {/* Wishlist */}
            <div>
              <p className="text-gray-500 mb-2 font-medium">My Wishlist</p>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-black cursor-pointer">Saved Products</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT EDIT PROFILE CARD */}
        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Edit Your Profile
          </h2>

          {/* FORM */}
          <form className="space-y-6">

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="Md"
                  className="w-full p-3 rounded-md mt-1 bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="w-full p-3 rounded-md mt-1 bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="rimel111@gmail.com"
                  className="w-full p-3 rounded-md mt-1 bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Address</label>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="w-full p-3 rounded-md mt-1 bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            {/* Password Update */}
            <div className="space-y-4">
              <p className="font-medium text-gray-800">Password Changes</p>

              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
