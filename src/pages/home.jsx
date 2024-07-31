import { useContext } from "react";
import { Link } from "react-router-dom";
import { GiFlyingTrout } from "react-icons/gi";
import { AuthContext } from "../context/AuthContext"; // Make sure the path is correct
import { auth } from "../firbase";
export default function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url("assets/Untitled design (1).jpg")`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl flex font-bold mb-4">
          Welcome to MetroMingle <GiFlyingTrout />
        </h1>
        <p className="text-xl mb-8">
          Connect with friends and the world around you.
        </p>

        {/* Conditionally render buttons based on currentUser */}
        {!currentUser ? (
          <div className="space-x-4">
            <Link to={"/signup"}>
              <button className="btn btn-primary">Sign Up</button>
            </Link>

            <Link to={"/login"}>
              <button className="btn btn-secondary">Log In</button>
            </Link>

            <Link to={"/posts"} className="btn text-white btn-warning">
              see users posts
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <p className="text-lg">
              Welcome back, {currentUser.displayName || "User"}!
            </p>
            <button
              className="btn btn-warning"
              onClick={() => {
                // Add logout functionality here if needed
                auth.signOut();
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      {/* <Posts posts={posts} /> */}
    </div>
  );
}
