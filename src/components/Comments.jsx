import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Comments.css";

const Comments = ({ id }) => {
  const [data, setData] = useState([]);

  const fetchcomment = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  useEffect(() => {
    fetchcomment();
  }, [id]);

  return (
    <div className="comments-container">
      {data.map((cmd) => (
        <div className="comment-card" key={cmd.id}>
          <h2 className="comment-name">{cmd.name}</h2>
          <p className="comment-email">{cmd.email}</p>
          <p className="comment-body">{cmd.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
