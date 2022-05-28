import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-top: 2rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 14rem;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 17rem;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 3rem;
  }
`;
