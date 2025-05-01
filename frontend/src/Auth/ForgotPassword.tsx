import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] bg-[length:200%_200%] animate-gradientShift">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Forgot Password | InvoicePro</title>
        <meta
          name="description"
          content="Reset your InvoicePro account password."
        />
      </Helmet>

      {/* Background elements */}
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

      {/* Header with home link */}
      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-300 transition-colors"
          >
            InvoicePro
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Forgot your password?</h1>
              <p className="text-white/80">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4e6] hover:to-[#0066cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                >
                  Send reset link
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Remember your password? Sign in
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 mr-1"
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
              Return to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;