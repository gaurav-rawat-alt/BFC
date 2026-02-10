import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const menu = [
  {
    title: "About Us",
    path: "/about",
    children: [
      { label: "History", path: "/about/history" },
      { label: "Objectives Of LIC", path: "/about/objectives" },
      { label: "Know About Your Life Insurance", path: "/about/know-about-your-policy" },
    ],
  },
  {
    title: "Products",
    path: "/products",
    children: [
      { label: "Endowment Plans", path: "/products/endowment-plans" },
      { label: "Whole Life Plans", path: "/products/whole-life-plans" },
      { label: "Money Back Plans", path: "/products/money-back-plans" },
      { label: "Term Assurance Plans", path: "/products/term-assurance-plans" },
    ],
  },
  {
    title: "Group Business",
    path: "/group-business",
    children: [
      { label: "Contact for Group Insurance Scheme", path: "/group-business/contact" },
      { label: "Group Customer/Annuitant Login", path: "/group-business/customer-login" },
      { label: "87A Declaration for Group Annuity", path: "/group-business/87a-declaration" },
      { label: "Pension & Group Schemes New Product", path: "/group-business/new-product" },
      { label: "Pension & Group Schemes Withdrawn Products", path: "/group-business/withdrawn-products" },
      { label: "Gratuity Plus NAV", path: "/group-business/gratuity-plus-nav" },
    ],
  },
  // {
  //   title: "Customer Services",
  //   path: "/customer-services",
  //   children: [
  //     { label: "Customer Corner", path: "/customer-services/customer-corner" },
  //     { label: "Claims settlement requirements", path: "/customer-services/claims-settlement" },
  //     { label: "Spurious Calls", path: "/customer-services/spurious-calls" },
  //     { label: "Update Your Contact details - Offline", path: "/customer-services/update-contact" },
  //     { label: "Unclaimed Amounts of Policyholders", path: "/customer-services/unclaimed-amounts" },
  //     { label: "Bonus Information", path: "/customer-services/bonus-information" },
  //     { label: "Policy Status", path: "/customer-services/policy-status" },
  //     { label: "NRI Center", path: "/customer-services/nri-center" },
  //     { label: "Phone Help Line", path: "/customer-services/phone-help-line" },
  //     { label: "Insurance Selector", path: "/customer-services/insurance-selector" },
  //     { label: "Policy Guidelines & Helpline", path: "/customer-services/policy-guidelines" },
  //     { label: "Tax Benefit", path: "/customer-services/tax-benefit" },
  //   ],
  // },
  // {
  //   title: "NRI",
  //   path: "/nri",
  //   children: [
  //     { label: "NRI Centre", path: "/nri/centre" },
  //     { label: "NRI Customers", path: "/nri/customers" },
  //     { label: "QuickPay-Premium", path: "/nri/quickpay" },
  //     { label: "FATCA/CRS", path: "/nri/fatca-crs" },
  //   ],
  // },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);


  useEffect(() => {
  const handleClickOutside = () => {
    setClickedIndex(null);
    setOpenIndex(null);
    setSelectedChildIndex(0); // Reset to first child when closing
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);


  return (
    <>
      <header className="bg-white border-b border-gray-200 relative">
        <div className="px-2 sm:px-4 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-initial">
            <img 
              src="/images/BFC_header.png" 
              alt="Brilliant Financial Consultant" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain max-w-[70vw] lg:max-w-none"
              onError={(e) => {
                // Fallback to original image if header image fails
                e.target.src = "/images/BFC.jpg";
              }}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 relative">
            {menu.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => {
                  setOpenIndex(i);
                  setSelectedChildIndex(0);
                }}
              >
                <Link
                  to={item.path ?? "#"}
                  className="text-gray-800 flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(i);
                    setSelectedChildIndex(0);
                  }}
                >
                  {item.title}
                  <i className="fi fi-rr-angle-small-down text-xs"></i>
                </Link>

                {/* Desktop Dropdown */}
                {openIndex === i && (
                  <div
                    className="absolute left-0 bg-white shadow-lg border rounded-md mt-2 w-56 z-50"
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => {}}
                  >
                    {item.children.map((c, idx) => (
                      <Link
                        to={c.path}
                        key={idx}
                        className={`block px-4 py-2 text-sm cursor-pointer transition-colors ${
                          idx === selectedChildIndex 
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setOpenIndex(null)}
                        onMouseEnter={() => setSelectedChildIndex(idx)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 z-10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fi fi-rr-menu-burger text-xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white border-b border-gray-200">
          {menu.map((item, i) => (
            <div key={i}>
              <button
                type="button"
                className="w-full flex justify-between items-center py-3 text-gray-800 font-medium border-b border-gray-200 focus:outline-none focus:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenIndex(openIndex === i ? null : i);
                }}
              >
                <span className="flex items-center gap-2 text-left">
                  {item.title}
                </span>
                <i className={`fi fi-rr-angle-small-${openIndex === i ? "up" : "down"} text-gray-500`}></i>
              </button>

              {openIndex === i && (
                <div className="pl-4 py-2 bg-gray-50 border-b border-gray-200">
                  {item.children.map((c, idx) => (
                    <Link
                      key={idx} 
                      to={c.path}
                      className="block text-sm text-gray-700 py-2 pl-2 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenIndex(null);
                      }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
