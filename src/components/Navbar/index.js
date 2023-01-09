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
            <NavLink to='/houses' activeStyle>
              Houses
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            <NavLink to='/owners' activeStyle>
              Owners
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
          {/* <NavBtn>
            <NavBtnLink to='/logout'>Logout</NavBtnLink>
          </NavBtn> */}
        </Nav>
        <Bars />
      </>
    );
  };
    
  export default Navbar;