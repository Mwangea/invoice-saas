import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import blogPosts from '../data/blogPosts';

const categories = [
  "All",
  "Business Tips",
  "Technology",
  "Product Updates",
  "Case Studies",
  "Tutorials"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredPosts.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [filteredPosts.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Blog | InvoiceSnap - Latest Insights on Invoicing and Business</title>
        <meta name="description" content="Discover the latest insights, tips, and updates about invoicing, business management, and financial technology on the InvoiceSnap blog." />
        <meta name="keywords" content="invoicing, business tips, financial technology, payment solutions, invoice management" />
        <meta property="og:title" content="InvoiceSnap Blog - Latest Insights on Invoicing and Business" />
        <meta property="og:description" content="Discover the latest insights, tips, and updates about invoicing, business management, and financial technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InvoiceSnap Blog - Latest Insights on Invoicing and Business" />
        <meta name="twitter:description" content="Discover the latest insights, tips, and updates about invoicing, business management, and financial technology." />
      </Helmet>

      {/* Hero Section */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            InvoiceSnap Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Insights, tips, and updates to help you manage your business finances better
          </p>
        </div>
      </section>

      {/* Featured Post Carousel */}
      <section className="relative py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[400px]">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                        {post.category}
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {post.title}
                      </h2>
                      <p className="text-white/90 mb-6 max-w-2xl">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      {/* Share it on */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm text-gray-500 mr-2">Share it on:</span>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + '/blog/' + post.id)}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-500 hover:text-blue-700"
                          aria-label="Share on Twitter"
                        >
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg>
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/blog/' + post.id)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-700 hover:text-blue-900"
                          aria-label="Share on Facebook"
                        >
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.origin + '/blog/' + post.id)}&title=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-900 hover:text-blue-950"
                          aria-label="Share on LinkedIn"
                        >
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.378-.028-3.152-1.922-3.152-1.922 0-2.218 1.5-2.218 3.048v5.604h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                        </a>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author.name}
                          </p>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;