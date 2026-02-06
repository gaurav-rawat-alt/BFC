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
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Your BFC Logo - Proper aspect ratio maintained */}
            <img 
              src="/images/BFC.jpg" 
              alt="Brilliant Financial Consultant" 
              className="h-16 lg:h-20 w-auto object-contain max-w-sm lg:max-w-md"
              onError={(e) => {
                // Fallback if logo not found
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="text-[8px] text-gray-500">Authorized LIC Agent</span>
            {/* Fallback logo if image doesn't load */}
            <div className="hidden items-center gap-3">
              <div className="bg-blue-800 text-white p-2 rounded-full flex items-center justify-center w-12 h-12">
                <i className="fi fi-rr-briefcase text-xl"></i>
              </div>
              <div className="leading-tight">
                <div className="text-2xl lg:text-3xl font-bold text-blue-700 tracking-wide">
                  BFC
                </div>
                <div className="text-[9px] lg:text-[10px] text-gray-700 font-medium -mt-1">
                  BRILLIANT FINANCIAL CONSULTANT <br />
                  <span className="text-[8px] text-gray-500">Authorized LIC Agent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
{/* Desktop Menu */}
<nav className="hidden lg:flex items-center gap-6 relative">
  {menu.map((item, i) => (
    <div
      key={i}
      className="relative"
      onMouseEnter={() => {
        setOpenIndex(i);
        setSelectedChildIndex(0); // Select first child when opening dropdown
      }}     // open dropdown on hover
    >
      <Link
        to={item.path ?? "#"}
        className="text-gray-800 flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition"
        onClick={(e) => {
          e.stopPropagation(); // prevent closing when clicking inside
          setOpenIndex(i); // ensure current dropdown stays open
          setSelectedChildIndex(0); // Select first child when clicking
        }}
      >
        {item.title}
        <i className="fi fi-rr-angle-small-down text-xs"></i>
      </Link>

      {/* Dropdown */}
      {openIndex === i && (
        <div
          className="absolute left-0 bg-white shadow-lg border rounded-md mt-2 w-56 z-50"
          onMouseEnter={() => setOpenIndex(i)} // keep open when hovering dropdown
          onMouseLeave={() => {}} // do nothing here, let click outside handle close
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
              onClick={() => setOpenIndex(null)} // close on click inside item
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
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                className="w-full flex justify-between py-3 text-gray-800 font-medium border-b"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex items-center gap-2">
                  <i className={`${item.icon}`}></i> {item.title}
                </span>
                <i className={`fi fi-rr-angle-small-${openIndex === i ? "up" : "down"}`}></i>
              </button>

              {openIndex === i && (
                <div className="pl-6 py-2 flex flex-col gap-2">
                  {item.children.map((c, idx) => (
                    <span key={idx} className="text-sm text-gray-700">
                      {c}
                    </span>
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
