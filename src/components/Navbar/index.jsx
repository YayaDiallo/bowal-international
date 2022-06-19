import React, { useState, useEffect, useMemo } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
import { navLinks } from '../../utils';

function Navbar({ handleToggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const handleChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleChangeNav);
  }, []);

  const handleToggleHome = () => {
    scroll.scrollToTop();
  };

  const color = useMemo(() => ({ color: '#fff' }), []);

  return (
    <IconContext.Provider value={color}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={handleToggleHome}>
            Bowal
          </NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navLinks.map((navLink) => (
              <NavItem key={navLink.id}>
                <NavLinks
                  to={navLink.target}
                  smooth
                  duration={500}
                  spy
                  exact="true"
                  offset={-80}
                >
                  {navLink.label}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
