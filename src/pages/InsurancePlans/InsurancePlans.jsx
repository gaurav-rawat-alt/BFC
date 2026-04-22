import "./InsurancePlans.css";
import React, {useContext} from 'react';
import { ContactModalContext } from '../../App';

const plans = [
  { sr: 1, name: "LIC's Single Premium Endowment Plan", planNo: 717, uin: "512N283V03" },
  { sr: 2, name: "LIC's New Endowment Plan", planNo: 714, uin: "512N277V03" },
  { sr: 3, name: "LIC's New Jeevan Anand", planNo: 715, uin: "512N279V03" },
  { sr: 4, name: "LIC's Jeevan Lakshya", planNo: 733, uin: "512N297V03" },
  { sr: 5, name: "LIC's Jeevan Labh Plan", planNo: 736, uin: "512N304V03" },
  { sr: 6, name: "LIC's Amritbaal", planNo: 774, uin: "512N365V02" },
  { sr: 7, name: "LIC's Bima Jyoti", planNo: 760, uin: "512N339V03" },
  { sr: 8, name: "LIC's Nav Jeevan Shree", planNo: 912, uin: "512N387V02" },
  { sr: 9, name: "LIC's Nav Jeevan Shree – Single Premium", planNo: 911, uin: "512N390V01" },
  { sr: 10, name: "LIC's Bima Lakshmi", planNo: 881, uin: "512N389V01" },
];

export default function InsurancePlans() {
  const { openContactModal } = useContext(ContactModalContext);
  return (
    <div className="insurance-wrapper">
      <h2 className="page-title">Insurance Plans</h2>

      <p className="description">
        As individuals it is inherent to differ. Each individual's insurance needs
        and requirements are different from that of the others. LIC's Insurance
        Plans are policies that talk to you individually and give you the most
        suitable options that can fit your requirement.
      </p>

      <div className="accordion">
        <div className="accordion-header">
          <span>Endowment Plans</span>
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
