import React from 'react';
import { Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
        <a href="/#" class="navbar-brand text-uppercase font-italic"><img src="https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo"
                class=" round rounded-circle"></img></a>
    
            <Bars />
            
          <NavMenu>
          
            <NavLink to='/' activeStyle>
               Home
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
             Sign up
            </NavLink>
            <NavLink to='/houses' activeStyle>
              Houses
            </NavLink>
            <NavLink to='/user' activeStyle>
              Book With Us
            </NavLink>
            <NavLink to='/owners' activeStyle>
              Owners
            </NavLink>
            <NavLink to='/reviews' activeStyle>
              Reviews
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/logout'>Logout</NavBtnLink>
          </NavBtn>
        </Nav>
        <Bars />
      </>
    );
  };
    
  export default Navbar;