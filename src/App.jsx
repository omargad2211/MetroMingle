import { useState, useEffect } from "react";
import Nav from "./components/nav";
import Login from "./components/login";
import SignUpForm from "./components/signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Addpost from "./components/addpost";
import Profile from "./pages/profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const [posts, setposts] = useState([]);

  return (
    <div className="  m-0">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
