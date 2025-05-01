import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About InvoicePro | Modern Invoicing Solutions</title>
        <meta
          name="description"
          content="Discover InvoicePro's journey to revolutionize invoicing for freelancers and small businesses with our intuitive, powerful software."
        />
        <meta
          property="og:title"
          content="About InvoicePro | Modern Invoicing Solutions"
        />
        <meta
          property="og:description"
          content="Learn about our mission to simplify financial workflows for businesses worldwide."
        />
      </Helmet>

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
        {/* Background elements */}
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
            Powering Business Growth Through Simplicity
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            At InvoicePro, we're transforming how businesses manage their finances with intuitive, powerful invoicing tools designed for the modern entrepreneur.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/founders.jpg"
                  alt="InvoicePro founding team"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                  <p className="text-sm font-medium">Our founding team in 2020</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                OUR BEGINNINGS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                From Frustration to Innovation
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4 sm:mb-6">
                  InvoicePro was founded in 2020 by a team of freelancers and small business owners who were frustrated with the existing invoicing solutions. We found that most software was either overly complex enterprise systems or overly simplistic tools that couldn't handle real business needs. After struggling with clunky interfaces, missing features, and poor customer support, we decided to build the solution we wished existed.
                </p>
                <p className="mb-4 sm:mb-6">
                  What began as a side project to solve our own invoicing headaches quickly grew into something much bigger. Within months of our beta launch, thousands of users had signed up, validating our core belief: businesses needed invoicing software that balanced power with simplicity. Today, we serve clients in over 45 countries, processing millions in transactions monthly, but we've never lost sight of those early days and the problems we set out to solve.
                </p>
                <p>
                  Our journey has been guided by constant feedback from our users. Every feature, every design decision, and every policy is crafted with real business needs in mind. We're not just building software - we're building tools that empower businesses to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                OUR MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Making Financial Management Effortless
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4 sm:mb-6">
                  We believe financial software should work for you, not the other way around. Our mission is to eliminate the friction and frustration from business finances by creating intuitive tools that automate the tedious while providing meaningful insights.
                </p>
                <p className="mb-4 sm:mb-6">
                  Traditional accounting software often creates more work than it saves, requiring hours of setup, complicated workflows, and constant maintenance. We're changing that paradigm by focusing on what matters most to small businesses and freelancers: getting paid on time, understanding cash flow, and minimizing administrative overhead.
                </p>
                <p>
                  Every feature we build is evaluated against one simple question: does this help our customers focus more on their work and less on paperwork? This philosophy has guided us from day one and continues to shape our product roadmap.
                </p>
              </div>
            </div>
            <div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/office-space.jpg"
                  alt="Team collaborating in office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                  <p className="text-sm font-medium">Our team discussing product vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              OUR CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              The Values That Define Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="md:flex h-full">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img
                    src="/customer-first.jpg"
                    alt="Customer support team"
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Customer First</h3>
                  <div className="prose text-gray-600">
                    <p>
                      We exist to serve our customers, not the other way around. Every feature, policy, and business decision starts with one question: what's best for our users? We prioritize real user needs over flashy features, and we measure our success by our customers' success.
                    </p>
                    <p>
                      Our support team isn't an afterthought - it's a core part of our product. With average response times under 2 hours and a customer satisfaction rating of 98%, we're committed to being there when you need us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="md:flex h-full">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img
                    src="/dashboard.webp"
                    alt="Clean interface design"
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Radical Simplicity</h3>
                  <div className="prose text-gray-600">
                    <p>
                      We believe powerful tools don't need to be complicated. Our design philosophy focuses on removing friction, not adding features. We spend more time removing unnecessary elements than adding new ones, ensuring our software remains intuitive as we grow.
                    </p>
                    <p>
                      This commitment to simplicity extends beyond our interface to our pricing, policies, and documentation. No fine print, no hidden fees, no surprise complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text-Heavy Company History Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Our Evolution Over the Years</h2>
            
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">The Early Days (2020)</h3>
            <p>
              InvoicePro began as a nights-and-weekends project built by our founders to solve their own invoicing frustrations. The initial version was crude but effective - offering just the core features needed to create, send, and track invoices. Our first office was Sarah's living room, with Michael coding at the kitchen table. Within three months of our beta launch, we had 500 active users, mostly friends and colleagues of the founders.
            </p>
            <p>
              The turning point came when we were featured in a popular business blog. Overnight, our user base grew tenfold, and we realized we had tapped into a real need in the market. We incorporated the company, raised a small seed round from angel investors, and began building out the team.
            </p>

            <div className="my-6 sm:my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/early-office.jpg"
                alt="Early InvoicePro office"
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 mt-2 px-2">Our first office space in 2020</p>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-12 mb-3 sm:mb-4">Growth Phase (2021-2022)</h3>
            <p>
              2021 marked our transition from a side project to a full-fledged business. We released our first major product update with features like recurring invoices and client portals. Our team grew from 3 to 15 people, all working remotely across different time zones. This period taught us valuable lessons about scaling a product while maintaining quality and a strong company culture.
            </p>
            <p>
              The launch of our mobile apps in 2022 was a watershed moment. For the first time, users could manage their invoices completely from their phones. This opened up our market to more mobile-dependent entrepreneurs and freelancers who worked on the go. By the end of 2022, we had processed over $100 million in invoices and expanded to support multiple currencies.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-12 mb-3 sm:mb-4">Today and Beyond</h3>
            <p>
              Today, InvoicePro serves over 50,000 businesses worldwide with a team of 45 dedicated professionals. We've expanded beyond invoicing to offer integrated payments, expense tracking, and basic accounting features - always with our signature focus on simplicity. Our roadmap includes AI-powered insights, deeper accounting integrations, and expanded global payment options.
            </p>
            <p>
              What hasn't changed is our commitment to our original vision: building financial tools that disappear into the background, letting business owners focus on what they do best. As we grow, we remain grounded in the real-world problems that inspired our founding, constantly seeking feedback from our diverse user base to guide our development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-gray-900 rounded-2xl px-6 sm:px-8 py-10 sm:py-12 md:p-16 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Experience Better Invoicing?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join over 50,000 businesses who trust InvoicePro to save time, get paid faster, and focus on what matters most.
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

export default About;