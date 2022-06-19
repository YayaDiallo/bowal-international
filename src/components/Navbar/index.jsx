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
            <NavItem>
              <NavLinks
                to="about"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Qui sommes-nous ?
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="products"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Produits
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="providers"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Fournisseurs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="commitments"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Engagements
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signUp"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Contactez-nous
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
