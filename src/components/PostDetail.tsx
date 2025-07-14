// src/components/PostDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/Posts";

function PostDetail() {
  const { postId } = useParams<{ postId: string }>(); // Specify type for postId
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}
export default PostDetail;
