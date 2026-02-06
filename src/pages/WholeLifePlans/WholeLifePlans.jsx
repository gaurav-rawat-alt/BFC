import "./WholeLifePlans.css";

const plans = [
  { sr: 1, name: "LIC's Jeevan Umang", planNo: 745, uin: "5512N312V03" },
  { sr: 2, name: "LIC's Jeevan Utsav", planNo: 771, uin: "512N363V02" },
  { sr: 3, name: "LIC's Jeevan Utsav Single premium", planNo: 883, uin: "512N392V01" },
];

export default function WholeLifePlans() {
  return (
    <div className="insurance-wrapper">
      <h2 className="page-title">Insurance Plans</h2>

      <div className="accordion">
        <div className="accordion-header">
          <span>Whole Life Plans</span>
          <span className="chevron">⌃</span>
        </div>

        <div className="accordion-body">
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
  );
}
