import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from './SideBarElements';

function SideBar({ isOpen, handleToggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={handleToggle}>
      <Icon onClick={handleToggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={handleToggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={handleToggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={handleToggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signUp" onClick={handleToggle}>
            Sing Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signIn">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
