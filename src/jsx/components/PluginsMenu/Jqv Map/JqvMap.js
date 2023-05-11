import React from "react";

import Usa from "@svg-maps/usa";
import World from "@svg-maps/world";


import PageTitle from "../../../layouts/PageTitle";

const JqvMap = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="jqvmap" motherMenu="Map" />

         <div className="row">
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">World Map</h4>
                  </div>
                  <div className="card-body overflow-hidden">
                     <div id="world-map">
                   
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">USA</h4>
                  </div>
                  <div className="card-body">
                     <div id="usa">
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JqvMap;
