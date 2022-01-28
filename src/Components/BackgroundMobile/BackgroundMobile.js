import React, { useEffect,useState } from "react";
import back from "../../cc-background.heic";
import "./BackgroundMobile.css";

const BackgroundMobile = (props) => {
    const [offset, setOffset] = useState(0);

    props.func(true);

    const handleImageLoad = () => {
      console.log('lol');
    }

  return (
    <div className="h-full absolute -top-16 cc-image-mobile"
    >
      <img
        style={{ opacity: "0.2" }}
        src={back}
        alt="background"
        onLoad={handleImageLoad}
        className="cc-fam"
      ></img>
    </div>
  );
};

export default BackgroundMobile;
