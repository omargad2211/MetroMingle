import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { PostsContexProvider } from "./context/postscontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContexProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostsContexProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
