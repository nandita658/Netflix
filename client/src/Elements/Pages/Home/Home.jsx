import React from "react";
import Featured from "../../Components/Featured";
import Navbar from "../../Components/Navbar";
import List from "../../Components/List";

import "./Home.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/lists/${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE3YWQzNDkxZGE3ZmVmZWNiYWVkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzE4NTM5NywiZXhwIjoxNjQzNjE3Mzk3fQ.m9zwJiOcgC8tuH86uZ3Gd-Ijylebwdzkucdq0ZPXqzQ",
            },
          }
        );
        console.log(res.data);
        //setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
