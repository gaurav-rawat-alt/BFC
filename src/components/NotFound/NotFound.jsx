import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  
  return (
    <div className="bg-gray-50">
      {/* Blue Header with Breadcrumb */}
      <div className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-yellow-300 font-medium">Page Not Found</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-12">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-12 text-center">
            {/* Title */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 border-l-4 border-yellow-400 pl-3 mb-8 text-left">
              Page Not Available
            </h1>

            {/* Icon */}
            <div className="mb-8">
              <i className="fi fi-rr-exclamation text-6xl text-blue-700 mb-4"></i>
            </div>

            {/* Message */}
            <div className="mb-8 max-w-2xl mx-auto">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                This is currently not updated on the website. Please contact our executive to know more.
              </p>
              <p className="text-sm text-gray-500">
                Requested path: <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">{location.pathname}</code>
              </p>
            </div>

            {/* Contact Us Button */}
            <div className="mb-12">
              <Link
                to="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-phone-call mr-2"></i>
                Contact Us
              </Link>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-arrow-small-left mr-2"></i>
                Go Back
              </button>

              {/* Home Link */}
              <Link
                to="/"
                className="text-blue-700 hover:text-blue-800 font-medium text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-home mr-2"></i>
                Return to Home
              </Link>
            </div>

            {/* Last Modified Date */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="text-xs sm:text-sm text-blue-600 font-medium">
                Page Last Update Date : 6/2/2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;