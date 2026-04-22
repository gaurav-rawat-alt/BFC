import "./MoneyBackPlans.css";
import React, {useContext} from 'react';
import { ContactModalContext } from '../../App';

const plans = [
  { sr: 1, name: "LIC's Bima Shree", planNo: 748, uin: "512N316V03" },
  { sr: 2, name: "LIC's New Money Back Plan- 20 Years", planNo: 720, uin: "512N280V03" },
  { sr: 3, name: "LIC's New Money Back Plan-25 years", planNo: 721, uin: "512N278V03" },
  { sr: 4, name: "LIC's New Children's Money Back Plan", planNo: 732, uin: "512N296V03" },
  { sr: 5, name: "LIC's Jeevan Tarun", planNo: 734, uin: "512N299V03" },
];

export default function MoneyBackPlans() {
  const { openContactModal } = useContext(ContactModalContext);
  return (
    <div className="insurance-wrapper">
      <h2 className="page-title">Money Back Plans</h2>

      <div className="accordion">
        <div className="accordion-header">
          <span>Money Back Plans</span>
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
                    <button className="know-more-btn" onClick={openContactModal}>Know More</button>
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
