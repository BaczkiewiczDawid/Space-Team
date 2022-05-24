import { useState } from "react";
import logo from "assets/images/logo.svg";
import whiteLogo from 'assets/images/logo-white.svg';
import {
  StyledBurger,
  Nav,
  NavigationContent,
  StyledLink,
  LinksContainer
} from "components/navigation.style";
import homeIcon from "assets/images/home-icon.svg";
import chatIcon from "assets/images/chat-icon.svg";
import bellIcon from "assets/images/bell-icon.svg";
import settingsIcon from "assets/images/settings-icon.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <img src={isOpen ? whiteLogo : logo} alt="space team"></img>
      <StyledBurger onClick={handleMenu} open={isOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {isOpen ? (
        <NavigationContent>
          <LinksContainer>
            <StyledLink to="/">
              <img src={homeIcon} alt="home" />
              <p>Home</p>
            </StyledLink>
            <StyledLink to="/">
              <img src={chatIcon} alt="chat" />
              <p>Chat</p>
            </StyledLink>
            <StyledLink to="/">
              <img src={bellIcon} alt="notifications" />
              <p>Notifications</p>
            </StyledLink>
            <StyledLink to="/">
              <img src={settingsIcon} alt="settings" />
              <p>Settings</p>
            </StyledLink>
          </LinksContainer>
        </NavigationContent>
      ) : null}
    </Nav>
  );
};

export default Navigation;
