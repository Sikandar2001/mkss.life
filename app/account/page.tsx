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

          <div className="space-y-6 text-[15px]">
            <div>
              <p className="text-gray-500 mb-2 font-medium">
                Manage Account
              </p>
              <ul className="space-y-2">
                <li className="text-red-500 font-semibold bg-red-50 p-2 rounded-md">
                  My Profile
                </li>
                <li className="text-gray-700 cursor-pointer">
                  Address Book
                </li>
                <li className="text-gray-700 cursor-pointer">
                  Payment Methods
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-500 mb-2 font-medium">
                My Orders
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 cursor-pointer">
                  My Returns
                </li>
                <li className="text-gray-700 cursor-pointer">
                  My Cancellations
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-500 mb-2 font-medium">
                My Wishlist
              </p>
              <ul>
                <li className="text-gray-700 cursor-pointer">
                  Saved Products
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Edit Your Profile
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input placeholder="First Name" className="p-3 bg-gray-100 rounded-md" />
              <input placeholder="Last Name" className="p-3 bg-gray-100 rounded-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input placeholder="Email" className="p-3 bg-gray-100 rounded-md" />
              <input placeholder="Address" className="p-3 bg-gray-100 rounded-md" />
            </div>

            <div className="space-y-3">
              <input type="password" placeholder="Current Password" className="p-3 bg-gray-100 rounded-md w-full" />
              <input type="password" placeholder="New Password" className="p-3 bg-gray-100 rounded-md w-full" />
              <input type="password" placeholder="Confirm New Password" className="p-3 bg-gray-100 rounded-md w-full" />
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gray-200 rounded-md">
                Cancel
              </button>
              <button className="px-6 py-3 bg-red-500 text-white rounded-md">
                Save Changes
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
