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
      <div className="text-center flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl flex font-bold mb-4">
          Welcome to MetroMingle <GiFlyingTrout />
        </h1>
        <p className="text-xl w-2/3 mb-8">
          Discover the vibrant cities of Egypt! From ancient wonders to modern
          marvels, explore the rich history and culture of Egypt’s urban
          treasures and find your next adventure in the heart of the Nile.
        </p>

        {/* Conditionally render buttons based on currentUser */}
        {!currentUser ? (
          <div className="space-x-4 mt-28">
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
          <div className="space-x-4 mt-28">
            <p className="text-lg">
              Welcome back,<span className="font-bold text-orange-600 p-2 rounded-lg">{currentUser.displayName || "User"}!</span>
            </p>
            <button
              className="btn mt-3 btn-warning"
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
