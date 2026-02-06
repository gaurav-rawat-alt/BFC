import React from "react";
import { Link } from "react-router-dom";

const GroupBusiness = ({ 
  pageTitle = "GROUP SCHEMES", 
  breadcrumbs = ["Home", "Group Schemes"] 
}) => {
  const groupServices = [
    { 
      label: "Contact for Group Insurance Scheme", 
      path: "/group-business/contact"
    },
    { 
      label: "Group Customer/Annuitant Login", 
      path: "/group-business/customer-login"
    },
    { 
      label: "Pension & Group Schemes", 
      path: "/group-business/pension-schemes"
    },
    { 
      label: "Gratuity Plus NAV", 
      path: "/group-business/gratuity-plus-nav"
    }
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
          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Title */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 border-l-4 border-yellow-400 pl-3 mb-8">
              {pageTitle}
            </h1>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Group Insurance Scheme is life insurance protection to groups of people. This scheme is ideal for employers, associations, societies etc. and allows you to enjoy group benefits at really low costs.
              </p>
            </div>

            {/* Service Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {groupServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-blue-900 hover:bg-blue-800 text-white text-center px-6 py-8 rounded-full transition-colors block"
                >
                  <span className="text-sm sm:text-base font-medium leading-tight">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-arrow-small-left mr-2"></i>
                Back to Previous
              </button>

              {/* Last Modified Date */}
              <div className="text-xs sm:text-sm text-blue-600 font-medium">
                Page Last Update Date : 29/9/2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBusiness;