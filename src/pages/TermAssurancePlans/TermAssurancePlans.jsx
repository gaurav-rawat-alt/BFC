import "./TermAssurancePlans.css";

const plans = [
  { sr: 1, name: "LIC's Digi Term", planNo: 876, uin: "512N356V02" },
  { sr: 2, name: "LIC's Digi Credit Life", planNo: 878, uin: "512N358V01" },
  { sr: 3, name: "LIC's Yuva Credit Life", planNo: 877, uin: "512N357V01" },
  { sr: 4, name: "LIC's Yuva Term", planNo: 875, uin: "512N355V02" },
  { sr: 5, name: "LIC's New Tech-Term", planNo: 954, uin: "512N351V02" },
  { sr: 6, name: "LIC's New Jeevan Amar", planNo: 955, uin: "512N350V02" },
  { sr: 7, name: "LIC's Saral Jeevan Bima", planNo: 859, uin: "512N341V01" },
  { sr: 8, name: "LIC's Bima Kavach", planNo: 887, uin: "512N360V01" },
];

export default function TermAssurancePlans() {
  return (
    <div className="insurance-wrapper">
      <h2 className="page-title">Term Assurance Plans</h2>

      <div className="accordion">
        <div className="accordion-header">
          <span>Term Assurance Plans</span>
          <span className="chevron">⌃</span>
        </div>

        <div className="accordion-body">
          <div className="table-scroll-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Product Name</th>
                  <th>Plan No.</th>
                  <th>UIN No.</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p, idx) => (
                  <tr key={p.sr} className={idx % 2 === 0 ? "row-alt" : ""}>
                    <td>{p.sr}</td>
                    <td>{p.name}</td>
                    <td>{p.planNo}</td>
                    <td>{p.uin}</td>
                    <td>
                      <button className="know-more-btn">Know More</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
