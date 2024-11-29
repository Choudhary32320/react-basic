import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "https://api.github.com/users";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {user.map((people) => {
        const { id, login } = people;
        return (
          <div
            style={{
              border: "3px solid red",
              borderRadius: "10px",
              padding: "10px",
              margin: "50px",
            }}
            key={id}
          >
            <h1>{login}</h1>
            <button
              style={{
                background: "lime",
                border: "none",
                borderRadius: "10px",
                padding: "5px",
              }}
              onClick={() => navigate(`/post/${id}`)}
            >
              Click
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
