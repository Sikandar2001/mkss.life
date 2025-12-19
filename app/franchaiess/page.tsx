"use client";

import { useState } from "react";
import { 
  CheckCircle, 
  TrendingUp, 
  Headphones, 
  Shield,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Users,
  Store,
  Home,
  ArrowRight
} from "lucide-react";

export default function LandingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    plan: "Starter — ₹25,000+",
    message: "",
  });

  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.city) {
      alert("Please fill all required fields");
      return;
    }
    alert("Thanks! Your enquiry has been submitted. Our franchise manager will contact you within 24 hours.");
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      plan: "Starter — ₹25,000+",
      message: "",
    });
  };

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand & Tech Support",
      description: "White-label dashboard & mobile app"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Operations Excellence",
      description: "Complete SOPs & onboarding support"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Marketing Support",
      description: "Local ads & listing management"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Training Programs",
      description: "Staff & delivery team onboarding"
    }
  ];

  const franchiseTypes = [
    {
      id: 1,
      title: "Super Franchise",
      investment: "₹25,00,000",
      icon: <Store className="w-10 h-10 mb-4" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      features: [
        // "District/City Level Operations",
        // "Exclusive Territory Rights",
        // "Manage Multiple Outlets",
        // "Highest Revenue Share",
        // "Full Branding Support"

        "Exclusive rights for a large territory",
        "Can appoint & manage outlet franchises in your region",
        "High revenue share from all outlets under you",
        "Full branding & operational support",
        "Priority onboarding + business training",
        "Logistics & supply chain included"

      ],
      description: "Perfect for investors wanting to manage large territories with maximum scalability."
    },
    {
      id: 2,
      title: "Outlet Franchise",
      investment: "₹5,00,000",
      icon: <Store className="w-10 h-10 mb-4" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      features: [
        // "Local Delivery Outlet",
        // "Micro-warehouse Setup",
        // "Inventory Support",
        // "Tech Dashboard Access",
        // "Performance Incentives"

        "Setup of a micro-warehouse / delivery store",
        "Support for inventory, onboarding, packaging & operations",
        "Full staff training + delivery operations guidance",
        "Access to QuickRunFast technology, dashboard & seller system",
        "Standard marketing & branding support"


      ],
      description: "Ideal for entrepreneurs establishing a local delivery business with full support."
    },
    {
      id: 3,
      title: "Mini Franchise",
      investment: "₹25,000",
      icon: <Home className="w-10 h-10 mb-4" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      features: [
        // "Operate from Home",
        // "No Warehouse Required",
        // "Minimal Setup Cost",
        // "Mobile App Access",
        // "Monthly Incentives"
            "No warehouse needed",
            "Can operate from home or a small shop",
            "Very low setup cost",
            "Can sell limited product categories",
            "Training + app access included",
            "💵 Earning Model: Per-order commission,Monthly sales performance incentives"



      ],
      description: "Perfect for small shop owners or individuals starting with minimal investment."
    },

    {
      id: 4,
      title: "Vendor Code Franchise",
      investment: "Zero / Minimal ",
      icon: <Home className="w-10 h-10 mb-4" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      features: [
        // "Operate from Home",
        // "No Warehouse Required",
        // "Minimal Setup Cost",
        // "Mobile App Access",
        // "Monthly Incentives",
        "Unique vendor code to list products on the platform",
        "Access to thousands of active buyers",
        "Support for catalog creation & product uploads",
        "Regular payment settlements",
        "Suitable for grocery, FMCG, vegetables, bakery, homemade items, and more"
      ],
      description: "Perfect for small shop owners or individuals starting with minimal investment."
    }
    

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Franchise Spots Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Start Your Own
            <span className="block text-amber-200">Franchise Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Low Investment • High Profit Margins • Complete Support System
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[180px]">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[180px]">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[180px]">
              <div className="text-2xl font-bold">₹10L+</div>
              <div className="text-sm">Avg. Annual Profit</div>
            </div>
          </div>
          
          <a 
            href="#enquiry-form"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Apply for Franchise <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Franchise?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive support system designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-orange-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Types Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Franchise Type
            </h2>
            <p className="text-gray-600 text-lg">
              Select the perfect model that matches your investment capacity and business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchiseTypes.map((type) => (
              <div 
                key={type.id}
                className={`${type.bgColor} ${type.borderColor} border-2 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${type.color} text-white p-6 text-center`}>
                  {type.icon}
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <div className="text-xl font-bold bg-white/20 backdrop-blur-sm rounded-lg py-2 px-4 inline-block">
                    Investment: {type.investment}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {openCard === type.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-600 mb-4">
                        <span className="font-bold">Expected Returns:</span>{" "}
                        {type.id === 1 && "Highest earning potential with fast scalability & long-term growth."}
                        {type.id === 2 && "Commission per order + performance incentives with steady growth."}
                        {type.id === 3 && "Per order commission + monthly incentives with flexible operations."}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold">Ideal For:</span>{" "}
                        {type.id === 1 && "Investors managing district or city-level operations."}
                        {type.id === 2 && "Entrepreneurs establishing local delivery outlets."}
                        {type.id === 3 && "Small shop owners or individuals starting small."}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleCard(type.id)}
                    className={`w-full mt-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                      type.id === 1 ? "bg-blue-100 text-blue-700 hover:bg-blue-200" :
                      type.id === 2 ? "bg-green-100 text-green-700 hover:bg-green-200" :
                      "bg-orange-100 text-orange-700 hover:bg-orange-200"
                    }`}
                  >
                    {openCard === type.id ? (
                      <>
                        Read Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Form Side */}
              <div className="md:w-2/3 p-8 md:p-12 bg-white">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Apply for Franchise Partnership</h2>
                  <p className="text-gray-600">
                    Fill this form and our Franchise Manager will contact you within 24 hours with complete details.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="Your city"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Investment Plan
                      </label>
                      <select
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        value={form.plan}
                        onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      >
                        <option>Super Franchise — ₹25,00,000</option>
                        <option>Outlet Franchise — ₹5,00,000</option>
                        <option>Mini Franchise — ₹25,000</option>
                        <option>Vendor Code Franchise - Zero / Minimal </option>
                      
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        placeholder="Tell us about your business experience or any specific requirements..."
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                        rows="4"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    Request Franchise Kit & Consultation
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="md:w-1/3 p-8 md:p-12 text-white">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Proven Business Model</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Complete Training & Setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Marketing & Operational Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Regular Performance Reviews</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>120-690-9586</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>support@quickrunfast.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Available Across India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Franchise Business. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Disclaimer: Returns shown are illustrative and actual results may vary based on location, effort, and market conditions.
          </p>
        </div>
      </footer>
    </div>
  );
}