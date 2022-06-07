import { useEffect, useState } from "react";
import useAuthenticate from "hooks/useAuthenticate";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import styled from "styled-components";
import Profile from "components/Dashboard/Profile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const FriendsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const SingleFriend = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  width: 95vw;
  cursor: pointer;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);

  &:hover {
    background-color: #ebebeb;
    transition: 0.25s;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 30vw;
    margin-top: 2rem;
  }
`;

const StyledProfile = styled(Profile)`
  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const FriendsList = () => {
  const [friendsArray, setFriendsArray] = useState([]);
  const data = localStorage.getItem("isAuthenticated");
  const isAuthenticated = JSON.parse(data);

  useAuthenticate(isAuthenticated);

  useEffect(() => {
    Axios.post("http://localhost:5000/api/friends-list", {
      userData: isAuthenticated.id,
    }).then((response) => {
      setFriendsArray(response.data);
    });
  }, [isAuthenticated.id]);

  console.log(friendsArray);

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
              <SingleFriend>
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
