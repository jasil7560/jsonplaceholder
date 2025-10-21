import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Homepage.css";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p className="loading">Loading post...</p>;

  return (
    <div className="container">
      <Link to="/" className="back-btn">← Back</Link>
      <div className="details-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className="post-info">
          <span>User ID: {post.userId}</span>
          <span>Post ID: {post.id}</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
