import React from 'react';
import Home from "./Home";
import OurProjects from './OurProjects/Ourprojects';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dropdown from '../Components/Navbar/Dropdown';
import Navbar from '../Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import 'react-toastify/dist/ReactToastify.css';
import Department from './Departments/Departments'
import Blog from '../Components/Blogcards/blogcard';
import ContactUs from '../Components/ContactUs/ContactUs'
import Team from './OurTeam/OurTeam'

const Main = () => {

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
        <>
        <BrowserRouter>       
        
        
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle}  />    
      
         <div className='entire'>
        <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/projects" component={OurProjects} />
            <Route path="/team" component={Team} />
            <Route path="/departments" component={Department} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={ContactUs} />
            </Switch>
            </div>
      
      
        </BrowserRouter>
        </>
    )
}

export default Main;
