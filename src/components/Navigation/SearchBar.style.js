import styled from "styled-components";
import SearchIcon from "assets/images/search-icon.svg";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  width: 80%;
  margin-top: 1.5rem;
  align-items: center;

  input {
    background: url(${SearchIcon}) no-repeat left;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    color: black;
    padding: 1rem 0rem 1rem 2rem;
  }
`;
