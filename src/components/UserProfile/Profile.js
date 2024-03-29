import { useState, useEffect } from "react";
import {
  StyledProfile,
  Picture,
  Details,
  Container,
  Button,
} from "components/UserProfile/Profile.style";
import editIcon from "assets/images/edit-icon.svg";
import editIconWhite from 'assets/images/edit-icon-white.svg';
import plusIcon from "assets/images/plus-icon.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Profile = ({ isAuthenticated, searchedUser }) => {
  const [isFriend, setIsFriend] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/settings", { replace: true });
  };

  const userData = {
    userID: isAuthenticated.id,
    username: searchedUser.username,
    friendID: searchedUser.id,
  };

  const handleAddFriend = () => {
    if (!isFriend) {
      Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/add-friend", {
        userData: userData,
      });
    }
  };

  useEffect(() => {
    Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/friends-list", {
      userData: isAuthenticated.id,
    }).then((response) => {
      setFriendsList(response.data);
      setIsFriend(
        friendsList.find((el) => el.id === searchedUser.id) !== undefined
      );
    });
  }, [isAuthenticated.id, searchedUser.id]);

  const theme = localStorage.getItem('theme');

  return (
    <StyledProfile>
      <Picture>
        <img src={searchedUser.picture} alt="profile" />
      </Picture>
      <Details>
        <Container>
          <h1>{searchedUser.username}</h1>
          {isAuthenticated.loggedUser === searchedUser.username ? (
            <img
              src={theme === 'dark' ? editIconWhite : editIcon}
              alt="edit profile"
              onClick={handleEditProfile}
            />
          ) : null}
        </Container>
        {!isFriend && (
          <Button onClick={handleAddFriend}>
            <img src={plusIcon} alt="plus icon" />
            <p>Add to friends...</p>
          </Button>
        )}
      </Details>
    </StyledProfile>
  );
};

export default Profile;
