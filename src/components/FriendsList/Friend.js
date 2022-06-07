import {
  SingleFriend,
  StyledProfile,
} from "components/FriendsList/Friend.style";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <SingleFriend onClick={() => navigate(`/profile/${friend.friendid}`)}>
      <StyledProfile
        author={friend.username}
        picture={friend.picture}
        dashboard={true}
      />
    </SingleFriend>
  );
};

export default Friend;