import React,{useState} from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Background from "../Background/Background";
import BackgroundMobile from "../BackgroundMobile/BackgroundMobile";
import Landing from "../Landing/Landing";
import Carousel from "../Carousel/Carousel";
import CubeCarousel from "../CubeCarousel/CubeCarousel";
import Loader from "../Loader/Loader";
import "./Fullpage.css";

const Fullpage = () => {
  const checkLoadTwo = (value) => {
    setStateTwo("none");
  };

  const [stateTwo, setStateTwo] = useState("");

  return (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    navigation={true}
    anchors = { ['firstPage', 'secondPage', '3rdPage']}
    render={({ state, fullpageApi }) => {
      return (
        <div className="relative z-10">
          <ReactFullpage.Wrapper>
            <div className="section">
            <div style={{ display: `${stateTwo}` }}>
               <Loader />
            </div>
            <BackgroundMobile func={checkLoadTwo} />
              <div style={{position:"relative",top:"-40vh"}}>
                <Landing />
              </div>
            </div>
            <div className="section">
              <div className="text-white">
                <Carousel />
              </div>
            </div>
            <div className="section">
              <div className="text-white">
                <CubeCarousel />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
)};

export default Fullpage;
