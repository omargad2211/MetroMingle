import React, { useEffect, useState, useContext } from "react";
import { BiHide } from "react-icons/bi";
import Addpost from "../components/addpost";
import { db } from "../firbase";
import { Link } from "react-router-dom";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { formatDistanceToNow } from "date-fns";

export default function Tweet() {
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
      <div className="bg-white p-4 rounded mb-7 shadow relative transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 max-w-3xl mx-auto">
        <div className="flex items-start">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between pb-6 border-b-2 border-b-slate-200">
              <div>
                <h4 className="font-bold text-lg md:text-xl">{name}</h4>
                <span className="text-gray-500 text-sm md:text-base">
                  {handle}
                </span>
                <span className="text-gray-500 ml-2 text-sm md:text-base">
                  • {formattedTime}
                </span>
              </div>
              {isLoggedIn && (
                <div className="relative">
                  <button
                    className="material-icons text-gray-500 hover:text-teal-700"
                    onClick={toggleDropdown}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="2.4em"
                      width="2.4em"
                    >
                      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                      {isAuthor ? (
                        <>
                          <button
                            className="block w-full px-4 py-2 text-left hover:bg-teal-600 hover:text-white"
                            onClick={toggleEditing}
                          >
                            Edit
                          </button>
                          <button
                            className="block w-full px-4 py-2 text-left hover:bg-teal-600 hover:text-white"
                            onClick={() => onDelete(postId)}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <button className="block w-full px-4 py-2 text-left hover:bg-teal-600 hover:text-white">
                          <BiHide className="inline mr-2" /> Hide Post
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
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
                      onClick={() => {
                        updateDoc(doc(db, "posts", postId), {
                          title: editedTitle,
                          post: editedContent,
                        })
                          .then(() => {
                            setIsEditing(false);
                          })
                          .catch((error) => {
                            console.error("Error updating post:", error);
                            alert(
                              "Failed to update post. Please try again later."
                            );
                          });
                      }}
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
                  <h3 className="font-bold text-teal-600 text-xl md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-800 text-sm md:text-base">
                    {content}
                  </p>
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
            {isLoggedIn ? (
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
            ) : (
              <div className="mt-4 p-4 bg-gray-100 text-gray-600 text-center rounded">
                Please{" "}
                <Link to="/login" className="text-teal-600 underline">
                  log in
                </Link>{" "}
                to interact with this post.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
}
