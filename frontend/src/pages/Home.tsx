import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    // This could be replaced with CSS-only solution
    const gradient = document.getElementById("animated-gradient");
    if (gradient) {
      gradient.style.animation = "gradientShift 15s ease infinite";
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>InvoicePro | Create Professional Invoices Instantly</title>
        <meta
          name="description"
          content="Create and send professional invoices in seconds with InvoicePro. Perfect for freelancers, contractors, and small businesses. Get started with a 14-day free trial."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="InvoicePro | Professional Invoicing Made Easy"
        />
        <meta
          property="og:description"
          content="Create, send, and track professional invoices in seconds with InvoicePro."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourinvoiceprodomain.com" />
        <meta
          property="og:image"
          content="https://yourinvoiceprodomain.com/preview-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourinvoiceprodomain.com" />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "InvoicePro | Create Professional Invoices Instantly",
          description:
            "Create and send professional invoices in seconds with InvoicePro.",
          url: "https://yourinvoiceprodomain.com",
          publisher: {
            "@type": "Organization",
            name: "InvoicePro",
            logo: {
              "@type": "ImageObject",
              url: "https://yourinvoiceprodomain.com/logo.png",
            },
          },
        })}
      </script>

      {/* Background elements */}
      <div
        id="animated-gradient"
        className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] bg-[length:200%_200%]"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTEgMWg0MHY0MEgxVjF6IiBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPjwvc3ZnPg==')]"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-600 rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
      ></div>

      {/* Header Spacer */}
      <div className="h-18"></div>

      {/* Hero Content */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              aria-label="New feature announcement"
            >
              <span className="text-sm font-medium text-white">
                New: AI-powered invoicing
              </span>
              <span className="ml-2 animate-pulse" aria-hidden="true">
                ✨
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Create and Send Invoices Instantly
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Anytime, Anywhere
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Create and send professional invoices in seconds from your phone
              or laptop. Fast, easy, and designed for freelancers, contractors,
              creatives, and small business owners.
            </p>

            <div className="flex flex-row w-full gap-2 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="flex-1 relative px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base md:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <span className="relative z-10">Get Started for Free</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
              </Link>
              <Link
                to="/features"
                className="flex-1 px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base md:text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                See How It Works
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/90 mt-8">
              <div className="flex items-center bg-white/5 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                <div className="bg-blue-500/20 p-1 rounded-full mr-2 sm:mr-3">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">14-day free trial</span>
              </div>
              <div className="flex items-center bg-white/5 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                <div className="bg-blue-500/20 p-1 rounded-full mr-2 sm:mr-3">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-xl mx-auto">
              {/* Floating invoice card elements */}
              <div
                className="absolute -top-8 -left-8 w-32 h-40 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg transform rotate-6 animate-float"
                aria-hidden="true"
              >
                <div className="p-3">
                  <div className="h-2 w-16 bg-blue-400/30 rounded-full mb-2"></div>
                  <div className="h-2 w-10 bg-blue-400/20 rounded-full"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Main dashboard image with floating effect */}
              <div className="relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="/dashboard.webp"
                  alt="InvoicePro dashboard showing sample invoice creation interface"
                  className="w-full rounded-xl shadow-2xl border border-white/10"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              {/* Floating stats badge */}
              <div
                className="absolute -bottom-18 -right-6 bg-white text-blue-900 px-4 py-3 rounded-lg shadow-xl font-bold animate-float-delay"
                aria-hidden="true"
              >
                <div className="text-2xl">99%</div>
                <div className="text-xs font-medium">Faster Invoicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content */}
      <section className="relative py-20 bg-[#eceff3]">
        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                Get Paid Faster
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies the invoicing process so you can focus on
              what matters most - your business.
            </p>
          </div>

          {/* Features grid with cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <article className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Beautiful Invoices
              </h3>
              <p className="text-gray-600 mb-5">
                Create professional, customizable invoices that reflect your
                brand and impress your clients.
              </p>
              <Link
                to="/features#invoices"
                className="inline-flex items-center text-blue-600 font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Learn more about Beautiful Invoices"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </article>

            {/* Feature 2 */}
            <article className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-lg bg-indigo-50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Easy Delivery
              </h3>
              <p className="text-gray-600 mb-5">
                Send invoices directly to clients via email with just a few
                clicks. Track when they're viewed.
              </p>
              <Link
                to="/features#delivery"
                className="inline-flex items-center text-indigo-600 font-medium group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                aria-label="Learn more about Easy Delivery"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </article>

            {/* Feature 3 */}
            <article className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-lg bg-purple-50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Multiple Payment Options
              </h3>
              <p className="text-gray-600 mb-5">
                Offer clients various payment methods to make it easier for them
                to pay you promptly.
              </p>
              <Link
                to="/features#payments"
                className="inline-flex items-center text-purple-600 font-medium group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                aria-label="Learn more about Payment Options"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative py-24 bg-[#1a1d24] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#2d3748] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4a5568] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              WORKFLOW
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Create and send professional invoices in just three simple steps
            </p>
          </div>

          {/* Steps - Horizontal cards with connecting arrows */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {/* Step 1 */}
            <article className="relative group w-full md:w-1/3">
              <div className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] p-8 rounded-xl shadow-2xl border border-[#2d3748] h-full transition-all duration-300 group-hover:border-[#00c6ff] focus-within:border-[#00c6ff]">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <div className="w-16 h-16 mb-6 bg-[#2d3748] rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#00c6ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  Create Your Invoice
                </h3>
                <p className="text-gray-400 text-center">
                  Add your business details, client information, and itemize
                  your products or services.
                </p>
              </div>
            </article>

            {/* Arrow connector */}
            <div className="hidden md:block" aria-hidden="true">
              <svg
                className="w-12 h-12 text-[#4a5568]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>

            {/* Step 2 */}
            <article className="relative group w-full md:w-1/3">
              <div className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] p-8 rounded-xl shadow-2xl border border-[#2d3748] h-full transition-all duration-300 group-hover:border-[#00c6ff] focus-within:border-[#00c6ff]">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <div className="w-16 h-16 mb-6 bg-[#2d3748] rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#00c6ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  Customize & Preview
                </h3>
                <p className="text-gray-400 text-center">
                  Add your logo, choose payment terms, and preview your
                  professional invoice.
                </p>
              </div>
            </article>

            {/* Arrow connector */}
            <div className="hidden md:block" aria-hidden="true">
              <svg
                className="w-12 h-12 text-[#4a5568]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>

            {/* Step 3 */}
            <article className="relative group w-full md:w-1/3">
              <div className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] p-8 rounded-xl shadow-2xl border border-[#2d3748] h-full transition-all duration-300 group-hover:border-[#00c6ff] focus-within:border-[#00c6ff]">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <div className="w-16 h-16 mb-6 bg-[#2d3748] rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-[#00c6ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  Send & Get Paid
                </h3>
                <p className="text-gray-400 text-center">
                  Email the invoice directly to your client and track when they
                  view and pay it.
                </p>
              </div>
            </article>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1a1d24]"
              aria-label="Start creating invoices now"
            >
              Start Creating Invoices Now
            </Link>
            <p className="text-gray-500 mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-50 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
              CUSTOMER STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who switched to InvoicePro
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Featured Testimonial */}
            <article className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-10 rounded-2xl shadow-xl text-white">
              <div className="flex items-center mb-8">
                <div
                  className="text-yellow-400 flex mr-4"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                  Featured Story
                </span>
              </div>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                "InvoicePro reduced our billing time by 80% and improved our
                cash flow dramatically. The payment tracking alone is worth the
                subscription!"
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/avatar-featured.jpg"
                  alt="Alex Morgan"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#00c6ff] mr-4"
                  width="56"
                  height="56"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-lg">Alex Morgan</h4>
                  <p className="text-gray-300">CEO, Design Studio</p>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-400">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Secondary Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <article className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="flex items-center mb-4"
                  aria-label="5 out of 5 stars"
                >
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Switching to InvoicePro was the best business decision we
                  made last year. So easy to use!"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/avatar-1.jpg"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sarah Emmanuel
                    </h4>
                    <p className="text-sm text-gray-500">Freelance Designer</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 2 */}
              <article className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="flex items-center mb-4"
                  aria-label="5 out of 5 stars"
                >
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The mobile app is a game-changer for my contracting
                  business."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/avatar-2.jpg"
                    alt="Michael Chen"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Michael Chen
                    </h4>
                    <p className="text-sm text-gray-500">Contractor</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 3 */}
              <article className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="flex items-center mb-4"
                  aria-label="4 out of 5 stars"
                >
                  <div className="text-yellow-400 flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-5 h-5 fill-current text-gray-300"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Customer support is exceptional. They helped me migrate all
                  my client data."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/avatar-3.jpg"
                    alt="David Rodriguez"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      David Rodriguez
                    </h4>
                    <p className="text-sm text-gray-500">
                      Marketing Consultant
                    </p>
                  </div>
                </div>
              </article>

              {/* Testimonial 4 */}
              <article className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="flex items-center mb-4"
                  aria-label="5 out of 5 stars"
                >
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The analytics dashboard gives me great insights into my
                  business."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/avatar-4.jpg"
                    alt="Emily Wilson"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Emily Wilson
                    </h4>
                    <p className="text-sm text-gray-500">Photographer</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Auto-sliding Client Logos */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-center text-gray-500 mb-8 text-lg font-medium">
              Trusted by innovative businesses worldwide
            </p>

            {/* Logo Marquee Container */}
            <div className="relative overflow-hidden py-4">
              {/* Duplicate set for seamless looping */}
              <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={`set-${i}`}>
                    <img
                      src="/logo-1.avif"
                      alt="TechCorp"
                      className="h-8 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="120"
                      height="32"
                      loading="lazy"
                    />
                    <img
                      src="/logo-2.svg"
                      alt="DesignHub"
                      className="h-10 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="150"
                      height="40"
                      loading="lazy"
                    />
                    <img
                      src="/logo-3.svg"
                      alt="Creative Solutions"
                      className="h-12 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="180"
                      height="48"
                      loading="lazy"
                    />
                    <img
                      src="/logo-4.png"
                      alt="Global Ventures"
                      className="h-8 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="120"
                      height="32"
                      loading="lazy"
                    />
                    <img
                      src="/logo-5.svg"
                      alt="Innovate Inc"
                      className="h-10 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="150"
                      height="40"
                      loading="lazy"
                    />
                    <img
                      src="/logo-6.webp"
                      alt="Digital Partners"
                      className="h-8 opacity-70 hover:opacity-100 transition-opacity inline-block mx-8"
                      width="120"
                      height="32"
                      loading="lazy"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Join our happy customers"
            >
              Join Our Happy Customers
            </Link>
          </div>
        </div>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-[#eceff3] overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-blue-50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full mb-6 animate-bounce">
              <span className="text-sm font-medium text-white">
                GET STARTED NOW
              </span>
              <svg
                className="ml-2 w-4 h-4 text-black animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Invoicing?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                12,000+
              </span>{" "}
              businesses using InvoicePro to get paid faster and work smarter.
            </p>

            {/* Action cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <article className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Free Trial
                </h3>
                <p className="text-gray-600 mb-4">
                  14 days, no credit card needed
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Start free trial"
                >
                  Start Now
                </Link>
              </article>

              <article className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  View Plans
                </h3>
                <p className="text-gray-600 mb-4">
                  Flexible options for every business
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-gray-700 font-medium border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="View pricing plans"
                >
                  Compare Plans
                </Link>
              </article>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Secure payments", "24/7 support", "30-day guarantee"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 px-4 py-2 rounded-full"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden"
          aria-hidden="true"
        >
          {[...Array(6)].map((_, i) => {
            const size = Math.random() * 40 + 20;
            return (
              <div
                key={i}
                className="absolute bottom-0 opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  animation: `float-up ${
                    Math.random() * 15 + 10
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .animate-bounce, .animate-pulse, .animate-float, .animate-float-delay, [style*="animation"] {
              animation: none !important;
            }
          }
          @keyframes float-up {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
            100% { transform: translateY(-100vh) rotate(20deg); opacity: 0; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}</style>
      </section>

      {/* Global Styles */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Home;
