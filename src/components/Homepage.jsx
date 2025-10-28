import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
const navigate=useNavigate()

  function movetoalluser(){
navigate("/alluser")
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );
 
  

  return (
    <div className="container">
      <h2>All Posts</h2>

   
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={movetoalluser}>All users</button>
      </div>

   
      <div className="grid">
        {filtered.map((post) => (
          <div key={post.id} className="post-card">
            <Link to={`/post/${post.id}`} className="post-link">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
            </Link>
            <div className="post-info">
              <Link to={`/user/${post.userId}`} className="user-link">
                👤 User {post.userId}
              </Link>
              <span>Post ID: {post.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
