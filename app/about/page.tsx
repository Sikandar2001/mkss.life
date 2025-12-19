"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Launched in 2015, Exclusive is South Asia’s premier online shopping 
              marketplace with an active presence in Bangladesh. Supported by 
              a wide range of tailored marketing, data and service solutions, 
              Exclusive has 10,500 sellers and 300 brands and serves 3 million 
              customers across the region.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Exclusive has more than 1 Million products to offer. Growing at a 
              very fast pace, Exclusive offers a diverse assortment of products 
              from consumer electronics to fashion.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/about-hero.png" 
              width={600}
              height={500}
              alt="About"
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>

        {/* STATS BOX */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="border p-6 rounded-md text-center shadow-sm">
            <img src="/icon1.png" className="mx-auto mb-3" width={40} height={40} />
            <h3 className="text-xl font-semibold">10.5k</h3>
            <p className="text-gray-500 text-sm">Sellers active on site</p>
          </div>

          <div className="border p-6 rounded-md text-center shadow-sm bg-red-500 text-white">
            <img src="/icon2.png" className="mx-auto mb-3" width={40} height={40} />
            <h3 className="text-xl font-semibold">33k</h3>
            <p className="text-sm">Monthly Product Sale</p>
          </div>

          <div className="border p-6 rounded-md text-center shadow-sm">
            <img src="/icon3.png" className="mx-auto mb-3" width={40} height={40} />
            <h3 className="text-xl font-semibold">45.5k</h3>
            <p className="text-gray-500 text-sm">Customer active on site</p>
          </div>

          <div className="border p-6 rounded-md text-center shadow-sm">
            <img src="/icon4.png" className="mx-auto mb-3" width={40} height={40} />
            <h3 className="text-xl font-semibold">25k</h3>
            <p className="text-gray-500 text-sm">Anual gross sale</p>
          </div>

        </div>

        {/* TEAM SECTION */}
        <h2 className="text-center text-xl font-semibold mt-16 mb-6">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* MEMBER 1 */}
          <div className="text-center">
            <Image src="/team1.png" width={250} height={250} alt="Tom Cruise" className="mx-auto rounded-md" />
            <h3 className="font-semibold mt-4">Tom Cruise</h3>
            <p className="text-gray-500 text-sm">Founder & Chairman</p>
            <div className="flex justify-center gap-3 mt-3">
              <img src="/fb.png" width={20} />
              <img src="/twitter.png" width={20} />
              <img src="/linkedin.png" width={20} />
            </div>
          </div>

          {/* MEMBER 2 */}
          <div className="text-center">
            <Image src="/team2.png" width={250} height={250} alt="Emma" className="mx-auto rounded-md" />
            <h3 className="font-semibold mt-4">Emma Watson</h3>
            <p className="text-gray-500 text-sm">Managing Director</p>
            <div className="flex justify-center gap-3 mt-3">
              <img src="/fb.png" width={20} />
              <img src="/twitter.png" width={20} />
              <img src="/linkedin.png" width={20} />
            </div>
          </div>

          {/* MEMBER 3 */}
          <div className="text-center">
            <Image src="/team3.png" width={250} height={250} alt="Will" className="mx-auto rounded-md" />
            <h3 className="font-semibold mt-4">Will Smith</h3>
            <p className="text-gray-500 text-sm">Product Designer</p>
            <div className="flex justify-center gap-3 mt-3">
              <img src="/fb.png" width={20} />
              <img src="/twitter.png" width={20} />
              <img src="/linkedin.png" width={20} />
            </div>
          </div>

        </div>

        {/* FEATURES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="text-center p-6 bg-gray-50 rounded-md shadow-sm">
            <img src="/truck.png" width={50} className="mx-auto mb-3" />
            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-500 text-sm mt-1">Free delivery for all orders over $140</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-md shadow-sm">
            <img src="/support.png" width={50} className="mx-auto mb-3" />
            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-500 text-sm mt-1">Friendly 24/7 customer support</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-md shadow-sm">
            <img src="/guarantee.png" width={50} className="mx-auto mb-3" />
            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-500 text-sm mt-1">We return money within 30 days</p>
          </div>

        </div>

      </div>
    </div>
  );
}
