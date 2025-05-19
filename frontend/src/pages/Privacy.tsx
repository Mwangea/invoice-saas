import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Privacy Policy | InvoiceSnap</title>
        <meta
          name="description"
          content="Learn how InvoiceSnap protects your data and privacy. Our comprehensive privacy policy outlines how we collect, use, and safeguard your information."
        />
        <meta
          property="og:title"
          content="Privacy Policy | InvoiceSnap"
        />
        <meta
          property="og:description"
          content="Your privacy is our priority. Learn how we protect and manage your data."
        />
      </Helmet>

      {/* Hero Section - Matches About page */}
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
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Your privacy is our priority. Learn how we protect and manage your data.
          </p>
        </div>
      </section>

      {/* Main Content - Styled to match About page sections */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              OUR COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Protecting Your Data
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4 sm:mb-6">
                InvoiceSnap ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and safeguarding of information obtained through our invoicing software and related services (collectively, the "Services").
              </p>
              <p>
                We recognize that privacy is important to our users, and we've designed our systems and policies with this principle in mind. This document explains what information we collect, how we use it, and the choices you have regarding your data.
              </p>
            </div>
          </div>

          {/* Information Collection */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                  DATA COLLECTION
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What We Collect
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4 sm:mb-6">
                    We collect information to provide better services to all our users. The types of information we gather depend on how you use our services and can include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Contact and account information you provide when signing up</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Transaction and payment details necessary for invoicing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Usage data about how you interact with our services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Device and technical information for troubleshooting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
                <img
                  src="/data.jpg"
                  alt="Data security illustration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                  <p className="text-sm font-medium">Our security infrastructure protects your data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-10 mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              DATA USAGE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              How We Use Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Operation</h3>
                <p className="text-gray-600">
                  We use your information to provide, maintain, and improve our services, including processing transactions and delivering customer support.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Security & Protection</h3>
                <p className="text-gray-600">
                  Your data helps us detect and prevent fraud, abuse, and security risks to protect our users and services.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Communications</h3>
                <p className="text-gray-600">
                  We may contact you about service updates, security alerts, and administrative messages to keep you informed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Improvements</h3>
                <p className="text-gray-600">
                  We analyze usage patterns to develop new features and improve existing functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              DATA SHARING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              When We Share Information
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4 sm:mb-6">
                We do not sell your personal information. We may share information in these limited circumstances:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">With Your Consent</h3>
                  <p className="text-gray-600">
                    We'll share information when you direct us to, such as when connecting to third-party services.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">For External Processing</h3>
                  <p className="text-gray-600">
                    We provide information to trusted partners who process it on our behalf under strict confidentiality agreements.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">For Legal Reasons</h3>
                  <p className="text-gray-600">
                    We may disclose information if required by law or to protect InvoiceSnap and our users from harm.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Transfers</h3>
                  <p className="text-gray-600">
                    If InvoiceSnap is involved in a merger or acquisition, we may transfer information as part of that transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
              <h2 className="text-2xl font-bold text-white">Our Security Practices</h2>
            </div>
            <div className="p-6 sm:p-8">
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4 sm:mb-6">
                  We implement robust security measures to protect your information:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Encryption of data in transit and at rest using industry-standard protocols</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Strict access controls and authentication requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Comprehensive monitoring for suspicious activity</span>
                  </li>
                </ul>
                <p className="mt-6">
                  While we implement these and other security measures, no system is impenetrable. We cannot guarantee the absolute security of your information.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              YOUR RIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Controlling Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Access and Updates</h3>
                <p className="text-gray-600 mb-4">
                  You can review and update your account information at any time through your InvoiceSnap settings.
                </p>
                <p className="text-gray-600">
                  For additional requests regarding your personal data, please contact our support team.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Portability</h3>
                <p className="text-gray-600 mb-4">
                  You can export your invoice data in standard formats for use with other services.
                </p>
                <p className="text-gray-600">
                  We provide tools to help you migrate your information if you choose to stop using our services.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Deletion</h3>
                <p className="text-gray-600 mb-4">
                  You may delete your account at any time, which will remove your personal information from our active systems.
                </p>
                <p className="text-gray-600">
                  Some information may remain in our backups for a limited period as part of our disaster recovery procedures.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Preferences</h3>
                <p className="text-gray-600 mb-4">
                  You can opt out of promotional communications while still receiving important service notifications.
                </p>
                <p className="text-gray-600">
                  Manage your preferences in your account settings or via unsubscribe links in emails.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-10 mb-16 border border-gray-200">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              POLICY UPDATES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Changes to This Policy
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4 sm:mb-6">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, and other factors. When we do, we'll revise the "last updated" date at the bottom of this page.
              </p>
              <p>
                We encourage you to review this policy regularly to stay informed about how we're protecting your information. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              If you have any questions about our privacy practices or this policy, please don't hesitate to contact us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Matches About page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-gray-900 rounded-2xl px-6 sm:px-8 py-10 sm:py-12 md:p-16 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Experience Better Invoicing?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join over 50,000 businesses who trust InvoiceSnap to save time, get paid faster, and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;