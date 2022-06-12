import {
  ModalWrapper,
  ModalContent,
  InputWrapper,
} from "components/Dashboard/Modal.style";
import arrowIcon from "assets/images/arrow-icon.svg";
import Input from "components/Dashboard/Input";

const Modal = ({
  isModalOpen,
  postDescription,
  title,
  onClick,
  onChange,
}) => {
  return (
    <ModalWrapper isModalOpen={isModalOpen}>
      <ModalContent>
        <h1>{title}</h1>
        <p>{postDescription}</p>
        <InputWrapper>
          <Input
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
