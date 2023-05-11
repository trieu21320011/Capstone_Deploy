import React, { useState, Component } from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";

/// Css
import "./index.css";
import "./chart.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
/// Widget
import Widget from "./pages/Widget";

/// Deshboard
import Home from "./components/Dashboard/Home";
import Booking from "./components/Dashboard/Booking";
import Order from "./components/Dashboard/Order";
import Repairmans from "./components/Dashboard/Repairmans";
import RepairmansDetail from "./components/Dashboard/RepairmansDetail";
import Customers from "./components/Dashboard/Customer";
import Transaction from "./components/Dashboard/Transactions";
import FeedBack from "./components/Dashboard/FeedBack";
import BookingDetail from "./components/Dashboard/BookingDetail";
import OrderDetail from "./components/Dashboard/OrderDetail";
import StartEditButtonGrid from "./components/AppsMenu/AppProfile/CategoryEdit";
import TransactionDetail from "./components/Dashboard/TransactionDetail";


/// App
import SubCategory from "./components/AppsMenu/AppProfile/SubCategory";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import Category from "./components/AppsMenu/AppProfile/Category";
import CommonDescription from "./components/AppsMenu/AppProfile/CommonDescription";
import CategoryDetail from "./components/AppsMenu/AppProfile/CategoryDetail";
import SubCategoryDetail from "./components/AppsMenu/AppProfile/SubCategoryDetail";
import CustomerDetail from "./components/Dashboard/CustomerDetail";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";

/// Chirt





/// Table
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";

/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import SummerNote from "./components/Forms/Summernote/SummerNote";
import Pickers from "./components/Forms/Pickers/Pickers";
import jQueryValidation from "./components/Forms/jQueryValidation/jQueryValidation";

/// Pulgin
import Select2 from "./components/PluginsMenu/Select2/Select2";
import Nestable from "./components/PluginsMenu/Nestable/Nestable";
import MainNouiSlider from "./components/PluginsMenu/Noui Slider/MainNouiSlider";
import MainSweetAlert from "./components/PluginsMenu/Sweet Alert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/Jqv Map/JqvMap";
import ProfileSidebar from "./layouts/ProfileSidebar";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";
import { useHistory } from "react-router-dom";
import { authentication } from "./hooks/authentication";
function PrivateRoute({ component: Component, ...rest }) {
   return (
      <Route {...rest} render={(props) => (
         authentication.isAuthentication() ?
            (<Component {...props} />)
            :
            (<Redirect to="/page-login" />)
      )}

      />
   )
}
const Markup = ({ showProfileSideBar }) => {
   // useEffect(() => {
   //    window.location.reload(false);
   // }, [1]);
   const [showProfile, setShowProfile] = useState(false);
   const routes = [
      /// Deshborad
      { url: "", component: Home, protected: true },
      { url: "booking", component: Booking, protected: true },
      { url: "booking-detail", component: BookingDetail, protected: true },
      { url: "order", component: Order, protected: true },
      { url: "order-detail", component: OrderDetail, protected: true },
      { url: "test", component: StartEditButtonGrid, protected: true },
      

      { url: "repairmans", component: Repairmans, protected: true },
      { url: "repairman-detail", component: RepairmansDetail, protected: true },
      { url: "customers", component: Customers, protected: true },
      { url: "customer-detail", component: CustomerDetail, protected: true },
      { url: "transaction", component: Transaction, protected: true },
      { url: "transaction-detail", component: TransactionDetail, protected: true },
      { url: "feedback", component: FeedBack, protected: true },

      { url: "sub-category", component: SubCategory, protected: true },
      { url: "sub-category-detail", component: SubCategoryDetail, protected: true },
      { url: "email-compose", component: Compose, protected: true },
      { url: "email-inbox", component: Inbox, protected: true },
      { url: "email-read", component: Read, protected: true },
      { url: "app-calender", component: Calendar, protected: true },
      { url: "category", component: Category, protected: true },
      { url: "category-detail", component: CategoryDetail, protected: true },
      { url: "common-description", component: CommonDescription, protected: true },

      /// Shop
      { url: "ecom-product-grid", component: ProductGrid, protected: true },
      { url: "ecom-product-list", component: ProductList, protected: true },
      { url: "ecom-product-detail", component: ProductDetail, protected: true },
      { url: "ecom-product-order", component: ProductOrder, protected: true },
      { url: "ecom-checkout", component: Checkout, protected: true },
      { url: "ecom-invoice", component: Invoice, protected: true },
      { url: "ecom-product-detail", component: ProductDetail, protected: true },

      /// Chart




      /// table
      { url: "table-datatable-basic", component: DataTable, protected: true },
      { url: "table-bootstrap-basic", component: BootstrapTable, protected: true },

      /// Form
      { url: "form-element", component: Element, protected: true },
      { url: "form-wizard", component: Wizard, protected: true },
      { url: "form-wizard", component: Wizard, protected: true },
      { url: "form-editor-summernote", component: SummerNote },
      { url: "form-pickers", component: Pickers },
      { url: "form-validation-jquery", component: jQueryValidation, protected: true },

      /// Plugin

      { url: "uc-select2", component: Select2, protected: true },
      { url: "uc-nestable", component: Nestable, protected: true },
      { url: "uc-noui-slider", component: MainNouiSlider, protected: true },
      { url: "uc-sweetalert", component: MainSweetAlert, protected: true },
      { url: "uc-toastr", component: Toastr, protected: true },
      { url: "map-jqvmap", component: JqvMap, protected: true },
      { url: "uc-lightgallery", component: Lightgallery, protected: true },

      /// pages
      { url: "widget-basic", component: Widget, protected: true },

      { url: "page-register", component: Registration, protected: false },
      { url: "page-lock-screen", component: LockScreen, protected: false },
      { url: "page-login", component: Login, protected: false },
      { url: "page-forgot-password", component: ForgotPassword },
      { url: "page-error-400", component: Error400, protected: false },
      { url: "page-error-403", component: Error403, protected: false },
      { url: "page-error-404", component: Error404, protected: false },
      { url: "page-error-500", component: Error500, protected: false },
      { url: "page-error-503", component: Error503, protected: false },
   ];
   let path = window.location.pathname;
   path = path.split("/");
   path = path[path.length - 1];
   let pagePath = path.split("-").includes("page");
   console.log(pagePath);
   return (
      <Router basename="/react">
         <div
            id={`${!pagePath ? "main-wrapper" : ""}`}
            className={`${!pagePath ? "show" : "mh100vh"} ${!path ? "right-profile" : ""
               }`}
         >
            {!pagePath && (
               <Nav
                  showProfileSideBar={showProfileSideBar}
                  showProfile={() => setShowProfile(true)}
               />
            )}
            {!path && !pagePath && (
               <ProfileSidebar
                  addClass={showProfile ? "active" : ""}
                  hideProfile={() => setShowProfile(false)}
               />
            )}
            <div
               className={`  ${!pagePath ? "content-body" : ""}`}

            >
               <div className={`${!pagePath ? "container-fluid" : ""}`}>
                  <Switch>
                     {routes.map((data, i) => (
                        data.protected === true ?
                           <PrivateRoute
                              key={i}
                              exact
                              path={`/${data.url}`}
                              component={data.component}
                           />

                           :
                           <Route
                              key={i}
                              exact
                              path={`/${data.url}`}
                              component={data.component}
                           />
                     ))}
                  </Switch>
               </div>
            </div>
            {!pagePath && <Footer />}
         </div>
      </Router>
   );
};

export default Markup;
