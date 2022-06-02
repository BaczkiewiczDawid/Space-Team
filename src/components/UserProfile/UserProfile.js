import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import Profile from 'components/UserProfile/Profile';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: flex-start;
  margin-left: 2rem;

  @media screen and (min-width: 768px) {
    align-items: center;
    margin-left: none;
  }
`;



const UserProfile = ({ isAuthenticated }) => {
  const [searchedUser, setSearchedUser] = useState("");
  let { userId } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    if (
      isAuthenticated.authenticated === false ||
      isAuthenticated.loggedUser === undefined
    ) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    Axios.post("http://localhost:5000/api/get-user", {
      userData: userId,
    }).then((response) => {
      setSearchedUser(response.data[0]);
    });
  }, [userId]);

  return (
    <Wrapper>
      <Navigation loggedUser={isAuthenticated.loggedUser} />
      <ProfileContent>
        <Profile isAuthenticated={isAuthenticated} searchedUser={searchedUser} />
      </ProfileContent>
    </Wrapper>
  );
};

export default UserProfile;
