import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from './SideBarElements';
import { navLinks } from '../../utils';

function SideBar({ isOpen, handleToggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={handleToggle}>
      <Icon onClick={handleToggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          {navLinks.map((navLink) => (
            <SideBarLink
              key={navLink.id}
              to={navLink.target}
              onClick={handleToggle}
            >
              {navLink.label}
            </SideBarLink>
          ))}
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
