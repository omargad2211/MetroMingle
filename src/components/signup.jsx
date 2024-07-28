// export default SignUpForm;
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firbase"; // Correct import

const SignUpForm = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target.firstName.value; // Improved name to match your form input
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Check if image is selected
      if (!img) {
        setError(true);
        console.error("No image selected");
        return;
      }

      // Reference to the storage location
      const storageRef = ref(storage, `usersImages/${displayName}`); // Use template literals for dynamic paths

      // Upload the image to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function (optional)
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
          setError(true);
          console.error("Upload error:", error);
        },
        async () => {
          // Handle successful uploads
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);

          // Update user profile with display name and photo URL
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          // Set user data in Firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          // Initialize user posts collection in Firestore
          await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });

          console.log("User created successfully");
          navigate("/login"); // Navigate after successful registration
        }
      );
    } catch (error) {
      setError(true);
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-slate-200 bg-slate-800">
        <form
          onSubmit={handleRegister}
          className="bg-transparent p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <div className="mb-4">
            <label htmlFor="file">
              <img
                src={img ? URL.createObjectURL(img) : "/src/assets/OIP.jpg"}
                alt="Profile Preview"
                width="100px"
                className="rounded-full cursor-pointer mb-4"
              />
            </label>
            <input
              type="file"
              name="file"
              id="file"
              hidden
              accept=".png,.jpeg,.jpg"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  setImg(selectedFile);
                  console.log("Image selected:", selectedFile.name);
                }
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-slate-200 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-slate-200 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="birthday" className="block text-slate-200 mb-2">
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Birthday"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-slate-200 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-slate-200 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              autoComplete="off"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <Link to="/">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          {error && (
            <span className="text-red-500 mt-4 block">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
