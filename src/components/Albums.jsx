import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Albums.css"; 

const Albums = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="albums-container">
      <h2 className="albums-title">User Albums</h2>
      <div className="album-grid">
        {data.map((alb, i) => (
          <div key={i} className="album-card">
            <h3 className="album-title">{alb.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
