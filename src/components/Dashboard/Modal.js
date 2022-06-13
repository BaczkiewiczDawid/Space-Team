import { useRef, useEffect } from "react";
import {
  ModalWrapper,
  ModalContent,
  InputWrapper,
  StyledInput,
} from "components/Dashboard/Modal.style";
import arrowIcon from "assets/images/arrow-icon.svg";

const Modal = ({ postDescription, title, onClick, onChange, setIsOpen }) => {
  const modalRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(modalRef);

  return (
    <ModalWrapper>
      <ModalContent ref={modalRef}>
        <h1>{title}</h1>
        <p>{postDescription}</p>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Paste image url..."
            onChange={onChange}
          />
          <img
            src={arrowIcon}
            alt="arrow-right add new post"
            onClick={onClick}
          />
        </InputWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
