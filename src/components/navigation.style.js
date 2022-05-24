import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    background-color: ${props => props.open ? 'white' : 'black'};
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
    padding: 1.2rem;

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
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    margin-top: 1.2rem;

    img {
        width: 1.5rem;
        height: auto;
    }

    p {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 300;
        margin-left: 1rem;
    }
`;

export const LinksContainer = styled.div`
    margin-top: 7rem;
    margin-left: 1.2rem;
`;