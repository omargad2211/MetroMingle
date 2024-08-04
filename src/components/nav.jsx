
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiFlyingTrout } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firbase"; // Make sure this path is correct

export default function Nav() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

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
    <div className="navbar relative bg-teal-600 text-white px-4 lg:px-8 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <button
            className="lg:hidden btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Mobile menu toggle icon */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <NavLink
            to="/posts"
            className="btn btn-ghost items-center text-xl flex hover:text-orange-500 gap-2 hidden lg:flex"
          >
            {/* Desktop view Posts link */}
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zM1 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm7.5.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zM2 5.5a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zM10.5 5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM13 8h-2V6h2v2z"
              />
            </svg>
            <p>Posts</p>
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center flex justify-center items-center lg:mx-8">
          <NavLink
            className="btn btn-ghost max-[990px]:text-2xl text-3xl flex items-center hover:text-orange-500 gap-2"
            to="/"
          >
            MetroMingle
            <GiFlyingTrout />
          </NavLink>
        </div>

        {/* Navbar End */}
        <div className="navbar-end  flex items-center space-x-4 lg:space-x-6">
          {/* Conditional Rendering for Login/Logout */}
          {currentUser ? (
            <button
              className="btn max-[990px]:hidden btn-ghost text-xl flex flex-row items-center hover:text-orange-500 gap-2"
              onClick={handleLogout}
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
              className="btn btn-ghost max-[990px]:hidden text-xl flex items-center hover:text-orange-500 gap-2"
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

          {currentUser && (
            <NavLink
              className="btn btn-ghost  max-[990px]:text-lg text-xl flex items-center hover:text-orange-500 gap-2"
              to="/profile"
            >
              <img
                className="h-10 w-10 bg-cover bg-center rounded-full border border-gray-200"
                src={currentUser?.photoURL}
                alt=""
              />
              Profile
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" lg:hidden">
          <div className="flex z-10 absolute top-16 left-0 bg-orange-700/75 alp flex-col flex-1 w-full items-center space-y-4 ">
            <NavLink
              to="/posts"
              className="btn btn-ghost items-center text-lg flex hover:text-orange-500 gap-3"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zM1 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm7.5.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zM2 5.5a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5H6a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zM10.5 5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM13 8h-2V6h2v2z"
                />
              </svg>
              <p>Posts</p>
            </NavLink>
            {currentUser ? (
              <button
                className="btn btn-ghost text-lg flex flex-row items-center hover:text-orange-500 gap-3"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false); // Close menu after logout
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 100-12H4a9.985 9.985 0 018-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 01-8-4z" />
                </svg>
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-ghost text-lg flex items-center hover:text-orange-500 gap-3"
                onClick={() => setMenuOpen(false)} // Close menu on link click
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
            {/* {currentUser && (
              <NavLink
                className="btn btn-ghost text-lg flex items-center hover:text-orange-500 gap-3"
                to="/profile"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                <img
                  className="h-10 w-10 bg-cover bg-center rounded-full border border-gray-200"
                  src={currentUser?.photoURL}
                  alt=""
                />
                Profile
              </NavLink>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}
