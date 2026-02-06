import React from "react";

const AboutLifeInsurance = ({ 
  pageTitle = "History", 
  breadcrumbs = ["Home", "About Us", "History"] 
}) => {
  return (
    <div className="bg-gray-50">
      {/* Blue Header with Breadcrumb */}
      <div className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm space-x-2">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className="text-white">/</span>}
                <a 
                  href={index === 0 ? "/" : "#"} 
                  className={`hover:underline ${index === breadcrumbs.length - 1 ? 'text-yellow-300 font-medium' : ''}`}
                >
                  {item}
                </a>
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
            {/* Title */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-6 border-l-4 border-yellow-400 ">
              {pageTitle}
            </h1>

            {/* Section: History of LIC */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Brief History Of Insurance
              </h2>
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  The story of life insurance, as we told it, is the story of mankind. The same instinct that prompts modern businessmen today to secure themselves against loss and disaster existed in primitive man also. They too sought to guard the ill consequences of the wild food and loss of life and were willing to make some sort of sacrifice in order to achieve security. Though the concept of insurance is largely a development of the recent past, particularly after the industrial and - post war centuries - yet its beginningmay be traced to the period of ancient civilisations.
                </p>
                
                <p>
                  Life insurance as we envisage from came to India from England in the year 1818. Oriental Life Insurance Company started by Europeans in Calcutta was the first life insurance company on Indian Soil, do the insurance companies established during their period were brought up with the purpose of looking after the needs of European community and Indian natives were not being insured by these companies. However, later with the efforts of eminent people like Babu Mutty Lal Seal, the foreign life insurance companies began to insure Indian lives. The first Indian life insurance company, Bombay Mutual Life Assurance Society, was formed in in 1870. It was followed by Oriental Life Assurance Company Ltd. (1874), Bharat Insurance Company Ltd. (1896) and Empire of India Life Assurance Company (1897) were some of such companies inspired by nationalism. The Insurance Act, 1912, was the first statute to regulate the Indian insurance companies. house of the great Indian Nabodhism Records in Calcutta, The Indian Merchantile Insurance Ltd. set up the first company to contract all classes of general insurance business.
                </p>

                <p>
                  Life insurance constitute an asset along with being a method of insourcing capital from the relatively small fish business as found so by the of June one, it look so The companies with could business in found so the RBI set course in 1956. During the maxi/reviving of insurance chimagening crisis those, Mandavi, announced company were also Russian active forces close safety. The insurance business was to be from legislation governing not able by means of an Outstanding loss lost, that running hot by means of an complicated loss lost, the Parliament of Both passed that Life Insurance Corporation Act of the Year of June and act that this Insurance Corporations of India was created on 1st September,1956, with the objective of spreading life insurance much more widely and in particular to the rural areas with a view to reach all insutable persons in the country, providing them adequate financial protection against death.
                </p>

                <p>
                  Life Insurance Corporation had 5 animal offices, 33 divisional offices and 212 branch offices, apart from its corporate office in the year 1956. Since life insurance contracts are long term contracts and during the currency of the policy it requires a variety of services many loci not in the form serisly to servicing the operations and place a branch office at each district headquarters, the organisation of Life Insurance Corporation took place over legal numbers of new branch offices were opened. As a result of such expansion, today LIC has offices in the form of 8 Zonal Offices, 113 Divisional Offices and 2,048 Branch Offices covering an area of over 3523.6 crores Iives. Also assigned for the first tentire poucy at 1956-57 period.
                </p>

                <p>
                  Today, Life Insurance Corporation has spread its network through its 8 zonal offices, 113 divisional offices, 113 satellite offices, IMF satellite offices and the Corporate office. Life Insurance Corporations Wide Area Network covers 113 satellite offices and connects all the branches through a Metro Area Network. Life Insurance Corporation is tied up with online Banks and Service providers to offer on-line premium collection facility in selected centres. Life Insurance Corporations ECS and ACH premium payment facility is an addition to customer convenience. Apart from all the financial and UMS, this Central head Indian commercial of Mumbai, Ahmedabad, Bengaluru, Chennai, Hyderabad, Kolkata, New Delhi, Pune and many other cities. With a group of approaching easy access to p stoh/hokers, Life Insurance Corporation had launched its SATELLITE centres offices. The satellite offices are smaller, leaner and closer to the customer. The digitalized services of the satellite offices will facilitate shorter searching and many other eligible clients task.</p>
              </div>
            </div>

            {/* Section: Historical Milestones */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Key Historical Milestones
              </h2>
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Life Insurance Corporation continues to be the dominant life insurer even in the liberalised scenario of Indian insurance and is moving fast on a new growth trajectory addressing to own customer concerns. Life Insurance Corporation has stretched over new core policies during the current year. It has crossed the milestone of issuing 605 CRORE new policies by 15th Dec, 2005, posting a healthy growth rate of 35.87% over the corresponding period of the previous year.
                </p>
                
                <p>
                  No business as on any discounts can be sustained in the absence of its core strength. The same notable which inspired our forefathers to bring insurance into existence in the country inspires us at Life Insurance Corporation to take the message of protection to light the lamps of security in as many homes as possible and to help the people or providing security to their families.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Some of the important milestones in the life insurance business in India are:</h3>
                  
                  <div className="space-y-2">
                    <p><strong>1818:</strong> Oriental Life Insurance Company, the first life insurance company on Indian soil started functioning.</p>
                    
                    <p><strong>1870:</strong> Bombay Mutual Life Assurance Society, the first Indian life insurance company started in business.</p>
                    
                    <p><strong>1912:</strong> The Indian Life Assurance Companies Act was enacted as the first statute to regulate the life insurance business.</p>
                    
                    <p><strong>1928:</strong> The Indian Insurance Companies Act enacted to enable the government to collect statistical information about both life and non-life insurance businesses.</p>
                    
                    <p><strong>1938:</strong> Earlier legislation consolidated and amended by the Insurance Act with the objective of protecting the interests of the insuring public.</p>
                    
                    <p><strong>1956:</strong> 245 Indian and foreign insurers and provident societies of non-government LIC Insurance Corporation formed by an Act of Parliament, viz. LIC Insurance Corporation Act, 1956, with a capital contribution of Rs. 5 crore from the Government of India.</p>
                    
                    <p><strong>1973:</strong> The General Insurance business in India, on the other hand, can trace its roots to the Indian Insurance Company Ltd. which commenced in the year 1850 in Calcutta by the British.</p>
                    
                    <p><strong>1957:</strong> LIC started its important milestones in the general insurance business in India are:</p>
                    
                    <p><strong>1907:</strong> The Indian Mercantile Insurance Ltd. set up, the first company to conduct all classes of general insurance business.</p>
                    
                    <p><strong>1957:</strong> General Insurance Council, a wing of the Insurance Association of India formed a code of conduct for ensuring fair conduct and sound business practices.</p>
                    
                    <p><strong>1968:</strong> The Insurance Act amended to regulate investments and set minimum solvency margins and the Tariff Advisory Committee set up.</p>
                    
                    <p><strong>1972:</strong> The General Insurance Business (Nationalisation) Act, 1972 nationalised the general insurance business in India with effect from 1st January 1973.</p>
                    
                    <p><strong>1973:</strong> 107 insurers amalgamated and grouped into four companies viz. the National Insurance Company Ltd, the New India Assurance Company Ltd, the Oriental Insurance Company Ltd. and the United India Insurance Company Ltd. GIC incorporated as a company.</p>
                  </div>
                </div>
              </div>
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

      {/* Footer Links - Gray */}
      <div className="bg-gray-200 border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 text-xs sm:text-sm">
            <a href="#" className="text-blue-700 hover:underline font-medium">
              Plan NAV
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              Foreign Units
              <i className="fi fi-rr-angle-small-down ml-1"></i>
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              LIC Associates & Subsidiaries
              <i className="fi fi-rr-angle-small-down ml-1"></i>
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium">
              LIC Quick Tips
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLifeInsurance;
