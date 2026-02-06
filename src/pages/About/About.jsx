import React from "react";
import { Link } from "react-router-dom";

const About = ({ 
  pageTitle = "About Us", 
  breadcrumbs = ["Home", "About Us"] 
}) => {
  const aboutLinks = [
    { label: "History", path: "/about/history" },
    { label: "Objectives Of LIC", path: "/about/objectives" },
    { label: "Know About Your Life Insurance", path: "/about/know-about-your-policy" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Blue Header with Breadcrumb */}
      <div className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm space-x-2">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className="text-white">/</span>}
                <Link 
                  to={index === 0 ? "/" : "#"} 
                  className={`hover:underline ${index === breadcrumbs.length - 1 ? 'text-yellow-300 font-medium' : ''}`}
                >
                  {item}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-12">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Yellow Left Border + Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex justify-between items-start mb-6">
              {/* Title */}
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 border-l-4 border-yellow-400 pl-3">
                {pageTitle}
              </h1>
              
              {/* Last Modified Date */}
              <div className="text-xs sm:text-sm text-blue-600 font-medium">
                Last modified date : 24/1/2025
              </div>
            </div>


            {/* About Links List */}
            <div className="mb-8">
              <ul className="space-y-3">
                {aboutLinks.map((about, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-gray-800 rounded-full mr-4"></span>
                    <Link 
                      to={about.path}
                      className="text-gray-800 hover:text-blue-600 hover:underline transition-colors text-sm sm:text-base"
                    >
                      {about.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section - Back Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-arrow-small-left mr-2"></i>
                Back to Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;