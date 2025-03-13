import { Component } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log the error to an error reporting service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[400px] flex items-center justify-center p-8"
        >
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {error?.message ||
                "An unexpected error occurred. Please try again later."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8DC63F] hover:bg-[#72A730] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8DC63F]"
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
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Page
            </button>
            {process.env.NODE_ENV === "development" && error && (
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-left font-mono text-gray-700 whitespace-pre-wrap">
                  {error.stack}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  onError: PropTypes.func,
};

export default ErrorBoundary;
