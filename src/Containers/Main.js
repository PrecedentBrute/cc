import React, { useState, useEffect, useRef } from 'react';
import Home from "./Home";
import OurProjects from './OurProjects/Ourprojects';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dropdown from '../Components/Navbar/Dropdown';
import Navbar from '../Components/Navbar/Navbar';
import Slide from 'react-reveal/Slide';
import 'react-toastify/dist/ReactToastify.css';
import Department from './Departments/Departments'
import Blog from '../Components/Blogcards/blogcard';
import ContactUs from '../Components/ContactUs/ContactUs'
import Team from './OurTeam/OurTeam'
import Error from '../Components/404 Error/Error'

import Particles from 'react-tsparticles'


const Main = (props) => {

  const loadCheck = (value) => {
    props.intermediate(value);
  }

  const particlesInit = (main) => {
    
  }

  const particlesLoaded = (main) => {
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

    return (
      <div>
        <Particles id="Particles" init={particlesInit} loaded={particlesLoaded}
          options={

      {
  background: {
    color: {
      value: "#210909"
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "20%"
  },
  fullScreen: {
    zIndex: -1
  },
  interactivity: {
    events: {
     
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: true,
          force: 40,
        }
      }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: 0
      },
      connect: {
        distance: 120,
        links: {
          opacity: 0.3
        }
      },
      grab: {
        distance: 400
      },
      repulse: {
        distance: 400
      }
    }
  },
  particles: {
    color: {
      value: "#7e554d"
    },
    links: {
      color: {
        value: "#ffffff"
      },
      distance: 150,
      opacity: 0.4
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 600
        }
      },
      enable: true,
      path: {},
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: true,
      speed: 1,
      spin: {}
    },
    number: {
      density: {
        enable: true
      },
      value: 250
    },
    opacity: {
      random: {
        enable: true
      },
      value: {
        min: 0,
        max: 1
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0
      }
    },
    size: {
      random: {
        enable: true
      },
      value: {
        min: 1,
        max: 2
      },
      animation: {
        speed: 4,
        minimumValue: 0.3
      }
    }
  }
}
          
          }
        />
        <BrowserRouter>       
        
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle}  />    
      
         <div className='entire'>
        <Switch>
          <Route exact path="/" render={(props) => <Home function={loadCheck} {...props} />}  />
            <Route path="/projects" component={OurProjects} />
            <Route path="/team" component={Team} />
            <Route path="/departments" component={Department} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={ContactUs} />
            <Route component={Error} />
            </Switch>
            </div>
      
      
        </BrowserRouter>
        </div>
    )
}

export default Main;
