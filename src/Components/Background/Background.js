import React, { useEffect,useState } from "react";
import back from "../../cc-background.heic";

const Background = (props) => {
    const [offset, setOffset] = useState(0);

    props.func(true);
    
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleImageLoad = () => {
      console.log('lol');
    }

  return (
    <div style={{transform:`translateY(-${offset*0.8}px)`}} className="h-full absolute top-0 cc-image"
    >
      <img
        style={{ opacity: "0.2" }}
        src={back}
        alt="background"
        onLoad={handleImageLoad}
      ></img>
    </div>
  );
};

export default Background;
