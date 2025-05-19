import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Better Invoice Management",
    excerpt: "Learn how to streamline your invoicing process and get paid faster with these proven strategies.",
    category: "Business Tips",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      role: "Business Consultant"
    },
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/blog1.webp",
    tags: ["Invoicing", "Business", "Productivity"]
  },
  {
    id: 2,
    title: "The Future of Digital Payments",
    excerpt: "Explore how emerging technologies are transforming the way businesses handle payments.",
    category: "Technology",
    author: {
      name: "Michael Chen",
      avatar: "/avatars/michael.jpg",
      role: "Tech Analyst"
    },
    date: "2024-03-14",
    readTime: "8 min read",
    image: "/blog/digital-payments.jpg",
    tags: ["Payments", "Technology", "Future"]
  },
  {
    id: 3,
    title: "How to Handle Late Payments",
    excerpt: "Learn effective strategies for dealing with late-paying clients while maintaining professional relationships.",
    category: "Business Tips",
    author: {
      name: "Emma Davis",
      avatar: "/avatars/emma.jpg",
      role: "Financial Advisor"
    },
    date: "2024-03-13",
    readTime: "6 min read",
    image: "/blog/late-payments.jpg",
    tags: ["Payments", "Business", "Client Relations"]
  },
  {
    id: 4,
    title: "New Features: Automated Payment Reminders",
    excerpt: "Discover how our new automated payment reminder system can help you get paid faster.",
    category: "Product Updates",
    author: {
      name: "David Wilson",
      avatar: "/avatars/david.jpg",
      role: "Product Manager"
    },
    date: "2024-03-12",
    readTime: "4 min read",
    image: "/blog/automated-reminders.jpg",
    tags: ["Features", "Automation", "Payments"]
  },
  {
    id: 5,
    title: "The Psychology of Pricing: How to Set the Right Rates",
    excerpt: "Understanding the psychology behind pricing can help you maximize your revenue while keeping clients happy.",
    category: "Business Tips",
    author: {
      name: "Lisa Chen",
      avatar: "/avatars/lisa.jpg",
      role: "Pricing Strategist"
    },
    date: "2024-03-11",
    readTime: "7 min read",
    image: "/blog/pricing-psychology.jpg",
    tags: ["Pricing", "Business", "Strategy"]
  },
  {
    id: 6,
    title: "Building a Strong Client Base: A Comprehensive Guide",
    excerpt: "Learn proven strategies for attracting and retaining high-value clients for your business.",
    category: "Business Tips",
    author: {
      name: "James Wilson",
      avatar: "/avatars/james.jpg",
      role: "Business Development"
    },
    date: "2024-03-10",
    readTime: "9 min read",
    image: "/blog/client-base.jpg",
    tags: ["Clients", "Business", "Growth"]
  }
];

const categories = [
  {
    name: "Business Tips",
    description: "Practical advice and strategies for running a successful business",
    count: 4
  },
  {
    name: "Technology",
    description: "Latest trends and innovations in business technology",
    count: 1
  },
  {
    name: "Product Updates",
    description: "New features and improvements to our platform",
    count: 1
  },
  {
    name: "Case Studies",
    description: "Real-world examples of businesses using our platform",
    count: 0
  },
  {
    name: "Tutorials",
    description: "Step-by-step guides to help you get the most out of our platform",
    count: 0
  }
];

const BlogCategory = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const currentCategory = categories.find(cat => cat.name === category) || categories[0];
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts
    .filter(post => post.category === category)
    .filter(post => selectedTags.length === 0 || post.tags.some(tag => selectedTags.includes(tag)))
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.readTime.localeCompare(a.readTime);
        default:
          return 0;
      }
    });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>{currentCategory.name} | InvoicePro Blog</title>
        <meta name="description" content={currentCategory.description} />
        <meta name="keywords" content={`${currentCategory.name}, ${currentCategory.description}`} />
        <meta property="og:title" content={`${currentCategory.name} | InvoicePro Blog`} />
        <meta property="og:description" content={currentCategory.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${currentCategory.name} | InvoicePro Blog`} />
        <meta name="twitter:description" content={currentCategory.description} />
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-white/90 mb-4">
              {currentCategory.description}
            </p>
            <p className="text-white/80">
              {currentCategory.count} articles
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={`/blog/category/${cat.name}`}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      cat.name === category
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{cat.name}</span>
                      <span className="text-sm text-gray-500">{cat.count}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-primary-100 text-primary-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-9">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredPosts.length} Articles
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                aria-label="Sort articles by"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

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

export default BlogCategory; 