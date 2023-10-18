import { useState } from "react";
import Button from "components/Settings/Button";
import {
  ProfileWrapper,
  StyledProfile,
} from "components/Settings/Profile.style";
import Modal from "components/Dashboard/Modal";
import Axios from "axios";
import InformationModal from 'components/InformationModal/InformationModal';

const Profile = ({ loggedUserData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleImageURL = (e) => {
    setImageURL(e.target.value);
  };

  const handleChangeProfilePicture = () => {
    if (imageURL !== "") {
      Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/change-picture", {
        userData: {
          picture: imageURL,
          user: loggedUserData.id,
        },
      }).then((response) => {
        setIsSuccess(true)

      }).catch((err) => {
        setIsSuccess(false);
      })

      setIsInformationModalOpen(true);
      setIsOpen(false);

      setTimeout(() => {
          setIsInformationModalOpen(false);
      }, 2500);
    }
  };

  const handleCloseInformationModal = () => {
    setIsInformationModalOpen(false);
  }

  return (
    <ProfileWrapper>
      <InformationModal isOpen={isInformationModalOpen} onClick={handleCloseInformationModal} success={isSuccess} message={isSuccess === true ? 'Picture changed successfully' : 'Something went wrong'} />
      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          profile={true}
          onChange={handleImageURL}
          onClick={handleChangeProfilePicture}
          title="Change Your profile picture"
        />
      ) : null}
      <StyledProfile>
        <img src={loggedUserData.picture} alt="" />
        <div>
          <p>{loggedUserData.username}</p>
          <p>{loggedUserData.email}</p>
        </div>
      </StyledProfile>
      <Button onClick={handleOpenModal} value="Upload now" />
    </ProfileWrapper>
  );
};

export default Profile;
