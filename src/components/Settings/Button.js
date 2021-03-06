import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 0.6rem 2.3rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    margin-left: ${(props) => (props.secondary ? "0" : "3rem")};
  }

  &:hover {
    transition: .5s; 
    box-shadow: inset 12rem 0 0 0 ${({ theme }) => theme.darkPurple};
  }
`;

const Button = ({ value, secondary, onClick, type }) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick} type={type}>
      {value}
    </StyledButton>
  );
};

export default Button;
