import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? "white" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  padding: 1.6rem;

  img {
    width: 12.5rem;
    height: auto;
    z-index: 999;
  }
`;

export const NavigationContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 101vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-top: .7rem;
  text-decoration: none;

  img {
    width: 1.5rem;
    height: auto;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    margin-left: 1rem;
    opacity: 60%;
    font-size: .85rem;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 3rem;
  margin-left: 1.2rem;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6.5rem;
  margin-left: 1.2rem;

  p {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
  }
`;

export const Picture = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
`;

export const Underline = styled.div`
  width: 15rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 1.2rem;
  margin-top: 1.3rem;
`;

export const Logout = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top: 2rem;
    margin-left: 1rem;
    
    img {
        width: 1.5rem;
        height: auto;
    }

    p {
        color :${({ theme }) => theme.colors.error};
        margin-left: 1rem;
        font-size: 1.2rem;
    }
`;