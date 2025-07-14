// src/components/Posts.tsx
import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/Posts";

function Posts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link> by {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;
