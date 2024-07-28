import React, { useState } from "react";
import { FiHome, FiSearch, FiBell, FiUser } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io"; // Menu icon

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:fixed h-full lg:w-64 bg-slate-900 text-white flex flex-col items-start p-6 shadow-lg transition-all duration-300 lg:translate-x-0">
      <div className="flex justify-between items-center w-full lg:hidden">
        <h1 className="text-xl font-bold">AppName</h1>
        <button
          className="text-white hover:text-indigo-400 transition"
          onClick={toggleMenu}
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      <div
        className={`lg:flex flex-col items-start space-y-6 mt-8 lg:mt-0 transition-transform duration-300 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="/path/to/profile-pic.jpg" // Add path to user's profile picture
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg">User Name</h3>
            <p className="text-gray-400">@username</p>
          </div>
        </div>
        <nav className="space-y-6">
          <a
            href="#home"
            className="flex items-center space-x-2 text-indigo-300 hover:text-white transition duration-200"
          >
            <FiHome className="text-xl" />
            <span className="text-lg font-semibold">Home</span>
          </a>
          <a
            href="#explore"
            className="flex items-center space-x-2 text-indigo-300 hover:text-white transition duration-200"
          >
            <FiSearch className="text-xl" />
            <span className="text-lg font-semibold">Explore</span>
          </a>
          <a
            href="#notifications"
            className="flex items-center space-x-2 text-indigo-300 hover:text-white transition duration-200"
          >
            <FiBell className="text-xl" />
            <span className="text-lg font-semibold">Notifications</span>
          </a>
          <a
            href="#messages"
            className="flex items-center space-x-2 text-indigo-300 hover:text-white transition duration-200"
          >
            <BiMessageSquareDetail className="text-xl" />
            <span className="text-lg font-semibold">Messages</span>
          </a>
          <a
            href="#profile"
            className="flex items-center space-x-2 text-indigo-300 hover:text-white transition duration-200"
          >
            <FiUser className="text-xl" />
            <span className="text-lg font-semibold">Profile</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
