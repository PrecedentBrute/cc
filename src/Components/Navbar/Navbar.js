
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";


const Navbar = (props) => {

  
  return (
    <nav
      className='flex justify-between items-center h-16 topbarr text-white shadow-sm'
      role='navigation'
    >
      <NavLink to='/' className='flex pl-8 items-center'>
        <img style={{filter:"drop-shadow(0px 0px 4px rgba(255, 0, 0, 1))"} } width="50" height="50" src="/assets/logo.svg" className="" alt="logo" />
        <p className="mt-2 ml-3 headline" style={{ filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 1))", lineHeight:"60%"} }>CODING CLUB<br></br><span className='text-sm md:text-xl'>BITS Pilani</span></p>
      </NavLink>
      <div className='px-4 cursor-pointer md:hidden' onClick={props.toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden alignment'>
        <NavLink exact={true} to='/' activeClassName='activeStylee' className='p-4'>
        Home
      </NavLink>
        <NavLink to='/projects' activeClassName="activeStylee" className='p-4'>
        Projects
        </NavLink>
        <NavLink to='/team' activeClassName="activeStylee" className='p-4'>
        Our Team
        </NavLink>
        <NavLink to='/departments' activeClassName="activeStylee" className='p-4'>
        Departments
        </NavLink>
        <NavLink to='/blog' activeClassName="activeStylee" className='p-4'>
        Blog
        </NavLink>
      <NavLink to='/contact' activeClassName="activeStylee" className='p-4'>
        Contact Us
      </NavLink>
      
      
      </div>
      
    </nav>
  );
};

export default Navbar;
