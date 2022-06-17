import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import Profile from "components/UserProfile/Profile";
import Post from "components/Dashboard/Post";
import useAuthenticate from "hooks/useAuthenticate";
import {
  Wrapper,
  ProfileContent,
} from "components/UserProfile/UserProfile.style";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";
import Loading from 'components/Dashboard/Loading';

const UserProfile = () => {
  const [searchedUser, setSearchedUser] = useState("");
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { userId } = useParams();

  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/get-user", {
      userData: userId,
    }).then((response) => {
      setSearchedUser(response.data[0]);
      setIsLoading(false);
    });
  }, [userId]);

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/user-posts", {
      userData: searchedUser.id,
    }).then((response) => {
      setPostsList(response.data);
    });
  }, [searchedUser.id]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <ProfileContent>
        <Profile
          isAuthenticated={isAuthenticated}
          searchedUser={searchedUser}
        />
        {isLoading && <Loading />}
        <h3>Recent posts</h3>
        {postsList &&
          postsList.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.username}
                picture={post.picture}
                description={post.description}
                img={post.img}
              />
            );
          })}
      </ProfileContent>
    </Wrapper>
  );
};

export default UserProfile;
