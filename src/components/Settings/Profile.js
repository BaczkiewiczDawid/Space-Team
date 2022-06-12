import { useState } from "react";
import Button from "components/Settings/Button";
import {
  ProfileWrapper,
  StyledProfile,
} from "components/Settings/Profile.style";
import Modal from "components/Dashboard/Modal";
import Axios from "axios";

const Profile = ({ loggedUserData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleImageURL = (e) => {
    setImageURL(e.target.value);
  };

  const handleChangeProfilePicture = () => {
    if (imageURL !== "") {
      Axios.post("http://localhost:5000/api/change-picture", {
        userData: {
          picture: imageURL,
          user: loggedUserData.id,
        },
      });

      setIsOpen(false);
    }
  };

  return (
    <ProfileWrapper>
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
