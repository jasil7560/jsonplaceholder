


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Userposts from "./components/Userposts";
import PostDetails from "./components/PostDetails";
import AllUser from "./components/Alluser";
import Albums from "./components/Albums";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/:id" element={<Userposts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/alluser" element={<AllUser/>} />
        <Route path="/albums/:id" element={<Albums/>} />
      </Routes>
    </Router>
  );
}

export default App;

