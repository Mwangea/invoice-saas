import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import blogPosts from '../data/blogPosts';

// Mock data for comments
const comments = [
  {
    id: 1,
    author: "John Smith",
    avatar: "/avatars/john.jpg",
    content: "Great article! I've implemented several of these tips and seen a significant improvement in my payment collection times.",
    date: "2024-03-15",
    likes: 12
  },
  {
    id: 2,
    author: "Emily Brown",
    avatar: "/avatars/emily.jpg",
    content: "The section on payment terms was particularly helpful. I've updated my invoice template to include more detailed terms.",
    date: "2024-03-15",
    likes: 8
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState<number[]>([]);

  // Find the blog post by id
  const currentPost = blogPosts.find(post => post.id === Number(id));

  // If post not found, show error message
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = (commentId: number) => {
    setLikedComments(prev => 
      prev.includes(commentId) 
        ? prev.filter(id => id !== commentId)
        : [...prev, commentId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>{currentPost.title} | InvoiceSnap Blog</title>
        <meta name="description" content={currentPost.content.substring(0, 160)} />
        <meta name="keywords" content={currentPost.tags.join(", ")} />
        <meta property="og:title" content={currentPost.title} />
        <meta property="og:description" content={currentPost.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={currentPost.date} />
        <meta property="article:author" content={currentPost.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentPost.title} />
        <meta name="twitter:description" content={currentPost.content.substring(0, 160)} />
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
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              {currentPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white/90">
              <img
                src={currentPost.author.avatar}
                alt={currentPost.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="font-medium">{currentPost.author.name}</p>
                <p className="text-sm">{currentPost.date} · {currentPost.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Return Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <article>
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {currentPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Author Bio */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-start space-x-4">
                  <img
                    src={currentPost.author.avatar}
                    alt={currentPost.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {currentPost.author.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{currentPost.author.role}</p>
                    <p className="text-gray-600">{currentPost.author.bio}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form className="mb-8">
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
                  rows={4}
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {comment.author}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                      <div className="mt-2 flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(comment.id)}
                          className={`flex items-center space-x-1 text-sm ${
                            likedComments.includes(comment.id)
                              ? "text-primary-600"
                              : "text-gray-500 hover:text-primary-600"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill={likedComments.includes(comment.id) ? "currentColor" : "none"}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-sm text-gray-500 hover:text-primary-600">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Related Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Posts
              </h3>
              <div className="space-y-6">
                {currentPost.relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block group"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/90 mb-4">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/20 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 