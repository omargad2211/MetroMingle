import React, { useContext, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firbase"; // Ensure correct import path
import { v4 as uuid } from "uuid"; // UUID for unique image names
import { AuthContext } from "../context/AuthContext";
import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  Timestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function AddPost() {
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputPost, setInputPost] = useState("");
  const [img, setImg] = useState(null);
  const [uploading, setUploading] = useState(false); // Track uploading state

  const handlePost = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (!currentUser) {
      setError("You must be logged in to post.");
      return;
    }

    if (!inputTitle || !inputPost) {
      setError("Title and post content are required.");
      return;
    }

    try {
      setUploading(true); // Start uploading process

      // If there's an image, handle the upload
      if (img) {
        const storageRef = ref(storage, `Posts/${uuid()}_${img.name}`);

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Optional: Log progress (can be used for showing upload progress)
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            // Handle unsuccessful uploads
            console.error("Upload failed:", error);
            setError("Upload failed. Please try again.");
            setUploading(false);
          },
          async () => {
            // Handle successful uploads
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);

            await createPostWithImage(downloadURL); // Post with image URL
            setUploading(false);
          }
        );
      } else {
        // No image provided
        await createPostWithoutImage(); // Post without image
        setUploading(false);
      }
    } catch (error) {
      console.error("Error adding post:", error);
      setError("Error adding post. Please try again.");
      setUploading(false);
    }
  };

  // Function to create post with image
  const createPostWithImage = async (downloadURL) => {
    try {
      await addDoc(collection(db, "posts"), {
        uid: currentUser.uid,
        photoURL: currentUser.photoURL,
        displayName: currentUser.displayName,
        title: inputTitle,
        post: inputPost,
        img: downloadURL,
        timestamp: serverTimestamp(),
      });

      await updateDoc(doc(db, "usersPosts", currentUser.uid), {
        messages: arrayUnion({
          id: uuid(),
          uid: currentUser.uid,
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName,
          title: inputTitle,
          post: inputPost,
          img: downloadURL,
          timestamp: Timestamp.now(),
        }),
      });

      // Reset form inputs after successful post
      setInputPost("");
      setInputTitle("");
      setImg(null);
      setError(null);
    } catch (error) {
      console.error("Error creating post with image:", error);
      setError("Failed to create post with image.");
    }
  };

  // Function to create post without image
  const createPostWithoutImage = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        uid: currentUser.uid,
        photoURL: currentUser.photoURL,
        displayName: currentUser.displayName,
        title: inputTitle,
        post: inputPost,
        timestamp: serverTimestamp(),
      });

      await updateDoc(doc(db, "usersPosts", currentUser.uid), {
        messages: arrayUnion({
          id: uuid(),
          uid: currentUser.uid,
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName,
          title: inputTitle,
          post: inputPost,
          timestamp: Timestamp.now(),
        }),
      });

      // Reset form inputs after successful post
      setInputPost("");
      setInputTitle("");
      setImg(null);
      setError(null);
    } catch (error) {
      console.error("Error creating post without image:", error);
      setError("Failed to create post without image.");
    }
  };

  return (
    <div className="w-2/3 bg-transparent p-5 rounded-xl shadow-2xl mt-11">
      <form onSubmit={handlePost}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-400"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className="block px-3 py-2 border bg-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-violet-600 focus:border-violet-600"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-400"
          >
            Post Text
          </label>
          <textarea
            id="content"
            rows="4"
            value={inputPost}
            onChange={(e) => setInputPost(e.target.value)}
            className="mt-1 block bg-slate-200 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-violet-600 focus:border-violet-600"
            placeholder="What's on your mind?"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-400"
          >
            Image URL
          </label>
          <input
            id="image"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            accept=".png,.jpeg,.jpg"
            className="mt-1 block bg-slate-200 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-violet-600 focus:border-violet-600"
          />
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          className="btn btn-secondary text-white shadow-md hover:bg-violet-600 transition duration-500"
          disabled={uploading} // Disable button during upload
        >
          {uploading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}
