import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { useEffect,useState } from "react";

import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
const ApexNagetivePosative3 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/NagetivePositive3"), 500)
);
const ApexRedialBar2 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/RadialBar2"), 500)
);
const LineChart7 = loadable(() =>
   pMinDelay(import("../charts/Chartjs/line7"), 0)
);

function Home() {
   useEffect(() => {
      const reloadCount = sessionStorage.getItem('reloadCount');
      if(reloadCount < 2) {
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }
    }, []);
   return (
      <>
         <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600 mb-1">Dashboard</h2>
               <p className="mb-0">Chào mừng đến với trang quảng lí của Thợ ơi</p>
            </div>
            <div className="d-none d-lg-flex align-items-center">
               <div className="text-right">
                  <h3 className="fs-20 text-black mb-0">09:62 AM</h3>
                  <span className="fs-14">Monday, 3 Augusut 2020</span>
               </div>
               <Link
                  className="ml-4 text-black p-3 rounded border text-center width60"
                  to="/"
               >
                  <i className="las la-cog scale5" />
               </Link>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12 col-xxl-12">
               <div className="row">
               <div className="col-lg-6 col-sm-6">
                  <div className="widget-stat card bg-primary">
                     <div className="card-body  p-4">
                        <div className="media">
                           <span className="mr-3">
                              <i className="la la-users" />
                           </span>
                           <div className="media-body text-white">
                              <p className="mb-1">Tổng số thợ</p>
                              <h3 className="text-white">328</h3>
                              <div className="progress mb-2 bg-secondary">
                                 <div
                                    className="progress-bar progress-animated bg-light"
                                    style={{ width: "80%" }}
                                 />
                              </div>
                              <small>80% Increase in 20 Days</small>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
                  <div className="col-lg-6 col-sm-6">
                     <div className="card widget-stat ">
                        <div className="card-body p-4">
                        <div className="media ai-icon">
                           <span className="mr-3 bgl-warning text-warning">
                              <svg
                                 id="icon-orders"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={30}
                                 height={30}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth={2}
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-file-text"
                              >
                                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                 <polyline points="14 2 14 8 20 8" />
                                 <line x1={16} y1={13} x2={8} y2={13} />
                                 <line x1={16} y1={17} x2={8} y2={17} />
                                 <polyline points="10 9 9 9 8 9" />
                              </svg>
                           </span>
                           <div className="media-body">
                              <p className="mb-1">Tổng số đơn</p>
                              <h4 className="mb-0">2570</h4>
                              <span className="badge badge-warning">+3.5%</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-body d-flex flex-wrap p-0">
                           <div className="col-lg-6 col-sm-6  media spending-bx">
                              <div className="spending-icon mr-4">
                                 <i
                                    className="fa fa-caret-up"
                                    aria-hidden="true"
                                 />
                                 <span className="fs-14">+5%</span>
                              </div>
                              <div className="media-body">
                                 <p className="fs-18 mb-2">Tổng thu nhập hôm nay</p>
                                 <span className="fs-34 font-w600">$5,245</span>
                              </div>
                           </div>
                           <div className="col-lg-6 col-sm-6 media spending-bx pl-2">
                              <div className="media-body text-right">
                                 <p className="fs-18 mb-2">Tổng thu nhập hôm qua</p>
                                 <span className="fs-34 font-w600">$4,567</span>
                              </div>
                              <div className="spending-icon ml-4">
                                 <i
                                    className="fa fa-caret-down"
                                    aria-hidden="true"
                                 />
                                 <span className="fs-14">-2%</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card" id="user-activity">
                        <Tab.Container defaultActiveKey="monthly">
                           <div className="card-header pb-0 d-block d-sm-flex border-0">
                              <h3 className="fs-20 text-black mb-0">
                                 Overview
                              </h3>
                              <div className="card-action card-tabs mt-3 mt-sm-0">
                                 <Nav
                                    as="ul"
                                    className="nav nav-tabs"
                                    role="tablist"
                                 >
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="monthly"
                                          role="tab"
                                       >
                                          Monthly
                                       </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="weekly"
                                          role="tab"
                                       >
                                          Weekly
                                       </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="today"
                                          role="tab"
                                       >
                                          Today
                                       </Nav.Link>
                                    </Nav.Item>
                                 </Nav>
                              </div>
                           </div>
                           <div className="card-body">
                              <Tab.Content
                                 className="tab-content"
                                 id="myTabContent"
                              >
                                 <Tab.Pane eventKey="monthly">
                                    <div style={{ height: "300px" }}>
                                       <LineChart7 data={0} height="300" />
                                    </div>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="weekly">
                                    <div style={{ height: "300px" }}>
                                       <LineChart7 data={1} height="300" />
                                    </div>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="today">
                                    <div style={{ height: "300px" }}>
                                       <LineChart7 data={2} height="300" />
                                    </div>
                                 </Tab.Pane>
                              </Tab.Content>
                           </div>
                        </Tab.Container>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
         {/* </div>
        </div>
      </div> */}
      </>
   );
}

export default Home;
