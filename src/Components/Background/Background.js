import React, { useEffect,useState } from "react";

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
        src="https://mail.google.com/mail/u/0?ui=2&ik=42954d625a&attid=0.1&permmsgid=msg-f:1722848928471007525&th=17e8c9f8ef2d4125&view=att&disp=safe&realattid=f_kystnj1d0"
        alt="background"
      ></img>
    </div>
  );
};

export default Background;
