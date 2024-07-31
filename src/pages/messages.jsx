import React from "react";
import { Link } from "react-router-dom";

// Message Component
const Message = ({ avatar, name, preview, timestamp }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-gray-600">{preview}</p>
        </div>
      </div>
      <div className="text-xs text-gray-500">{timestamp}</div>
    </div>
  );
};

// Messages Page
const MessagesPage = () => {
  const messages = [
    {
      avatar:
        "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=127&h=191&c=7&r=0&o=5&pid=1.7",
      name: "John Doe",
      preview: "Hey, how's it going? Just wanted to check in.",
      timestamp: "2h ago",
    },
    {
      avatar:
        "https://th.bing.com/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?rs=1&pid=ImgDetMain",
      name: "Jane Smith",
      preview: "Are we still on for dinner tonight?",
      timestamp: "5h ago",
    },
    {
      avatar:
        "https://th.bing.com/th?id=OIP.0GSgnZDVwXfEgTtYKUHBiQHaHk&w=247&h=252&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      name: "Alice Johnson",
      preview: "I found that document you were looking for.",
      timestamp: "1d ago",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/5 bg-white h-screen border-r">
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
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73.7 89.8-96.3 143.3-23.4 55.7-35.3 114.7-35 174.6-.3 60.3 11.7 118.8 35.3 174.3 22.6 53.7 55.4 102.1 96.3 143.3a444.35 444.35 0 00143.3 96.3c55.4 23.6 113.8 35.6 174.3 35.3 60.3.3 118.8-11.7 174.3-35.3a444.35 444.35 0 00143.3-96.3c40.9-41.3 73.7-89.8 96.3-143.3 23.6-55.4 35.6-113.8 35.3-174.3.3-60.3-11.7-118.8-35.3-174.3zm-72.2 318.1c-19.8 46.7-48.3 88.9-84.4 125a370.71 370.71 0 01-125 84.4c-48.4 20.4-99.7 30.9-152.1 30.7-52.4.3-103.7-10.3-152.1-30.7a372.59 372.59 0 01-209.4-209.4c-20.4-48.4-30.9-99.7-30.7-152.1-.3-52.4 10.3-103.7 30.7-152.1a370.71 370.71 0 0184.4-125c36.1-36.1 78.3-64.6 125-84.4 48.3-20.4 99.7-30.9 152.1-30.7 52.4-.3 103.7 10.3 152.1 30.7 46.7 19.8 88.9 48.3 125 84.4 36.1 36.1 64.6 78.3 84.4 125 20.4 48.4 30.9 99.7 30.7 152.1.2 52.4-10.3 103.7-30.7 152.1z" />
              </svg>
              Messages
            </a>
            <a
              href="#"
              className="flex gap-4 items-center text-l font-medium px-4 py-2 text-gray-700 hover:bg-teal-500 hover:text-white rounded transition"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1.25em"
                width="1.25em"
              >
                <path d="M15.825 12.791a4.681 4.681 0 00-.697-3.938 4.683 4.683 0 00-.526-6.23c-1.7-1.7-4.193-1.842-6.048-.516a4.68 4.68 0 00-3.398-.551c-1.258.268-2.398.926-3.22 1.847-.928.928-1.569 2.157-1.805 3.476a4.681 4.681 0 00.6 3.403 4.683 4.683 0 00.605 6.228 4.675 4.675 0 003.031 1.116c1.111 0 2.216-.374 3.096-1.107a4.68 4.68 0 003.942-.705 4.681 4.681 0 003.52-1.783 4.682 4.682 0 00.594-3.24zM4.133 15.262c-.891 0-1.739-.35-2.37-.98a3.37 3.37 0 01-.437-4.481 2.01 2.01 0 002.532-.34 2.011 2.011 0 00.34-2.532 3.372 3.372 0 014.48.437 3.37 3.37 0 01.528 3.818 2.01 2.01 0 00-2.083 2.083 3.37 3.37 0 01-1.503 2.682 3.339 3.339 0 01-1.487.313zm9.207-2.054c-.183.184-.385.348-.601.491.01-.09.028-.18.028-.271 0-1.553-1.264-2.816-2.816-2.816a3.266 3.266 0 00-1.438.336c.144-.214.308-.418.492-.602 1.297-1.297 3.403-1.297 4.701 0 .608.608.944 1.416.944 2.273s-.335 1.665-.944 2.273z" />
              </svg>
              Edit Profile
            </a>
          </nav>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 bg-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              avatar={message.avatar}
              name={message.name}
              preview={message.preview}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
