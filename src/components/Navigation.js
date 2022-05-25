import { useState, useEffect } from "react";
import logo from "assets/images/logo.svg";
import whiteLogo from "assets/images/logo-white.svg";
import {
  Nav,
  NavigationContent,
  LinksContainer,
  Profile,
  Underline,
  Picture,
} from "components/Navigation.style";
import dashboardIcon from "assets/images/grid.svg";
import chatIcon from "assets/images/message-square.svg";
import bellIcon from "assets/images/bell.svg";
import settingsIcon from "assets/images/settings.svg";
import usersIcon from "assets/images/users.svg";
import NavLink from "components/NavLink";
import BurgerMenu from 'components/BurgerMenu';
import Logout from 'components/Logout';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const iconsList = [
    {
      icon: dashboardIcon,
      alt: "dashboard",
      text: "Dashboard",
      href: "/",
    },
    {
      icon: chatIcon,
      alt: "chat",
      text: "Chat",
      href: "/chats",
    },
    {
      icon: bellIcon,
      alt: "notifications",
      text: "Notifications",
      href: "/notifications",
    },
    {
      icon: settingsIcon,
      alt: "settings",
      text: "Settings",
      href: "/settings",
    },
    {
      icon: usersIcon,
      alt: "friends",
      text: "Friends",
      href: "/friends",
    },
  ];

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    console.log(isMobile);
    isMobile ? setIsOpen(false) : setIsOpen(true);
  }, [isMobile]);

  return (
    <>
      <Nav>
        <img src={isOpen && isMobile ? whiteLogo : logo} alt="space team"></img>
        <BurgerMenu isOpen={isOpen} handleMenu={handleMenu} />
      </Nav>
      {isOpen ? (
        <NavigationContent>
          <Profile>
            <Picture></Picture>
            <p>Jhon Doe</p>
          </Profile>
          <Underline />
          <LinksContainer>
            {iconsList.map((el) => {
              return (
                <NavLink
                  href={el.href}
                  icon={el.icon}
                  alt={el.alt}
                  text={el.text}
                  active={el.href === location.pathname}
                />
              );
            })}
          </LinksContainer>
          <Logout />
        </NavigationContent>
      ) : null}
    </>
  );
};

export default Navigation;
