import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Terms of Service | InvoiceSnap</title>
        <meta
          name="description"
          content="InvoiceSnap Terms of Service. Learn about the terms and conditions governing your use of our invoicing platform."
        />
        <meta
          property="og:title"
          content="Terms of Service | InvoiceSnap"
        />
        <meta
          property="og:description"
          content="Understand the terms governing your use of InvoiceSnap's services."
        />
      </Helmet>

      {/* Hero Section with Different Background */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
      <div
          className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] bg-[length:200%_200%]"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
          aria-hidden="true"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            The legal terms governing your use of InvoiceSnap services
          </p>
        </div>
      </section>

      {/* Main Content - Different Layout Approach */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introductory Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Welcome to InvoiceSnap</h2>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your access to and use of InvoiceSnap's website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                Please read these Terms carefully before using our Services. If you don't agree to these Terms, you may not use our Services.
              </p>
            </div>
          </div>

          {/* Terms Sections with Sidebar Navigation */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-6">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Jump to Section</h3>
                  <nav className="space-y-2">
                    <a href="#account-terms" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Account Terms
                    </a>
                    <a href="#payments" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Payments & Billing
                    </a>
                    <a href="#cancellation" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Cancellation
                    </a>
                    <a href="#content" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Content Ownership
                    </a>
                    <a href="#prohibited" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Prohibited Uses
                    </a>
                    <a href="#liability" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Liability
                    </a>
                    <a href="#changes" className="block text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      Changes to Terms
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Account Terms */}
              <div id="account-terms" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Account Terms</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>Eligibility:</strong> You must be at least 18 years old to use our Services. By using InvoiceSnap, you represent that you meet this requirement.
                    </li>
                    <li>
                      <strong>Account Security:</strong> You're responsible for maintaining the security of your account and password. InvoiceSnap cannot and will not be liable for any loss or damage from your failure to comply with this obligation.
                    </li>
                    <li>
                      <strong>Account Information:</strong> You must provide accurate and complete information when creating an account and keep it updated.
                    </li>
                    <li>
                      <strong>One Account Per User:</strong> Each account is for use by a single user. You may create separate accounts for team members if needed.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Payments & Billing */}
              <div id="payments" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Payments & Billing</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>Fees:</strong> You agree to pay all fees associated with your subscription plan. Fees are non-refundable except as required by law.
                    </li>
                    <li>
                      <strong>Payment Methods:</strong> You must provide a valid payment method. We may update your payment method using information provided by our payment processors.
                    </li>
                    <li>
                      <strong>Billing Cycle:</strong> Your subscription will automatically renew at the end of each billing cycle unless you cancel.
                    </li>
                    <li>
                      <strong>Price Changes:</strong> We may change our prices with 30 days notice. Price changes won't affect current subscriptions until renewal.
                    </li>
                    <li>
                      <strong>Taxes:</strong> You're responsible for all applicable taxes, which will be added to your payment as required by law.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Cancellation */}
              <div id="cancellation" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cancellation</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>How to Cancel:</strong> You may cancel your subscription at any time through your account settings.
                    </li>
                    <li>
                      <strong>Effect of Cancellation:</strong> Upon cancellation, you'll continue to have access to paid features until the end of your current billing period.
                    </li>
                    <li>
                      <strong>Data After Cancellation:</strong> We may retain your data for a limited period after cancellation, after which it may be permanently deleted.
                    </li>
                    <li>
                      <strong>Reactivation:</strong> You may reactivate your account within 30 days of cancellation to restore your data.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Content Ownership */}
              <div id="content" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Content Ownership</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>Your Content:</strong> You retain ownership of all content you upload or create using our Services.
                    </li>
                    <li>
                      <strong>License to InvoiceSnap:</strong> You grant us a worldwide, non-exclusive license to use, host, and display your content solely to provide the Services.
                    </li>
                    <li>
                      <strong>Our Content:</strong> All rights, title, and interest in our Services (excluding your content) remain our exclusive property.
                    </li>
                    <li>
                      <strong>Feedback:</strong> Any feedback you provide may be used to improve our Services without obligation to you.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div id="prohibited" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 15v3m0-6V9" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">You agree not to use the Services to:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Violate any laws or regulations
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Infringe on intellectual property rights
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Transmit viruses or malicious code
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Send spam or unsolicited messages
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Interfere with the Services' operation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Liability */}
              <div id="liability" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Liability</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>Service Availability:</strong> We strive to maintain service availability but don't guarantee uninterrupted access.
                    </li>
                    <li>
                      <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, InvoiceSnap shall not be liable for any indirect, incidental, or consequential damages.
                    </li>
                    <li>
                      <strong>Total Liability:</strong> Our total liability for any claims related to the Services is limited to the amount you paid us in the 12 months preceding the claim.
                    </li>
                    <li>
                      <strong>Indemnification:</strong> You agree to indemnify us against claims arising from your use of the Services or violation of these Terms.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Changes to Terms */}
              <div id="changes" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                      <strong>Modification Rights:</strong> We may modify these Terms at any time. We'll notify you of significant changes.
                    </li>
                    <li>
                      <strong>Continued Use:</strong> Your continued use of the Services after changes take effect constitutes acceptance of the new Terms.
                    </li>
                    <li>
                      <strong>Disputes:</strong> The Terms in effect when a dispute arises will govern that dispute.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Delaware.
                </p>
              </div>

              {/* Contact */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions About These Terms?</h2>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matches other pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-gray-900 rounded-2xl px-6 sm:px-8 py-10 sm:py-12 md:p-16 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using InvoiceSnap to streamline their invoicing and payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Start Free Trial
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;