import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
// import drump from "../../../images/card/drump.png";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      // this.mm("dispose");
      // console.log(this.mm);
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);

      //sidebar icon Heart blast
      var handleheartBlast = document.querySelector('.heart');

      function heartBlast() {
         return handleheartBlast.classList.toggle("heart-blast");
      }

      handleheartBlast.addEventListener('click', heartBlast);
   }
   render() {
      /// Path
      var path = window.location.pathname;
      path = path.split("/");
      path = path[path.length - 1];

      /// Active menu

      let deshBoard = [
         "booking",
         "order",
         "feedback",
      ]
       let homepage = [
            "",
         ]
      let  app = [
            "sub-category",
            "app-calender",
            "email-compose",
            "email-inbox",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-invoice",
            "ecom-customers",
            "category",
            "ecom-product-detail",
            "common-description",
         ]
       let user = [
            "customers",
            "repairmans",
         ],
         widget = ["widget-basic"],
         transaction = ["transaction"]

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  <li className={`${homepage.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        to="/"
                        className="ai-icon"
                        aria-expanded="false"
                     >

                        <i className="flaticon-381-home"></i>
                     </Link>
                  </li>
                  <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              to="/booking"
                              className={`${path === "booking" ? "mm-active" : ""
                                 }`}
                           >
                              Đơn đặt
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/order"
                              className={`${path === "order"
                                 ? "mm-active"
                                 : ""
                                 }`}
                           >
                              Đơn hàng
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/feedback"
                              className={`${path === "feedback" ? "mm-active" : ""
                                 }`}
                           >
                              Các nhận xét về đơn hàng
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className={`${app.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-television"></i>
                        <span className="nav-text">Apps</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              className={`${path === "category" ? "mm-active" : ""
                                 }`}
                              to="/category"
                           >
                              Doanh mục dịch vụ
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "sub-category" ? "mm-active" : ""
                                 }`}
                              to="/sub-category"
                           >
                              Doanh mục phụ
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "common-description" ? "mm-active" : ""
                                 }`}
                              to="/common-description"
                           >
                              Danh sách tình trạng danh mục
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className={`${user.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-user"></i>
                        <span className="nav-text">User</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              to="/repairmans"
                              className={`${path === "repairmans" ? "mm-active" : ""
                                 }`}
                           >
                              Danh sách thợ sửa chữa
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/customers"
                              className={`${path === "customers" ? "mm-active" : ""
                                 }`}
                           >
                              Danh sách khách hàng
                           </Link>
                        </li>

                     </ul>
                  </li>
                  {/* 
                  <li
                     className={`${bootstrap.includes(path) ? "mm-active" : ""
                        }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-internet"></i>
                        <span className="nav-text">Bootstrap</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              className={`${path === "ui-accordion" ? "mm-active" : ""
                                 }`}
                              to="/ui-accordion"
                           >
                              Accordion
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-alert" ? "mm-active" : ""
                                 }`}
                              to="/ui-alert"
                           >
                              Alert
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-badge" ? "mm-active" : ""
                                 }`}
                              to="/ui-badge"
                           >
                              Badge
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-button" ? "mm-active" : ""
                                 }`}
                              to="/ui-button"
                           >
                              Button
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-modal" ? "mm-active" : ""
                                 }`}
                              to="/ui-modal"
                           >
                              Modal
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-button-group" ? "mm-active" : ""
                                 }`}
                              to="/ui-button-group"
                           >
                              Button Group
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-list-group" ? "mm-active" : ""
                                 }`}
                              to="/ui-list-group"
                           >
                              List Group
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-media-object" ? "mm-active" : ""
                                 }`}
                              to="/ui-media-object"
                           >
                              Media Object
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-card" ? "mm-active" : ""
                                 }`}
                              to="/ui-card"
                           >
                              Cards
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-carousel" ? "mm-active" : ""
                                 }`}
                              to="/ui-carousel"
                           >
                              Carousel
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-dropdown" ? "mm-active" : ""
                                 }`}
                              to="/ui-dropdown"
                           >
                              Dropdown
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-popover" ? "mm-active" : ""
                                 }`}
                              to="/ui-popover"
                           >
                              Popover
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-progressbar" ? "mm-active" : ""
                                 }`}
                              to="/ui-progressbar"
                           >
                              Progressbar
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-tab" ? "mm-active" : ""
                                 }`}
                              to="/ui-tab"
                           >
                              Tab
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-typography" ? "mm-active" : ""
                                 }`}
                              to="/ui-typography"
                           >
                              Typography
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-pagination" ? "mm-active" : ""
                                 }`}
                              to="/ui-pagination"
                           >
                              Pagination
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "ui-grid" ? "mm-active" : ""
                                 }`}
                              to="/ui-grid"
                           >
                              Grid
                           </Link>
                        </li>
                     </ul>
                  </li> */}
                  {/* <li
                     className={`${plugins.includes(path) ? "mm-active" : ""}`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-heart"></i>
                        <span className="nav-text">Plugins</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              className={`${path === "uc-select2" ? "mm-active" : ""
                                 }`}
                              to="/uc-select2"
                           >
                              Select 2
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "uc-nestable" ? "mm-active" : ""
                                 }`}
                              to="/uc-nestable"
                           >
                              Nestedable
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "uc-noui-slider" ? "mm-active" : ""
                                 }`}
                              to="/uc-noui-slider"
                           >
                              Noui Slider
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "uc-sweetalert" ? "mm-active" : ""
                                 }`}
                              to="/uc-sweetalert"
                           >
                              Sweet Alert
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "uc-toastr" ? "mm-active" : ""
                                 }`}
                              to="/uc-toastr"
                           >
                              Toastr
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "map-jqvmap" ? "mm-active" : ""
                                 }`}
                              to="/map-jqvmap"
                           >
                              Jqv Map
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "uc-lightgallery" ? "mm-active" : ""
                                 }`}
                              to="/uc-lightgallery"
                           >
                              Light Gallery
                           </Link>
                        </li>
                     </ul>
                  </li> */}
                  <li className={`${transaction.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        to="transaction"
                        className="ai-icon"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-folder"></i>
                        <span className="nav-text">Widget</span>
                     </Link>
                  </li>
                  <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        to="widget-basic"
                        className="ai-icon"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Widget</span>
                     </Link>
                  </li>
                  {/* <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text forms">Forms</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              className={`${path === "form-element" ? "mm-active" : ""
                                 }`}
                              to="/form-element"
                           >
                              Form Elements
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "form-wizard" ? "mm-active" : ""
                                 }`}
                              to="/form-wizard"
                           >
                              Wizard
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "form-editor-summernote"
                                    ? "mm-active"
                                    : ""
                                 }`}
                              to="/form-editor-summernote"
                           >
                              Summernote
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "form-pickers" ? "mm-active" : ""
                                 }`}
                              to="/form-pickers"
                           >
                              Pickers
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "form-validation-jquery"
                                    ? "mm-active"
                                    : ""
                                 }`}
                              to="/form-validation-jquery"
                           >
                              Jquery Validate
                           </Link>
                        </li>
                     </ul>
                  </li> */}
                  {/* <li className={`${table.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-network"></i>
                        <span className="nav-text">Table</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link
                              className={`${path === "table-bootstrap-basic"
                                    ? "mm-active"
                                    : ""
                                 }`}
                              to="/table-bootstrap-basic"
                           >
                              Bootstrap
                           </Link>
                        </li>
                        <li>
                           <Link
                              className={`${path === "table-datatable-basic"
                                    ? "mm-active"
                                    : ""
                                 }`}
                              to="/table-datatable-basic"
                           >
                              Datatable
                           </Link>
                        </li>
                     </ul>
                  </li> */}
                  {/* <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
                        <Link
                           className="has-arrow ai-icon"
                           to="#"
                           aria-expanded="false"
                        >
                           <i className="flaticon-381-layer-1"></i>
                           <span className="nav-text">Pages</span>
                        </Link>
                        <ul aria-expanded="false">
                           <li>
                              <Link to="/page-register">Register</Link>
                           </li>
                           <li>
                              <Link to="/page-login">Login</Link>
                           </li>
                           <li
                              className={`${error.includes(path) ? "mm-active" : ""
                                 }`}
                           >
                              <Link
                                 className="has-arrow"
                                 to="#"
                                 aria-expanded="false"
                              >
                                 Error
                              </Link>
                              <ul aria-expanded="false">
                                 <li>
                                    <Link
                                       className={`${path === "page-error-400"
                                             ? "mm-active"
                                             : ""
                                          }`}
                                       to="/page-error-400"
                                    >
                                       Error 400
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className={`${path === "page-error-403"
                                             ? "mm-active"
                                             : ""
                                          }`}
                                       to="/page-error-403"
                                    >
                                       Error 403
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className={`${path === "page-error-404"
                                             ? "mm-active"
                                             : ""
                                          }`}
                                       to="/page-error-404"
                                    >
                                       Error 404
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className={`${path === "page-error-500"
                                             ? "mm-active"
                                             : ""
                                          }`}
                                       to="/page-error-500"
                                    >
                                       Error 500
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className={`${path === "page-error-503"
                                             ? "mm-active"
                                             : ""
                                          }`}
                                       to="/page-error-503"
                                    >
                                       Error 503
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <Link
                                 className={`${path === "page-lock-screen" ? "mm-active" : ""
                                    }`}
                                 to="/page-lock-screen"
                              >
                                 Lock Screen
                              </Link>
                           </li>
                        </ul>
                     </li> */}
               </MM>
               <div className="copyright">
                  <p className="fs-14 font-w200">
                     <strong className="font-w400">
                        Trang quản lí của thợ ơi
                     </strong>{" "}
                  </p>
                  <p>
                     Made with <span class="heart"></span> by Penuts Team
                  </p>
               </div>

            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
