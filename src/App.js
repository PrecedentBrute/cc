import React, {useState,useEffect, useRef} from 'react';
import Main from "./Containers/Main";
import Loader from "./Components/Loader/Loader";


function App() {

  const styles = {
    height: "100vh",
  }

  const [completed, setCompleted] = useState(false);
  const [load,setLoad] = useState(false);

  const finalSetLoad = (value) => {
    setLoad(value);
  }

   useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 1500);
    console.log(load);
  });

  return (
    <div style={styles}>
    {completed ? <Main intermediate={finalSetLoad} /> : <Loader />}
    </div>
  );
}

export default App;
