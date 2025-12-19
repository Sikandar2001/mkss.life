"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

        {/* Exclusive */}
        <div>
          <h3 className="text-lg font-semibold mb-3">mks</h3>
          <p className="mb-3">Subscribe</p>
          <p className="text-sm mb-3">Get 10% off your first order</p>

          <div className="flex items-center bg-transparent border border-gray-600 rounded-md overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none px-3 py-2 text-sm w-full"
            />
            <button className="px-4 py-2 bg-white text-black text-sm">
              →
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="mt-2 text-sm">exclusive@gmail.com</p>
          <p className="mt-1 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>

          <div className="flex items-center gap-4">
            <img src="/qr.png" alt="QR" className="w-16 h-16 object-contain" />

            <div className="flex flex-col gap-2">
              <img src="/googleplay.png" alt="Google Play" className="w-28" />
              <img src="/appstore.png" alt="App Store" className="w-28" />
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-lg">
            <i className="ri-facebook-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-line"></i>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
        © Copyright mks 2025. All rights reserved
      </div>
    </footer>
  );
}
