import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Slide from "react-reveal/Slide";
import "./Dropdown.css";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const Dropdown = (props) => {
  const history = useHistory();
  const location = useLocation();

  console.log(window.location);
  return (
    <Slide>
      <div
        className={
          props.isOpen
            ? "grid relative z-20 grid-rows-1 text-center items-center bgdropdown text-white drop "
            : "hidden text-white drop"
        }
        onClick={props.toggle}
      >
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/",
            },
            {
              title: "Projects",
              itemId: "/projects",

              // subNav: [
              //   {
              //     title: "Projects",
              //     itemId: "/team",

              //   },
              //   {
              //     title: "Members",
              //     itemId: "/departments",

              //   }
              // ]
            },
            {
              title: "Our Team",
              itemId: "/team",
            },
            {
              title: "Departments",
              itemId: "/departments",
            },
            {
              title: "Contact us",
              itemId: "/contact",
            },
          ]}
        />

        {/* <NavLink exact={true} to='/' activeClassName='activeStyled' className='p-4'>
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
        <NavLink to='/contact' activeClassName="activeStyled" className='p-4'>
        Contact Us
        </NavLink> */}
      </div>
    </Slide>
  );
};

export default Dropdown;
