import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'annual'

  return (
    <div className="bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>InvoicePro Pricing | Simple, Transparent Plans</title>
        <meta
          name="description"
          content="Choose the perfect InvoicePro plan for your business. Start with our free plan or upgrade to Pro for more features."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background elements */}
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
              Simple pricing for every business
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Start with our free plan or upgrade to unlock powerful features
            </p>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-center">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual billing (save 20%)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all hover:shadow-lg">
            <div className="bg-white px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900">Free</h2>
              <p className="mt-4 text-gray-500">
                Perfect for individuals getting started
              </p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  $0
                </span>
                <span className="ml-1 text-lg font-medium text-gray-500">
                  /month
                </span>
              </div>
              <Link
                to="/register"
                className="mt-8 block w-full bg-gray-50 border border-gray-200 rounded-md py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Get started
              </Link>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    1 invoice per account
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Basic invoice templates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    PDF download
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Email sending
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Invoice history
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Custom branding
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="flex flex-col rounded-2xl border-2 border-blue-600 shadow-xl overflow-hidden transition-all transform hover:scale-[1.02]">
            <div className="bg-white px-6 py-8">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Pro</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Most popular
                </span>
              </div>
              <p className="mt-4 text-gray-500">
                For growing businesses that need more features
              </p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  ${billingCycle === "annual" ? "4.79" : "5.99"}
                </span>
                <span className="ml-1 text-lg font-medium text-gray-500">
                  /month
                </span>
              </div>
              {billingCycle === "annual" && (
                <p className="text-sm text-gray-500 mt-1">
                  Billed annually at $57.48 (save 20%)
                </p>
              )}
              <Link
                to="/register"
                className="mt-8 block w-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff]  border border-transparent rounded-md py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get started
              </Link>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Everything in Free, plus:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Unlimited invoices
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Premium invoice templates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    PDF download
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Email sending
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Invoice history & analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-700">
                    Custom branding
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Plan comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our plans stack up against each other
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Free
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  feature: "Invoices",
                  free: "1 per account",
                  pro: "Unlimited",
                },
                { feature: "Templates", free: "Basic", pro: "Premium" },
                { feature: "PDF download", free: true, pro: true },
                { feature: "Email sending", free: true, pro: true },
                { feature: "Invoice history", free: true, pro: true },
                { feature: "Analytics", free: false, pro: true },
                { feature: "Custom branding", free: true, pro: true },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <svg
                          className="h-5 w-5 text-green-500 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-400 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <svg
                          className="h-5 w-5 text-green-500 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-400 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )
                    ) : (
                      row.pro
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our pricing
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {[
            {
              question: "Can I try InvoicePro for free?",
              answer:
                "Yes! We offer a 14-day free trial for all paid plans. No credit card is required to start your trial.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payments via PayPal.",
            },
            {
              question: "Can I change plans later?",
              answer:
                "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.",
            },
            {
              question: "Do you offer discounts for non-profits?",
              answer:
                "Yes, we offer a 25% discount for registered non-profit organizations. Please contact our sales team with proof of your non-profit status to get this discount applied.",
            },
            {
              question: "What happens if I exceed my plan limits?",
              answer:
                "If you exceed your plan limits, we'll notify you and give you the option to upgrade your plan. For the Free plan, you won't be able to create additional invoices until the next billing cycle or until you upgrade.",
            },
          ].map((faq, index) => (
            <div key={index} className="py-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="relative ml-4 flex-shrink-0 w-5 h-5">
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5 text-gray-500 hidden group-open:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-900 rounded-xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to upgrade your invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using InvoicePro to save time and
              look professional
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:bg-blue-700"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
