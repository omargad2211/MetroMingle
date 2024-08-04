import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/postscontext"; // Import the PostsContext
import { BiHide } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";


import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import { Link } from "react-router-dom";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  const { posts } = useContext(PostsContext); // Access posts from PostsContext
  console.log(posts);
  const userPosts = posts.filter((post) => post.uid === currentUser?.uid);
  console.log(userPosts);
  console.log(userPosts.post);
  console.log(currentUser);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-1/5 bg-white h-screen border-r">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">MetroMingle</h1>
            <nav className="space-y-2">
              <Link
                to='/posts'
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
                to='/notifications'
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
                to='/messages'
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
                to='/profile'
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

        {/* Main Content */}
        <main className="flex-grow w-1/2 bg-gray-50">
          <header className="flex justify-between items-center bg-white p-4 border-b">
            <h2 className="text-xl font-semibold">Profile</h2>
            <button className="btn btn-primary bg-orange-500 border-orange-700 hover:bg-teal-600 text-white btn-sm">Edit Profile</button>
          </header>

          <section className="p-4">
            {/* Profile Header */}
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/f8/79/d2/f879d28c3b4b30cb08c4e0cb191baa23.jpg"
                alt="Cover Photo"
                className="w-full h-48 object-cover"
              />
              <div className="absolute -bottom-16 left-4">
                <img
                  src={`${currentUser?.photoURL}`}
                  // `url(${currentUser.photoURL})`
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-20 mb-4 px-4">
              <h1 className="text-2xl font-bold">{`${currentUser?.displayName}`}</h1>
              <p className="text-gray-600">@{`${currentUser?.displayName}`}</p>
              <p className="mt-2">
                Software Engineer | Tech Enthusiast | Open Source Contributor
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-600">
                  Location: Dokki, Cairo.
                </span>
                <span className="text-gray-600">Joined: July 2024</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <div>
                  <span className="font-bold">512</span> Following
                </div>
                <div>
                  <span className="font-bold">2.3K</span> Followers
                </div>
              </div>
            </div>

            {/* Tweet Tabs */}
            <div className="border-b mb-4">
              <ul className="flex justify-around text-center text-sm font-medium">
                <li className="flex-1 hover:bg-gray-200 cursor-pointer p-2">
                  <span>Tweets</span>
                </li>
                <li className="flex-1 hover:bg-gray-200 cursor-pointer p-2">
                  <span>Tweets & Replies</span>
                </li>
                <li className="flex-1 hover:bg-gray-200 cursor-pointer p-2">
                  <span>Media</span>
                </li>
                <li className="flex-1 hover:bg-gray-200 cursor-pointer p-2">
                  <span>Likes</span>
                </li>
              </ul>
            </div>

            {/* Tweets */}
            <div className="space-y-4">
              <div className="space-y-4">
                {userPosts.length === 0 ? (
                  <p className="text-center text-gray-500">No posts yet.</p>
                ) : (
                  userPosts.map((post) => (
                    <Tweet
                      key={post.id}
                      profileImage={currentUser?.photoURL}
                      name={currentUser?.displayName}
                      handle={`@${currentUser?.displayName}`}
                      time={post?.timestamp}
                      title={post?.title}
                      content={post?.post}
                      image={post.img}
                      likes={post.likes}
                      comments={post.comments}
                      retweets={post.retweets}
                    />
                  ))
                )}
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/4 bg-gray-50 p-4 border-l">
          <div className="mb-4 flex flex-col">
            <h3 className="text-lg text-teal-500 font-semibold mb-2">
              Who to follow
            </h3>
            <FollowSuggestion
              name="omar gad"
              handle="@omargad"
              profileImage="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/356904138_1450160225743861_3617184216260463600_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6253ES-I9PgQ7kNvgGw-Plb&_nc_ht=scontent.fcai19-5.fna&oh=00_AYBH9JelPxTpVqhctr0HzKtaCr3sdCLVcLIjSg4wnnSP9Q&oe=66AFC619"
            />
            <FollowSuggestion
              name="ammar elbatal"
              handle="@ammarbtl"
              profileImage="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/217968151_991275661632322_9151115366027423106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pE2fv1l1rnkQ7kNvgGGybYR&_nc_ht=scontent.fcai19-5.fna&gid=AoK2VvsZt9WAoLsElprHgXH&oh=00_AYBE0kOQhpv4DZppH--LvWWrc2pMaTVQsGfZSWxKL18Ehg&oe=66AFD4DD"
            />
          </div>
          <div>
            <h3 className="text-lg text-teal-500 font-semibold mb-2">
              Trends for you
            </h3>
            <div className="text-orange-700">
              <Trend name="#ReactJS" tweets="120K" />
              <Trend name="#JavaScript" tweets="90K" />
              <Trend name="#TailwindCSS" tweets="60K" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

const Tweet = ({
  postId,
  profileImage,
  name,
  handle,
  time,
  title,
  content,
  image,
  likes,
  comments,
  retweets,
  isAuthor,
  onDelete,
  isLoggedIn,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const formattedTime =
    time && typeof time.toDate === "function"
      ? formatDistanceToNow(time.toDate(), { addSuffix: true })
      : "Unknown time";

  return (
    <div className="bg-white p-4 rounded shadow relative transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="flex items-start">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between pb-6 border-b-2 border-b-slate-200">
            <div>
              <h4 className="font-bold ">{name}</h4>
              <span className="text-gray-500">{handle}</span>
              <span className="text-gray-500 ml-2">• {formattedTime}</span>
            </div>
          </div>
          <div className="mt-4">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full p-2 border border-teal-600 rounded mb-2"
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full p-2 border border-teal-600 rounded"
                />
                <div className="flex justify-end mt-2">
                  <button
                    className="bg-teal-500 text-white py-1 px-4 rounded mr-2"
                    // onClick={() => {
                    //   updateDoc(doc(db, "posts", postId), {
                    //     title: editedTitle,
                    //     post: editedContent,
                    //   })
                    //     .then(() => {
                    //       setIsEditing(false);
                    //     })
                    //     .catch((error) => {
                    //       console.error("Error updating post:", error);
                    //       alert(
                    //         "Failed to update post. Please try again later."
                    //       );
                    //     });
                    // }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 py-1 px-4 rounded"
                    onClick={() => {
                      setIsEditing(false);
                      setEditedTitle(title);
                      setEditedContent(content);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-teal-600 text-2xl">{title}</h3>
                <p className="mt-1 text-gray-800">{content}</p>
              </>
            )}
            {image && (
              <img
                src={image}
                alt="Post"
                className="mt-4 w-full h-auto rounded-md"
              />
            )}
          </div>
          <div className="flex items-center justify-around mt-4 pt-2 border-t-2 border-t-slate-200">
            <button className="flex gap-2 items-center text-gray-600 hover:text-teal-700">
              <svg
                viewBox="0 0 1008 1008"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
              {likes} Likes
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-teal-700">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <defs>
                  <style />
                </defs>
                <path d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zm-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z" />
                <path d="M894 345c-48.1-66-115.3-110.1-189-130v.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102zm505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z" />
                <path d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z" />
              </svg>{" "}
              {comments} Comments
            </button>
            <button className="flex gap-2 items-center text-gray-600 hover:text-teal-700">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M5 4a2 2 0 00-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 01-2 2H6l2-2h7V8z" />
              </svg>
              {retweets} Retweets
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-teal-700">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 19h16v-5h2v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6h2v5zm8-9H9a5.992 5.992 0 00-4.854 2.473A8.003 8.003 0 0112 6V2l8 6-8 6v-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FollowSuggestion = ({ name, handle, profileImage }) => (
  <div className="flex items-center mb-4">
    <img
      src={profileImage}
      alt={name}
      className="w-10 h-10 rounded-full mr-2"
    />
    <div>
      <h4 className="font-bold">{name}</h4>
      <span className="text-gray-500">{handle}</span>
    </div>
    <button className="btn btn-outline btn-sm ml-auto">Follow</button>
  </div>
);

const Trend = ({ name, tweets }) => (
  <div className="mb-2">
    <h5 className="font-semibold">{name}</h5>
    <span className="text-gray-500">{tweets} Tweets</span>
  </div>
);

// test using add context
function formatTimestamp(timestamp) {
  // Extract seconds and nanoseconds
  const { seconds, nanoseconds } = timestamp;

  // Convert seconds to milliseconds and add nanoseconds
  const milliseconds = seconds * 1000 + nanoseconds / 1000000;

  // Create a Date object
  const date = new Date(milliseconds);

  // Format the date
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}

// Example usage:
const timestamp = {
  seconds: 1722339624,
  nanoseconds: 196000000,
};

console.log(formatTimestamp(timestamp));
