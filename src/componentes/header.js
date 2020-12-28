import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './headerComponents'

const Header = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
        return(
            <>
              <Nav scrollNav={scrollNav}>
                  <NavbarContainer>
                      <NavLogo to="/" onClick={toggleHome}><i class="fas fa-headphones"></i></NavLogo>
                      <MobileIcon onClick={toggle}>
                          <FaBars />
                      </MobileIcon>
                      <NavMenu>
                          <NavItem>
                              <NavLinks to="about" smooth={true} duration={300} spy={true} exact='true' offset={-40}>About</NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to="musics" smooth={true} duration={300} spy={true} exact='true' offset={-40}>Musics</NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to="premium" smooth={true} duration={300} spy={true} exact='true' offset={-40}>Premium</NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to="advantages" smooth={true} duration={300} spy={true} exact='true' offset={-40}>Advantages</NavLinks>
                          </NavItem>
                      </NavMenu>
                      <NavBtn>
                          <NavBtnLink to={"/signin"}>Sign In</NavBtnLink>
                      </NavBtn>
                  </NavbarContainer>
              </Nav>
            {/* <nav className="header">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn"> <i className="fas fa-bars"></i> </label>
                    <Link to={App}><label className="logo"><i className="fab fa-pied-piper-square"></i></label></Link>
                    <ul>
                        <li><Link to={"/"} smooth={true} duration={500} spy={true}> Home </Link></li>
                        <li><Link to={"/about"} smooth={true} duration={500} spy={true}> About </Link></li>
                        <li><Link to={"/musics"} smooth={true} duration={500} spy={true}> Musics </Link></li>
                        <li><Link to={"/formulario"} smooth={true} duration={500} spy={true}> Login </Link></li>
                    </ul>
                </nav> */}
            </>

        );
}

export default Header;