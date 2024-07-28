// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { GiFlyingTrout } from "react-icons/gi";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../firbase"; // Make sure this path is correct

// export default function Nav() {
//   const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Function to handle user logout
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log("User logged out");
//       navigate("/"); // Navigate to the home page after logout
//     } catch (error) {
//       console.error("Logout Error: ", error);
//     }
//   };

//   return (
//     <div className="navbar bg-teal-600 text-white px-4 lg:px-8 py-2">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle lg:mr-4"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h7"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content text-slate-800 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <NavLink to="/posts" className="hover:text-indigo-500">
//                 Posts
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/portfolio" className="hover:text-indigo-500">
//                 Portfolio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="hover:text-indigo-500">
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="navbar-center flex-1 flex justify-center items-center lg:mx-8">
//         <NavLink
//           className="btn btn-ghost text-xl flex items-center gap-2"
//           to="/"
//         >
//           MetroMingle
//           <GiFlyingTrout />
//         </NavLink>
//       </div>

//       <div className="navbar-end flex items-center space-x-4 lg:space-x-6">
//         <button className="btn btn-ghost btn-circle">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </button>

//         <NavLink
//           className="text-white cursor-pointer flex items-center gap-1 hover:text-orange-500"
//           onClick={handleLogout} // Use the logout handler
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             height="1.25em"
//             width="1.25em"
//           >
//             <path fill="none" d="M0 0h24v24H0z" />
//             <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 100-12H4a9.985 9.985 0 018-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 01-8-4z" />
//           </svg>
//           Logout
//         </NavLink>

//         <button className="btn btn-ghost btn-circle relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//             />
//           </svg>
//           <span className="badge badge-xs badge-primary absolute top-0 right-0"></span>
//         </button>

//         {currentUser && (
//           <NavLink to="/profile">
//             <div className="ml-3">
//               <div
//                 className="h-10 w-10 bg-cover bg-center rounded-full border border-gray-200"
//                 style={{
//                   backgroundImage: `url(${currentUser?.photoURL})`,
//                 }}
//               ></div>
//             </div>
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiFlyingTrout } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firbase"; // Make sure this path is correct

export default function Nav() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate("/"); // Navigate to the home page after logout
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  return (
    <div className="navbar bg-teal-600 text-white px-4 lg:px-8 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:mr-4"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-slate-800 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/posts" className="hover:text-indigo-500">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="hover:text-indigo-500">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-indigo-500">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center flex-1 flex justify-center items-center lg:mx-8">
        <NavLink
          className="btn btn-ghost text-xl flex items-center hover:text-orange-500 gap-2"
          to="/"
        >
          MetroMingle
          <GiFlyingTrout />
        </NavLink>
      </div>

      <div className="navbar-end flex items-center space-x-4 lg:space-x-6">
        <button className="btn btn-ghost hover:text-orange-500 btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Conditional Rendering for Login/Logout */}
        {currentUser ? (
          <button
            className="text-white cursor-pointer flex items-center gap-1 hover:text-orange-500"
            onClick={handleLogout} // Use the logout handler
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.25em"
              width="1.25em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 100-12H4a9.985 9.985 0 018-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 01-8-4z" />
            </svg>
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="text-white cursor-pointer flex items-center gap-1 hover:text-orange-500"
          >
            Login
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.25em"
              width="1.25em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z" />
            </svg>
          </NavLink>
        )}

        <button className="btn btn-ghost hover:text-orange-500 btn-circle relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs badge-primary absolute top-0 right-0"></span>
        </button>

        {currentUser && (
          <NavLink to="/profile">
            <div className="ml-3">
              <div
                className="h-10 w-10 bg-cover bg-center rounded-full border border-gray-200"
                style={{
                  backgroundImage: `url(${currentUser?.photoURL})`,
                }}
              ></div>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
}
