import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Careers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Careers at InvoiceSnap | Join Our Team</title>
        <meta
          name="description"
          content="Join InvoiceSnap's mission to revolutionize business invoicing. Currently no open positions, but we're always looking for talented individuals."
        />
      </Helmet>

      {/* Hero Section */}
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
            Join Our Growing Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Help us build the future of business invoicing with intuitive, powerful tools designed for the modern entrepreneur.
          </p>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              CURRENT STATUS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              No Open Positions at the Moment
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              While we don't have any open positions right now, we're always looking for talented individuals who share our vision.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              We encourage you to stay connected for future opportunities. Our team is growing, and we'd love to hear from passionate individuals who want to make a difference in the world of business software.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Us
              </Link>
              <a
                href="#subscribe"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Stay Updated
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                FUTURE OPPORTUNITIES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Roles We're Looking For
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4 sm:mb-6">
                  As we continue to grow, we're always on the lookout for talented individuals who share our passion for building intuitive, powerful software. Here are some of the roles we typically hire for:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Software Engineers (Frontend & Backend)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Product Designers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Customer Success Specialists</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/office-space.jpg"
                  alt="Team collaborating on project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                  <p className="text-sm font-medium">Our team working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              OUR CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just software - we're creating a workplace where innovation thrives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Remote-First Environment</h3>
                <div className="prose text-gray-600">
                  <p>
                    Work from anywhere in the world. We believe in giving our team the flexibility to do their best work, whether that's from home, a co-working space, or while traveling.
                  </p>
                  <p>
                    Our distributed team spans multiple time zones, bringing diverse perspectives to every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Continuous Learning</h3>
                <div className="prose text-gray-600">
                  <p>
                    We invest in your growth with regular learning opportunities, conference attendance, and access to premium learning resources.
                  </p>
                  <p>
                    Every team member has a dedicated learning budget and time set aside for professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div id="subscribe" className="bg-gray-900 rounded-2xl px-6 sm:px-8 py-10 sm:py-12 md:p-16 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Stay Updated on Future Opportunities
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to be the first to know when new positions become available.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;