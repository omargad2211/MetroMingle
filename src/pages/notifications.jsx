import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

// Notification Component
const Notification = ({ avatar, username, action, timestamp, icon }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">
            <span className="text-indigo-600">{username}</span> {action}
          </p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
      <div>
        <span className={`text-indigo-600 ${icon}`}></span>
      </div>
    </div>
  );
};

// Notifications Page
const NotificationsPage = () => {
  const notifications = [
    {
      avatar:
        "https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/370440380_1479970636096153_763774935161209722_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ku98PDgz_IwQ7kNvgHMFdGV&_nc_ht=scontent.fcai19-5.fna&oh=00_AYBd2hdtK7MM8bgGKYiDYDO5LwmQlOHcb2oA2KOUcxzsYA&oe=66AFD702",
      username: "ammarbtl",
      action: "liked your photo",
      timestamp: "a minute ago",
    },
    {
      avatar:
        "https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/314371555_1302456540514231_4987388186603822366_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZypAIzXqVXQQ7kNvgHYpMxc&_nc_ht=scontent.fcai19-5.fna&oh=00_AYAmX5uTXPhXk4OQscdYh54rkOFod1smYhLGhj_yfD3-tQ&oe=66AFF2C7",
      username: "MahmouErian",
      action: "liked your photo",
      timestamp: "an hour ago",
    },
    {
      avatar:
        "https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/302198143_1252436498849569_5506128624711713123_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WXBsHOjBmccQ7kNvgHHRo6E&_nc_ht=scontent.fcai19-5.fna&oh=00_AYCI21kqfWHES6Rr5ZzNGai2zJPgdvAiSvZv72kzy6zIMA&oe=66AFF1A9",
      username: "Mustafa_amine",
      action: "started following you",
      timestamp: "2h ago",
    },
    {
      avatar: "https://via.placeholder.com/150",
      username: "johndoe",
      action: "commented on your post",
      timestamp: "3h ago",
    },
    {
      avatar: "https://via.placeholder.com/150",
      username: "janedoe",
      action: "commented on your post",
      timestamp: "5h ago",
    },
    {
      avatar: "https://via.placeholder.com/150",
      username: "jamesdoe",
      action: "started following you",
      timestamp: "1d ago",
    },
  ];

  return (
    <div className="flex  md:flex-row min-h-screen">
      {/* Left Sidebar */}
      <aside className=" bg-white h-screen border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">MetroMingle</h1>
          <nav className="space-y-2">
            <Link
              to="/posts"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
              </svg>
              Home
            </Link>
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.033 16.618l4.28 4.281-1.414 1.415-4.28-4.281A8.963 8.963 0 0111 20a8.998 8.998 0 01-8.065-5H9l-1.304 2.173A6.972 6.972 0 0011 18a6.977 6.977 0 004.875-1.975l.15-.15A6.977 6.977 0 0018 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 01-1.967 5.618zM19.065 7H13l1.304-2.173A6.972 6.972 0 0011 4c-3.868 0-7 3.132-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 012 11c0-4.973 4.027-9 9-9a8.998 8.998 0 018.065 5z" />
              </svg>
              Explore
            </a>
            <Link
              to="/notifications"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                />
              </svg>{" "}
              Notifications
            </Link>
            <Link
              to="/messages"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z" />
              </svg>{" "}
              Messages
            </Link>
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.25em"
                width="1.25em"
              >
                <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
              </svg>{" "}
              Bookmarks
            </a>
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.25em"
                width="1.25em"
              >
                <path
                  fillRule="evenodd"
                  d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
                />
              </svg>
              Lists
            </a>
            <Link
              to="/profile"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.25em"
                width="1.25em"
              >
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Profile
            </Link>
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="1.25em"
                width="1.25em"
              >
                <path
                  fill="currentColor"
                  d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                  clipRule="evenodd"
                />
              </svg>
              More
            </a>
          </nav>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1  bg-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              avatar={notification.avatar}
              username={notification.username}
              action={notification.action}
              timestamp={notification.timestamp}
              icon={notification.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;
