import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'

// import {ReactComponent as Err} from '../../../src/error.svg'
import Err from '../../../src/ghost.png'


class Error extends Component {
  render() {
    return <div>
        <h1 className='style'>Error !! PAGE NOT FOUND </h1>
        {/* <Err className='img'></Err> */}
        <img src={Err} className='img'></img>
        <div id="text">Oops! The page is a <b id="text-through">Ghot</b> Ghost</div>
        <NavLink to = '/' className="redirect">Click to go back Home</NavLink>
    </div>;
  }
}

export default Error;
