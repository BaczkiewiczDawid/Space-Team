import styled from 'styled-components';

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;