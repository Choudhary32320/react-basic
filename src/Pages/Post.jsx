import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const url = "https://api.github.com/users";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // 4455555
  

  const [post, setPost] = useState(null);

  useEffect(() => {
    const dataFetched = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetched();
  }, []);

  return (
    <div
      style={{
        border: "2px solid lime",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        background: "lite dark",
        display: "flex",
        gap: "70px",
      }}
    >
      <img
        src={post?.avatar_url}
        style={{ borderRadius: "50%", height: "30vh" }}
      />

      <div>
        <h1>Name: {post?.name}</h1>
        <h2>Company: {post?.company}</h2>
        <br />
        <button
          style={{
            border: "none",
            borderRadius: "10px",
            height: "4vh",
            width: "6vw",
            color: "white",
            background: "yellow",
            margin: "10px",
          }}
        >
          <a href={post?.html_url}>Profile</a>
        </button>
        <button
          style={{
            border: "none",
            borderRadius: "10px",
            height: "4vh",
            width: "6vw",
            color: "white",
            background: "red",
            margin: "10px",
          }}
          onClick={() => navigate("/Posts")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Post;
