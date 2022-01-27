import Carousel from "../Components/Carousel/Carousel";
import CubeCarousel from "../Components/CubeCarousel/CubeCarousel";
import Landing from "../Components/Landing/Landing";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Dropdown from "../Components/Navbar/Dropdown";
import Slide from "react-reveal/Slide";
import "./Home.css";
import Background from "../Components/Background/Background";
import Loader from "../Components/Loader/Loader";
import Fullpage from "../Components/Fullpage/Fullpage";

const Home = (props) => {
  const checkLoad = (value) => {
    props.function(value);
    setLoading(value);
    setState("none");
  };

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [ismobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      console.log("lol");
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
    console.log(ismobile);
  }, [ismobile]);

  return ismobile ? (
    <div>
      <Fullpage />
    </div>
  ) : (
    <div>
      <div style={{ display: `${state}` }}>
        <Loader />
      </div>
      <Background func={checkLoad} />
      <div className="HomeFull text-white">
        <div className="landing">
          <Landing />
        </div>
        <Carousel />
        <CubeCarousel />
      </div>
    </div>
  );
};

export default Home;
