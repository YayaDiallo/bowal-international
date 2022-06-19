import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
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
            Qui sommes-nous ?
          </SideBarLink>
          <SideBarLink to="services" onClick={handleToggle}>
            Services
          </SideBarLink>
          <SideBarLink to="products" onClick={handleToggle}>
            Produits
          </SideBarLink>
          <SideBarLink to="providers" onClick={handleToggle}>
            Fournisseurs
          </SideBarLink>
          <SideBarLink to="commitments" onClick={handleToggle}>
            Engagements
          </SideBarLink>
          <SideBarLink to="signUp" onClick={handleToggle}>
            Contactez-nous
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
