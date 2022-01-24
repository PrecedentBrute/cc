import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import CubeCarousel from "../Components/CubeCarousel/CubeCarousel";
import Landing from "../Components/Landing/Landing";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Dropdown from "../Components/Navbar/Dropdown";
import Slide from "react-reveal/Slide";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomeFull text-white">
      <div className="landing">
        <Landing />
      </div>
      <Carousel />
      <CubeCarousel />
    </div>
  );
};

export default Home;
