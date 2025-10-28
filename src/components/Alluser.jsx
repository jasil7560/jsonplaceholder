import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllUser.css";

const AllUser = () => {
  const [data, setData] = useState([]);

  const userdata = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  return (
    <div className="user-container">
      {data.map((user, i) => (
        <Link to={`/user/${user.id}`} key={i} className="user-link">
          <div className="user-card">
            <h1 className="username">Username: {user.username}</h1>
            <h2 className="name">Name: {user.name}</h2>
            <p className="email">Email: {user.email}</p>
            <p className="phone">Phone: {user.phone}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllUser;
