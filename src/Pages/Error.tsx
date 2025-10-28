import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ArrowLeft, Home, Mail, AlertTriangle } from 'lucide-react';


interface RouteErrorResponse {
  status: number;
  statusText?: string;
  data?: {
    message?: string;
  };
}

interface ErrorWithMessage {
  message: string;
  stack?: string;
}

function Error() {
  const error = useRouteError();
  
 
  let errorStatus = 500;
  let errorTitle = "Something went wrong";
  let errorMessage = "An unexpected error occurred. Please try again later.";
  
  if (isRouteErrorResponse(error)) {
    const routeError = error as RouteErrorResponse;
    errorStatus = routeError.status;
    
    switch (routeError.status) {
      case 404:
        errorTitle = "Page not found";
        errorMessage = "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.";
        break;
      case 401:
        errorTitle = "Unauthorized";
        errorMessage = "You don't have permission to access this page. Please log in and try again.";
        break;
      case 403:
        errorTitle = "Forbidden";
        errorMessage = "Access to this resource is forbidden.";
        break;
      case 500:
        errorTitle = "Internal Server Error";
        errorMessage = "Our server encountered an error. We're working to fix it.";
        break;
      default:
        errorTitle = routeError.statusText || errorTitle;
        errorMessage = routeError.data?.message || errorMessage;
    }
  } else if (error instanceof Error) {
    const errorWithMessage = error as ErrorWithMessage;
    errorMessage = errorWithMessage.message;
  }

  // Check if we're in development mode
  const isDevelopment = import.meta.env?.MODE === 'development' || 
                        import.meta.env?.DEV === true;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        {/* Error content */}
        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
          {/* Error icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
                <AlertTriangle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Error status code */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-red-200 text-red-600 text-sm font-bold tracking-wider">
              ERROR {errorStatus}
            </span>
          </div>

          {/* Error title */}
          <h1 className="text-center text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              {errorTitle}
            </span>
          </h1>

          {/* Error message */}
          <p className="text-center text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            {errorMessage}
          </p>

          {/* Development error details */}
          {isDevelopment && error instanceof Error && (
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-xs font-mono text-gray-500 break-all">
                {(error as ErrorWithMessage).stack || error.toString()}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Go to Homepage
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
              Contact Support
            </Link>
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform duration-200" />
              Go back to previous page
            </button>
          </div>
        </div>

        {/* Additional help text */}
        <p className="text-center mt-8 text-sm text-gray-500">
          Need immediate assistance? Our support team is here to help 24/7.
        </p>
      </div>
    </div>
  );
}

export default Error;