import React, { Fragment } from "react";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";


import avatar1 from "../../images/avatar/1.jpg";
import avatar2 from "../../images/avatar/2.jpg";
import avatar3 from "../../images/avatar/3.jpg";
import avatar4 from "../../images/avatar/4.jpg";
import profile from "../../images/profile/profile.png";
import bg5 from "../../images/big/img5.jpg";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import Pie from "../components/charts/Chartjs/pie";
import BarChart from "../components/charts/chartflot/Bar";

import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";
import LineChart from "../components/charts/Chartjs/line3";
import LineChart4 from "../components/charts/Chartjs/line4";
import LineChart6 from "../components/charts/Chartjs/line6";
import BarChartNoPadding from "../components/charts/rechart/BarChartNoPadding";
import LineChart3 from "../components/charts/Chartjs/line3";
import SparkNagetivePositive from "../components/charts/rechart/PositiveNagative";
import BarChart2 from "../components/charts/Chartjs/bar2";
import BarChart3 from "../components/charts/Chartjs/bar3";
import LiveBar from "../components/charts/Chartjs/bar4";

import RealTime from "../components/charts/Chartjs/realtime";
import { Link } from "react-router-dom";

const sampleData = [10, 24, 30, 10, 15, 0, 20, 30, 65, 12, 10, 6];

const Widget = () => {
   return (
      <Fragment>
         <>
            <div className="page-titles">
               <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                     <Link to="/widget-basic">Widget</Link>
                  </li>
                  <li className="breadcrumb-item active">
                     <Link to="/widget-basic">Statistics</Link>
                  </li>
               </ol>
            </div>
            {/* row */}
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <div className="card-header">
                        <h4 className="card-title">Configuration </h4>
                     </div>
                     <div className="card-body">
                        <div className="basic-form">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="form-group row">
                                 <label className="col-sm-3 col-form-label">
                                    Email
                                 </label>
                                 <div className="col-sm-9">
                                    <input
                                       type="email"
                                       className="form-control"
                                       placeholder="Email"
                                    />
                                 </div>
                              </div>
                              <div className="form-group row">
                                 <label className="col-sm-3 col-form-label">
                                    Password
                                 </label>
                                 <div className="col-sm-9">
                                    <input
                                       type="password"
                                       className="form-control"
                                       placeholder="Password"
                                    />
                                 </div>
                              </div>
                              <fieldset className="form-group">
                                 <div className="row">
                                    <label className="col-form-label col-sm-3 pt-0">
                                       Radios
                                    </label>
                                    <div className="col-sm-9">
                                       <div className="form-check">
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="gridRadios"
                                             value="option1"
                                             defaultChecked
                                          />
                                          <label className="form-check-label">
                                             First radio
                                          </label>
                                       </div>
                                       <div className="form-check">
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="gridRadios"
                                             value="option2"
                                          />
                                          <label className="form-check-label">
                                             Second radio
                                          </label>
                                       </div>
                                       <div className="form-check disabled">
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="gridRadios"
                                             value="option3"
                                             disabled
                                          />
                                          <label className="form-check-label">
                                             Third disabled radio
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                              </fieldset>
                              <div className="form-group row">
                                 <div className="col-sm-3">Checkbox</div>
                                 <div className="col-sm-9">
                                    <div className="form-check">
                                       <input
                                          className="form-check-input"
                                          type="checkbox"
                                       />
                                       <label className="form-check-label">
                                          Example checkbox
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-10">
                                    <button
                                       type="submit"
                                       className="btn btn-primary"
                                    >
                                       Save
                                    </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

         </>
      </Fragment>
   );
};

export default Widget;
