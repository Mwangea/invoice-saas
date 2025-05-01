import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Features = () => {
  return (
    <div className="bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>InvoicePro Features | Powerful Invoicing Tools</title>
        <meta
          name="description"
          content="Discover how InvoicePro simplifies invoicing with beautiful templates, easy delivery, and multiple payment options."
        />
      </Helmet>

      {/* Hero Section (Kept as requested) */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] bg-[length:200%_200%]"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
          aria-hidden="true"
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features, Simple Workflow
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to create, send, and track professional invoices in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Timeline Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

        {/* Feature 1: Beautiful Invoices */}
        <div id="invoices" className="relative mb-24 scroll-mt-20">
          <div className="md:flex items-center justify-center gap-12">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  CREATE
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Beautiful Invoices</h2>
                <p className="text-gray-600 mb-6">
                  Create professional, customizable invoices that reflect your brand and impress your clients.
                </p>
                <div className="space-y-4">
                  {[
                    "Choose from 50+ professional templates",
                    "Drag-and-drop interface for easy customization",
                    "Add your logo and brand colors",
                    "Preview before sending"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-50 p-4 rounded-xl">
                <img
                  src="/create-invoice.webp"
                  alt="Invoice creation interface"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <span className="font-bold text-blue-600">Step 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Easy Delivery */}
        <div id="delivery" className="relative mb-24 scroll-mt-20">
          <div className="md:flex items-center justify-center flex-row-reverse gap-12">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  DELIVER
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Easy Delivery</h2>
                <p className="text-gray-600 mb-6">
                  Send invoices directly to clients via email with just a few clicks. Track when they're viewed.
                </p>
                <div className="space-y-4">
                  {[
                    "One-click email delivery",
                    "PDF download option",
                    "Real-time view tracking",
                    "Automatic reminders"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-50 p-4 rounded-xl">
                <img
                  src="/send-invoice.webp"
                  alt="Invoice delivery interface"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <span className="font-bold text-blue-600">Step 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Payment Options */}
        <div id="payments" className="relative mb-24 scroll-mt-20">
          <div className="md:flex items-center justify-center gap-12">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  GET PAID
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Multiple Payment Options</h2>
                <p className="text-gray-600 mb-6">
                  Offer clients various payment methods to make it easier for them to pay you promptly.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "💳", name: "Credit Cards" },
                    { icon: "🏦", name: "Bank Transfer" },
                    { icon: "📱", name: "Digital Wallets" },
                    { icon: "🔗", name: "Payment Links" }
                  ].map((method, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <span className="text-xl mr-2">{method.icon}</span>
                      <span className="font-medium text-gray-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-50 p-4 rounded-xl">
                <img
                  src="/payment-options.webp"
                  alt="Payment options interface"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <span className="font-bold text-blue-600">Step 3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Tracking */}
        <div id="tracking" className="relative mb-24 scroll-mt-20">
          <div className="md:flex items-center justify-center flex-row-reverse gap-12">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  TRACK
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking & Reports</h2>
                <p className="text-gray-600 mb-6">
                  Monitor invoice status, view payment history, and generate financial reports with ease.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time dashboard overview",
                    "Detailed activity logs",
                    "Custom report generation",
                    "Export to accounting software"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-50 p-4 rounded-xl">
                <img
                  src="/reports-dashboard.webp"
                  alt="Tracking dashboard"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <span className="font-bold text-blue-600">Step 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA (Kept as requested) */}
        <section className="bg-gray-900 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Invoicing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using InvoicePro to get paid faster and work smarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70"
            >
              View Pricing
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;