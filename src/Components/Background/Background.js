import React, { useEffect,useState } from "react";
import back from "../../cc-background.heic";

const Background = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div style={{transform:`translateY(-${offset*0.8}px)`}} className="h-full absolute top-0 cc-image"
    >
      <img
        style={{ opacity: "0.2" }}
        src={back}
        alt="background"
      ></img>
    </div>
  );
};

export default Background;
