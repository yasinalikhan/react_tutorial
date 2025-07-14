// src/App.tsx
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import "./App.css"; // Keep this for basic styling

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "10px",
          backgroundColor: "#f4f4f4",
          borderBottom: "1px solid #ddd",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "20px",
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="*" element={<h2>Page Not Found</h2>} /> {/* 404 Route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
