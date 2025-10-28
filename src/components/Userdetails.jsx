import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = ({ id }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchuserdata = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  function gotoalbum() {
    navigate(`/albums/${data.id}`);
  }

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
    <div className="user-card">
      <div className="user-header">
        <h1>Username: {data.username}</h1>
        <button onClick={gotoalbum}>Albums</button>
      </div>
      <h2>Name: {data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
    </div>
  );
};

export default UserDetails;
