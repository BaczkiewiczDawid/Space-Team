import {
  SingleFriend,
  StyledProfile,
  IconsWrapper,
} from "components/FriendsList/Friend.style";
import { useNavigate } from "react-router-dom";
import trashIcon from "assets/images/trash-icon.svg";
import chatIcon from "assets/images/message-square-black.svg";
import Axios from 'axios';

const Friend = ({ friend }) => {
  const navigate = useNavigate();

  const handleShowProfile = () => {
    navigate(`/profile/${friend.friendid}`);
  };

  const handleDeleteFriend = () => {
    console.log(friend.friendid);

    Axios.post('http://localhost:5000/api/delete-friend', {
      userData: friend.friendid
    })
  };

  return (
    <SingleFriend >
      <StyledProfile
        author={friend.username}
        picture={friend.picture}
        dashboard={true}
        onClick={handleShowProfile}
      />
      <IconsWrapper>
        <img src={chatIcon} alt="chat with friend" />
        <img src={trashIcon} alt="delete friend" onClick={handleDeleteFriend} />
      </IconsWrapper>
    </SingleFriend>
  );
};

export default Friend;
