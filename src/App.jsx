import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../src/Pages/Posts";
import Post from "../src/Pages/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
