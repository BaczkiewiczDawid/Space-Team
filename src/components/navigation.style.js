import styled from "styled-components";

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

  @media screen and (min-width: 768px) {
    margin-left: 32vw;
    width: auto;
    margin-top: 1rem;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 25vw;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 22vw;
  }
`;

export const NavigationContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 101vh;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 27vw;
    height: 100vh;
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 17vw;
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


  @media screen and (min-width: 768px) {
    margin-top: 1rem;
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