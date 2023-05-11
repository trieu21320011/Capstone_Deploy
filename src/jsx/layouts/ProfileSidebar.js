import React from "react";
import { Link } from "react-router-dom";

import profileImage from "../../images/profile/profile.png";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

function ProfileSidebar({ addClass, hideProfile }) {
   const logOut = () => {
      localStorage.clear();
   }
   const profilePic = localStorage.getItem('profilePic')
   const name = localStorage.getItem('fullName')
   const email = localStorage.getItem('email')
   return (
      <PerfectScrollbar
         className={`profile-sidebar dz-scroll ${addClass}`}
         id="DZ_W_Sidebar"
      >
         <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="text-black">Profile</h5>
            <Link
               to="/page-login"
               className="text-red text-primary edit-profile-link"
               onClick={logOut}
            >
               Logout
            </Link>
            <Link
               to="#"
               className="text-red d-none close-side"
               onClick={() => hideProfile()}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x-circle"
               >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={15} y1={9} x2={9} y2={15} />
                  <line x1={9} y1={9} x2={15} y2={15} />
               </svg>
            </Link>
         </div>
         <div className="profile-img mb-4">
            <img src={profilePic} width={140} height={140} alt="" />
         </div>
         <div className="profile-info-bx mb-4">
            <h4 className="mb-1 fs-22">{name}</h4>
            <span>{email}</span>
         </div>
         <div className="text-center mb-5">
            
            <Link
               to="/app-profile"
               className="btn btn-outline-dark d-block btn-lg"
            >
               Edit Profile
            </Link>
         </div>
         <hr />

      </PerfectScrollbar>
   );
}

export default ProfileSidebar;
