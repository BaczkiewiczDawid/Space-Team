import { useEffect, useState } from "react";
import useAuthenticate from "hooks/useAuthenticate";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Container,
  FriendsListContainer,
  SingleFriend,
  StyledProfile,
} from "components/FriendsList/FriendsList.style";
import { useNavigate } from "react-router-dom";

const FriendsList = () => {
  const [friendsArray, setFriendsArray] = useState([]);
  const data = localStorage.getItem("isAuthenticated");
  const isAuthenticated = JSON.parse(data);

  const navigate = useNavigate();

  useAuthenticate(isAuthenticated);

  useEffect(() => {
    Axios.post("http://localhost:5000/api/friends-list", {
      userData: isAuthenticated.id,
    }).then((response) => {
      setFriendsArray(response.data);
    });
  }, [isAuthenticated.id]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Container>
        <Logo />
        <FriendsListContainer>
          {friendsArray.map((friend) => {
            return (
              <SingleFriend
                onClick={() => navigate(`/profile/${friend.friendid}`)}
              >
                <StyledProfile
                  author={friend.username}
                  picture={friend.picture}
                  dashboard={true}
                />
              </SingleFriend>
            );
          })}
        </FriendsListContainer>
      </Container>
    </Wrapper>
  );
};

export default FriendsList;
