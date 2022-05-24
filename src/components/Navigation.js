import { useState } from "react";
import logo from "assets/images/logo.svg";
import whiteLogo from "assets/images/logo-white.svg";
import {
  StyledBurger,
  Nav,
  NavigationContent,
  StyledLink,
  LinksContainer,
  Profile,
  Underline,
  Picture,
  Logout,
} from "components/Navigation.style";
import dashboardIcon from "assets/images/grid.svg";
import chatIcon from "assets/images/message-square.svg";
import bellIcon from "assets/images/bell.svg";
import settingsIcon from "assets/images/settings.svg";
import usersIcon from "assets/images/users.svg";
import logoutIcon from "assets/images/log-out.svg";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
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
          <Profile>
            <Picture></Picture>
            <p>Jhon Doe</p>
          </Profile>
          <Underline />
          <LinksContainer>
            <StyledLink to="/">
              <img src={dashboardIcon} alt="home" />
              <p>Home</p>
            </StyledLink>
            <StyledLink to="/">
              <img src={usersIcon} alt="friends" />
              <p>Friends</p>
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
          <Logout onClick={handleLogout}>
            <img src={logoutIcon} alt="logout"></img>
            <p>Log out</p>
          </Logout>
        </NavigationContent>
      ) : null}
    </Nav>
  );
};

export default Navigation;
