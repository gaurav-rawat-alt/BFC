import React, { useState, useEffect, useContext } from 'react';
import { ContactModalContext } from '../../App';

const InsurancePlans = () => {
  const { openContactModal } = useContext(ContactModalContext);
  const plans = [
    {
      name: 'Jeevan Labh',
      features: [
        'Premium paid and proceeds received are eligible for tax exemptions under sections 80C and 10(10D) of the Income Tax Act. ',
        'Sum Assured + Accrued Simple Reversionary Bonuses + Final Additional Bonus (if any)'
      ]
    },
    {
      name: 'Jeevan Utsav',
      features: [
        'Guaranteed annual payout of 10% of Sum Assured starts 3-6 years after premium payment term.',
        'Guaranteed Additions during premium payment term provide added benefits.'
      ]
    },
    {
      name: 'Jeevan Lakshay / Kanyadan Policy',
      features: [
        'Limited premium payment (Policy Term minus 3 years).',
        'Minimum Sum Assured: ₹1,00,000.'
      ]
    },
    {
      name: 'Index Plus',
      features: [
        'Provides a minimum sum assured of 7-10 times the annualized premium.',
        'Monthly premiums start at ₹2500.'
      ]
    },
    {
      name: 'Nivesh Plus',
      features: [
        'Policyholders can choose a sum assured of 1.25 or 10 times the single premium.',
        'A percentage of the single premium is added to the unit fund at specified intervals.'
      ]
    }
  ];

  const categories = [
    { label: 'Protect my Family', active: true },
    { label: 'Wealth Creation', active: false },
    { label: "Children's Future Planning", active: false },
    { label: 'Retirement Planning', active: false }
  ];

 const [activePDF, setActivePDF] = useState(null);

  // ✅ PUT IT HERE
  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      setActivePDF(null);
    }
  };

  if (activePDF) {
    document.addEventListener('keydown', handleEsc);
  }

  return () => {
    document.removeEventListener('keydown', handleEsc);
  };
}, [activePDF]);

  return (
    <div className="bg-white py-12 lg:py-16 relative">

      {/* Modal */}
      {activePDF && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    onClick={() => setActivePDF(null)}
  >
    <div
      className="relative w-[95%] max-w-3xl h-[85vh] bg-white rounded-xl overflow-hidden shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setActivePDF(null)}
        className="absolute top-3 right-3 z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-100"
      >
        ✕
      </button>

      <iframe
        src={activePDF}
        title="Plan Brochure"
        className="w-full h-full border-none"
      />
    </div>
  </div>
)}

      <div className="container mx-auto px-4 lg:px-8">

        <p className="text-gray-600 mb-6">
          Discover insurance plans as per your needs
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${
                category.active
                  ? 'bg-[#003D82] text-white'
                  : 'border text-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                {plan.features.map((f, i) => (
                  <p key={i} className="text-sm mb-2">• {f}</p>
                ))}
              </div>
             <div className="mt-4 flex flex-col md:flex-row gap-3">
              <button
                className="mt-4 bg-[#003D82] text-white py-2 rounded"
                onClick={() => {
                  if (plan.name === 'Jeevan Utsav') {
                    setActivePDF('/pdf/102268-%20Jeevan%20Utsav%20Sales%20Brochure_WEB%20PDF.pdf');
                  } else if (plan.name === 'Jeevan Labh') {
                    setActivePDF('/pdf/LIC_Jeevan-Labh_Brochure_9-inch-x-8-inch_Eng-(1) (1).pdf'); // 👈 add your actual file path here
                  } else if (plan.name === 'Jeevan Lakshay / Kanyadan Policy') {
                    setActivePDF('/pdf/933-Sales-Brochure-Jeevan-Lakshya.pdf')
                  } else if (plan.name === 'Index Plus') {
                    setActivePDF('/pdf/101941 LIC_Index Plus Sales Brochure_FEB 24-WEB.pdf')
                  } else if (plan.name === 'Nivesh Plus') {
                    setActivePDF('/pdf/LIC_Nivesh-Plus_Brochure_9-inch-x-8-inch_Eng_Single-pages-(2).pdf')
                  }
                }}
              >
                Details
              </button>
              <button
                  className="bg-gray-200 text-[#003D82] py-2 rounded border border-[#003D82] font-semibold"
                  onClick={() => openContactModal()}
                >
                  Buy Plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InsurancePlans;