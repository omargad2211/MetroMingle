// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firbase"

// export default function Login() {
//  const [error, setError] = useState(false);
//  const navigate = useNavigate();

//  const handleLogin = async (e) => {
//    e.preventDefault();

//    const email = e.target[0].value;
//    const password = e.target[1].value;

//    try {
//      await signInWithEmailAndPassword(auth, email, password);
//      navigate("/posts");
//    } catch (error) {
//      setError(true);
//    }
//  };

//   return (
//     <>
//       {/* {userLoggedIn && <Navigate to="/" replace={true} />} */}
//       <div className="hero text-slate-200 bg-slate-800 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           {/* {errorMessage && (
//             <div className="text-red-600 text-center">{errorMessage}</div>
//           )} */}
//           <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
//             <form className="card-body" onSubmit={handleLogin}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   autoComplete="email"
//                   required
//                   // value={email}
//                   // onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email"
//                   className="input bg-transparent input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   required
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                   className="input bg-transparent input-bordered"
//                 />
//                 <label className="label mt-3">
//                   <Link
//                     className="hover:bg-gray-200 rounded-lg p-2"
//                     to="/forgot-password"
//                   >
//                     forgot your password?
//                   </Link>
//                 </label>
//               </div>
//               <div className="form-control ">
//                 <button
//                   type="submit"
//                   className="btn btn-primary text-white mb-2"
//                   // disabled={isSigningIn}
//                 >
//                   {/* {isSigningIn ? "Signing in..." : "Login"} */}
//                   login
//                 </button>

//                 <label className="label-text-alt text-slate-200 mb-2 mt-3">
//                   You t have an account?
//                 </label>
//                 <Link className="btn btn-secondary" to="/signup">
//                   Sign Up
//                 </Link>
//                 <button
//                   type="button"
//                   className="btn btn-outline mt-3"
//                   // onClick={onGoogleSignIn}
//                   // disabled={isSigningIn}
//                 >
//                   {error && <span>Something went wrong</span>}
//                   {/* {isSigningIn ? "Signing in..." : "Sign in with Google"} */}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firbase"; // Make sure this path is correct

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/posts");
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message); // Display the error message from Firebase
    }
  };

  return (
    <div className="hero text-slate-200 bg-slate-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-teal-500 font-bold">Login now!</h1>
          <p className="py-6 text-orange-500">
            Discover the heart of Egypt through the eyes of its residents. Our
            platform offers a unique glimpse into the vibrant cities of Egypt
            with personal stories, insider tips, and local insights. Whether
            you’re exploring from afar or discovering your own city, dive in and
            experience the rich culture and dynamic life of Egypt like never
            before!
          </p>
        </div>
        <div className="card bg-slate-600 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input bg-transparent input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input bg-transparent input-bordered"
              />
              <label className="label mt-3">
                <Link
                  className="hover:bg-gray-200 rounded-lg p-2"
                  to="/forgot-password"
                >
                  forgot your password?
                </Link>
              </label>
            </div>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <div className="form-control">
              <button type="submit" className="btn btn-primary text-white mb-2">
                login
              </button>
              <label className="label-text-alt text-slate-200 mb-2 mt-3">
                You dont have an account?
              </label>
              <Link className="btn btn-secondary" to="/signup">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
