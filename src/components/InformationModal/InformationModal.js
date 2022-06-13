import { useState } from "react";
import styled, { keyframes } from "styled-components";
import successIcon from 'assets/images/success.svg';
import errorIcon from 'assets/images/error.svg';

const loading = keyframes`
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
  border: 1px solid rgba(250, 250, 250, 0.5);
  width: 15rem;
  height: 3rem;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin-left: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

const Timer = styled.div`
    height: .3rem;
    background-color: ${({ theme }) => theme.green};
    animation: ${loading} 2.5s linear;
`;

const InformationModal = ({ isOpen, icon, message, onClick, success }) => {
  return (
    <Modal isOpen={isOpen} onClick={onClick}>
      <Content success={success}>
        <img src={success === true ? successIcon : errorIcon} alt={icon} />
        <p>{message}</p>
      </Content>
      <Timer />
    </Modal>
  );
};

export default InformationModal;
