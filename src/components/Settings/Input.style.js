import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label {
    font-size: 1rem;
    color: ${({ theme }) => theme.text}
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(250, 250, 250, 0.2);
    padding: 0.8rem 2rem;
    border-radius: 5px;
    margin-top: 1.3rem;
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
    width: 90vw;
    color: ${({ theme }) => theme.text}
  }

  @media screen and (min-width: 768px) {
    input {
      width: 25vw;
    }

    &:nth-child(even) {
      margin-left: 3rem;
    }
  }

  @media screen and (min-width: 1440px) {
    label {
      font-size: 1.1rem;
    }

    input {
      font-size: 1.1rem;
      width: 19vw;
    }

    &:nth-child(even) {
      margin-left: 6rem;
    }
  }
`;