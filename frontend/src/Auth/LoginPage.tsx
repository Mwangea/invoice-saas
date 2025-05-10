import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, FormEvent, ChangeEvent } from "react";
import API from "../services/api";
import { AxiosError } from "axios";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      //store token in localStorage
      localStorage.setItem("token", response.data.token);

      // store user data(without password) if needed
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      //Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      if (err instanceof AxiosError) {
        if (err.response) {
          // The request was made and the server responded with a status code
          setError(err.response.data.message || "Login Failed");
        } else if (err.request) {
          //The request was made but no response was received
          setError("No response from server. Please try again.");
        } else {
          //something happened in setting up the request
          setError("An error occurred. Please try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] bg-[length:200%_200%] animate-gradientShift">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Login | InvoicePro</title>
        <meta
          name="description"
          content="Login to your InvoicePro account to create and manage professional invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <header className="relative z-10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors"
          >
            InvoicePro
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-white/80 text-sm sm:text-base">Don't have an account?</span>
            <Link
              to="/register"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-xl border border-white/10">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome back</h1>
              <p className="text-white/80 text-sm sm:text-base">Sign in to your account</p>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}
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
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-white/80">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-white/10 rounded bg-white/5"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-white/80">
                  Remember me
                </label>
              </div>

              <div>
              <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4e6] hover:to-[#0066cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="mt-5 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 bg-transparent text-white/80">Or continue with</span>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  aria-label="sign up with github"
                  className="w-full inline-flex justify-center items-center py-2 px-3 sm:px-4 border border-white/10 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="sign up with Google"

                  className="w-full inline-flex justify-center items-center py-2 px-3 sm:px-4 border border-white/10 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm6.36 14.5c-.223.617-.666 1.16-1.32 1.505-.653.345-1.458.52-2.417.52h-5.25c-.958 0-1.763-.175-2.417-.52-.653-.345-1.096-.888-1.32-1.505-.223-.618-.335-1.39-.335-2.313v-4.375c0-.922.112-1.694.335-2.313.224-.618.667-1.16 1.32-1.505.654-.345 1.46-.52 2.417-.52h5.25c.96 0 1.764.175 2.417.52.654.345 1.097.887 1.32 1.505.224.62.336 1.39.336 2.313v4.375c0 .923-.112 1.695-.336 2.313zM13.5 10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-3.5-2a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <Link
              to="/"
              className="text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
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

export default Login;