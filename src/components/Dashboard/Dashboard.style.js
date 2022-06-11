import styled from "styled-components";

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

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      background-color: #2196f3;
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  background-color: ${(props) =>
    props.isChecked ? props.theme.blue : props.theme.grey};

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    -webkit-transform: translateX(
      ${(props) => (props.isChecked ? "26px" : "0")}
    );
    -ms-transform: translateX(${(props) => (props.isChecked ? "26px" : "0")});
    transform: translateX(${(props) => (props.isChecked ? "26px" : "0")});
  }
`;
