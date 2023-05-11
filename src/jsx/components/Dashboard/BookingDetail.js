import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomClearIndicator from "../PluginsMenu/Select2/MultiSelect";
import PerfectScrollbar from "react-perfect-scrollbar";
import profile from "../../../images/profile/pic1.jpg";

function BookingDetail() {
   const [activeBudget, setActiveBudget] = useState(1000);
   return (
      <>
         <div className="form-head d-flex mb-2 mb-sm-3 mb-lg-5 align-items-center">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="text-black font-w600">Thông tin chi tiết đơn đặt</h2>
               <div>
                  <Link
                     to="/new-compaign"
                     className="fs-18 text-primary font-w600"
                  >
                     Danh sách đơn đặt /
                  </Link>
                  <Link to="/new-compaign" className="fs-18">
                     Chi tiết đơn đặt
                  </Link>
               </div>
            </div>
         </div>
         <div className="row">
         <div className="col-xl-3 col-xxl-4 col-lg-4">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h3 className="text-black fs-20">Thông tin khách hàng </h3>
                        </div>
                        <div className="card-body">
                           <div className=" p-3 text-black rounded">
                              <i className="flaticon-381-user-4"></i> Hồng Anh Customer
                           </div>
                           <div className=" p-3 text-black rounded">
                              <i className="flaticon-381-smartphone"></i> 03351767422
                           </div>
                           <div className=" p-3 text-black rounded">
                              <i className="flaticon-381-location"></i> S503 VinHome
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h4 className="card-title">Dòng trạng thái</h4>
                        </div>
                        <div className="card-body">
                           <PerfectScrollbar
                              id="DZ_W_TimeLine1"
                              className="widget-timeline dz-scroll style-1 height370"
                           >
                              <ul className="timeline">
                                 <li>
                                    <div className="timeline-badge primary" />
                                    <Link className="timeline-panel text-muted" to="/widget-basic">
                                       <span>10 minutes ago</span>
                                       <h6 className="mb-0">
                                          Youtube, a video-sharing website, goes
                                          live{" "}
                                          <strong className="text-primary">
                                             $500
                                          </strong>
                                          .
                                       </h6>
                                    </Link>
                                 </li>
                                 <li>
                                    <div className="timeline-badge info"></div>
                                    <Link
                                       className="timeline-panel text-muted"
                                       to="/widget-basic"
                                    >
                                       <span>20 minutes ago</span>
                                       <h6 className="mb-0">
                                          New order placed{" "}
                                          <strong className="text-info">
                                             #XF-2356.
                                          </strong>
                                       </h6>
                                       <p className="mb-0">
                                          Quisque a consequat ante Sit amet magna
                                          at volutapt...
                                       </p>
                                    </Link>
                                 </li>
                                 <li>
                                    <div className="timeline-badge danger"></div>
                                    <Link
                                       className="timeline-panel text-muted"
                                       to="/widget-basic"
                                    >
                                       <span>30 minutes ago</span>
                                       <h6 className="mb-0">
                                          john just buy your product{" "}
                                          <strong className="text-warning">
                                             Sell $250
                                          </strong>
                                       </h6>
                                    </Link>
                                 </li>
                                 <li>
                                    <div className="timeline-badge success"></div>
                                    <Link
                                       className="timeline-panel text-muted"
                                       to="/widget-basic"
                                    >
                                       <span>15 minutes ago</span>
                                       <h6 className="mb-0">
                                          StumbleUpon is acquired by eBay.{" "}
                                       </h6>
                                    </Link>
                                 </li>
                                 <li>
                                    <div className="timeline-badge warning"></div>
                                    <Link
                                       className="timeline-panel text-muted"
                                       to="/widget-basic"
                                    >
                                       <span>20 minutes ago</span>
                                       <h6 className="mb-0">
                                          Mashable, a news website and blog, goes
                                          live.
                                       </h6>
                                    </Link>
                                 </li>
                                 <li>
                                    <div className="timeline-badge dark"></div>
                                    <Link
                                       className="timeline-panel text-muted"
                                       to="/widget-basic"
                                    >
                                       <span>20 minutes ago</span>
                                       <h6 className="mb-0">
                                          Mashable, a news website and blog, goes
                                          live.
                                       </h6>
                                    </Link>
                                 </li>
                              </ul>
                           </PerfectScrollbar>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-9 col-xxl-8 col-lg-8">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="card mt-3">
                        <div className="card-header">
                           {" "}
                           Mã đơn hàng : Z0232-12 <strong>01/01/2018</strong>{" "}
                           <span className="float-right">
                              <strong>Status:</strong> Pending
                           </span>{" "}
                        </div>
                        <div className='card-body'>
                           <div className="row">
                           <div className="col-xl-6 col-lg-9 col-md-12 col-sm-12 mb-4 justify-content-lg-end justify-content-md-center justify-content-xs-start">
                                 <h6>Thông tin đơn hàng:</h6>
                                 <div><strong>Dịch vụ </strong>: Sửa máy kạnh </div>
                                 <div><strong>Danh mục </strong>: Điện máy - Điện lạnh</div>
                                 <div><strong>Địa chỉ làm </strong>: 43-190 Mikolow Poland</div>
                                 <div><strong>Thời gian bắt đầu</strong>: 23/12/2023 | 14:10:23</div>
                                 <div><strong>Thời gian làm dự kiến</strong>: 2 tiếng </div>
                              </div>
                              <div className="col-xl-3 col-sm-6 mb-4">
                                 <h6>Thông tin thợ:</h6>
                                 <div><strong>Tên thợ </strong>: Bob Mart </div>
                                 <div><strong>Số điện thoại </strong>: +91 987 654 3210</div>
                                 <div><strong>Quê quán</strong>: 43-190 Mikolow Poland</div>
                                 <div><strong>Email</strong>: info@example.com</div>
                              </div>
                              
                              <div className="col-xl-3 col-sm-6 mb-4">
                                 <Link
                                    className="nav-link"
                                    to="#"
                                    role="button"
                                  
                                 >
                                    <img src={profile} width={140} alt="" />
                                 </Link>
                              </div>
                           </div>
                           <div className="table-responsive">
                              <table className="table table-striped">
                                 <thead>
                                    <tr>
                                       <th className="center">#</th>
                                       <th>Tên tình trạng</th>
                                       <th>Mô tả chi tiết</th>
                                       <th className="right">Đơn giá</th>
                                       <th className="center">Số lượng</th>
                                       <th className="right">Tổng</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td className="center">1</td>
                                       <td className="left strong">Origin License</td>
                                       <td className="left">Extended License</td>
                                       <td className="right">$999,00</td>
                                       <td className="center">1</td>
                                       <td className="right">$999,00</td>
                                    </tr>
                                    <tr>
                                       <td className="center">2</td>
                                       <td className="left">Custom Services</td>
                                       <td className="left">
                                          Instalation and Customization (cost per
                                          hour)
                                       </td>
                                       <td className="right">$150,00</td>
                                       <td className="center">20</td>
                                       <td className="right">$3.000,00</td>
                                    </tr>
                                    <tr>
                                       <td className="center">3</td>
                                       <td className="left">Hosting</td>
                                       <td className="left">1 year subcription</td>
                                       <td className="right">$499,00</td>
                                       <td className="center">1</td>
                                       <td className="right">$499,00</td>
                                    </tr>
                                    <tr>
                                       <td className="center">4</td>
                                       <td className="left">Platinum Support</td>
                                       <td className="left">
                                          1 year subcription 24/7
                                       </td>
                                       <td className="right">$3.999,00</td>
                                       <td className="center">1</td>
                                       <td className="right">$3.999,00</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <div className="row">
                              <div className="col-lg-4 col-sm-5"> </div>
                              <div className="col-lg-4 col-sm-5 ml-auto">
                                 <table className="table table-clear">
                                    <tbody>
                                       <tr>
                                          <td className="left">
                                             <strong>Tổng tính</strong>
                                          </td>
                                          <td className="right">$8.497,00</td>
                                       </tr>
                                       <tr>
                                          <td className="left">
                                             <strong>Khuyến mãi (20%)</strong>
                                          </td>
                                          <td className="right">$1,699,40</td>
                                       </tr>
                                       <tr>
                                          <td className="left">
                                             <strong>Tiền cọc(10%)</strong>
                                          </td>
                                          <td className="right">$679,76</td>
                                       </tr>
                                       <tr>
                                          <td className="left">
                                             <strong>Tổng tiền thanh toán</strong>
                                          </td>
                                          <td className="right">
                                             <strong>$7.477,36</strong>
                                             <br />
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      </>
   );
}

export default BookingDetail;
