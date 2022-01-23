import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = (props) => {
  
  return (
    <div
      className={
        props.isOpen
          ? 'grid grid-rows-4 text-center items-center bgdropdown text-white drop relative z-10'
          : 'hidden text-white drop'
      }
      onClick={props.toggle}
    >
      <NavLink exact={true} to='/' activeClassName='activeStyled' className='p-4'>
        Home
      </NavLink>
        <NavLink to='/projects' activeClassName="activeStyled" className='p-4'>
        Projects
        </NavLink>
        <NavLink to='/team' activeClassName="activeStyled" className='p-4'>
        Our Team
        </NavLink>
        <NavLink to='/departments' activeClassName="activeStyled" className='p-4'>
        Departments
        </NavLink>
        <NavLink to='/blog' activeClassName="activeStyled" className='p-4'>
        Blog
        </NavLink>
      <NavLink to='/contact' activeClassName="activeStyled" className='p-4'>
        Contact Us
      </NavLink>
    </div>
  );
};

export default Dropdown;
