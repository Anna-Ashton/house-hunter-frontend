import React from 'react';
import { Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          
    
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
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
        </Nav>
        <Bars />
      </>
    );
  };
    
  export default Navbar;