import styled from 'styled-components';

export const StyledProfile = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.div`
  width: 7rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 100px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const Container = styled.div`
  display: flex;

  h2 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.black};
  }

  img {
    margin-bottom: 0.4rem;
    margin-left: 3rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border: none;
  padding: 0rem 3rem;
  cursor: pointer;
  position: relative;
  border-radius: 5px;

  img {
    position: absolute;
    left: 1rem;
    width: 10%;
  }

  p {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 1rem;
    font-size: 0.75rem;
  }
`;