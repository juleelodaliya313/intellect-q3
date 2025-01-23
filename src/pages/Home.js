// src/pages/Home.js
import React from "react";
import { capitalizeFirstLetter } from "../utils/formatters/stringFormatter";

const Home = ({ name = "guest" }) => {
  return (
    <>
      <h1>Welcome to the Home Page! {capitalizeFirstLetter(name)} </h1>
    </>
  );
};

export default Home;
