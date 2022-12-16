import React from 'react';
import { Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/home' activeStyle>
               Home
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/houses' activeStyle>
              Houses
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Login</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;