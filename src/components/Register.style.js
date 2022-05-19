import styled from 'styled-components';

export const Big = styled.div`
  display: flex;
  flex-direction: column; 

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    width: 25vw;
    margin-left: 20vw;
  }
`;

export const Logo = styled.a`
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  input {
    width: 75vw;
    border: none;
    border-bottom: 1px solid #5a5a5a;
    font-weight: 300;
    font-size: 1rem;

    &:nth-child(n + 2) {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    input {
      width: 25vw;
      font-size: .8rem;
    }
  }

  @media screen and (min-width: 1080px) {
    margin-top: 6rem;

    input {
      font-size: 1.1rem;

      &:nth-child(n+2) {
        margin-top: 2.2rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    input {
      &:nth-child(n+2) {
        margin-top: 3rem;
      }
    }
  }
`;

export const StyledButton = styled.button`
  width: 75vw;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: none;
  border-radius: 10px;
  margin-top: 3rem;
  font-size: 1.15rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 25vw;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1.4rem;
    padding: 0.7rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 5rem;
  }
`;

export const StyledLink = styled.a`
  margin-top: 1.3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.purple};
  }

  @media screen and (min-width: 768px) {
    font-size: .7rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 55vw;
  height: 5px;
  background-color: #c4c4c4;
  border-radius: 100px;
  margin-top: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 25vw;
  }

  @media screen and (min-width: 1080px) {
    width: 17vw;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 1440px) {
    a {
      font-size: 1.4rem;
      padding: .5rem 2rem;
    }
  }
`;

export const StyledBackground = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 100vh;
    width: auto;
  }
`;