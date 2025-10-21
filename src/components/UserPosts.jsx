import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Homepage.css";

function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        setPosts(res.data.slice(0, 10)); 
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };
    fetchUserPosts();
  }, [id]);

  return (
    <div className="container">
      <Link to="/" className="back-btn">
        ← Back to All Posts
      </Link>
      <h2>User {id} — First 10 Posts</h2>

      <div className="grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 120)}...</p>
              <div className="post-info">
                <span>User ID: {post.userId}</span>
                <span>Post ID: {post.id}</span>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default UserPosts;
