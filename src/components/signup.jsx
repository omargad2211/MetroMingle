import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firbase";

const SignUpForm = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      let photoURL = "";
      if (img) {
        const storageRef = ref(storage, `usersImages/${displayName}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Optionally, you can track upload progress here
          },
          (error) => {
            setError("Error uploading image.");
          },
          async () => {
            photoURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Update profile with display name and photo URL
            await updateProfile(res.user, {
              displayName,
              photoURL,
            });

            // Save user data to Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL,
            });

            // Create empty user posts collection
            await setDoc(doc(db, "usersPosts", res.user.uid), {
              messages: [],
            });

            // Redirect to login page
            navigate("/posts");
          }
        );
      } else {
        await updateProfile(res.user, { displayName });

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: "",
        });

        await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });

        // Redirect to login page
        navigate("/posts");
      }
    } catch (err) {
      setError("Error creating user: " + err.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-4 lg:px-10 py-10 lg:py-0 min-h-screen bg-orange-300 text-slate-200">
      <form
        onSubmit={handleRegister}
        className="bg-teal-600 p-6 lg:p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4 flex justify-center">
          <label htmlFor="file">
            <img
              src={img ? URL.createObjectURL(img) : "/assets/OIP.jpeg"}
              alt="Profile Preview"
              className="rounded-full w-16 h-16 cursor-pointer mb-4"
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
              }
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="displayName" className="block text-slate-200 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            className="w-full text-black bg-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Full Name"
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-200 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full text-black bg-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-slate-200 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 bg-white border text-black border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
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
            name="confirmPassword"
            id="confirmPassword"
            className="w-full px-3 bg-white text-black py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link to="/">
            <button
              type="button"
              className="btn bg-orange-600 text-white hover:bg-orange-500"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="btn text-white bg-teal-400 hover:bg-teal-300"
          >
            Sign Up
          </button>
        </div>
        {error && <span className="text-red-500 mt-4 block">{error}</span>}
      </form>
      <div className="max-w-96 text-white text-xl lg:text-base lg:max-w-lg lg:w-full px-4 text-center lg:text-left lg:px-0">
        Welcome to{" "}
        <span className="text-xl font-bold text-teal-500">MetroMingle</span>{" "}
        your gateway to discovering the vibrant stories and hidden gems of
        cities across Egypt! Our platform is dedicated to bringing you the most
        authentic and engaging experiences from people who live and breathe the
        essence of their cities. Whether you’re a local seeking fresh
        perspectives or a traveler eager to explore Egypt beyond the typical
        guidebooks, you’ll find a treasure trove of blogs filled with personal
        anecdotes, insider tips, and breathtaking visuals. Join our community of
        passionate storytellers and immerse yourself in the rich cultural
        tapestry and dynamic urban life that Egypt has to offer. Let’s explore,
        connect, and celebrate the spirit of Egyptian cities together!
      </div>
    </div>
  );
};

export default SignUpForm;
