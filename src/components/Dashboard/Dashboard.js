import { useEffect } from 'react';
import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import {
  DashboardWrapper,
  Wrapper,
  Logo,
} from "components/Dashboard/Dashboard.style";
import logo from "assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ isAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated.authenticated === false || isAuthenticated.loggedUser === undefined) {
      navigate('/login', {replace: true})
    }
  }, [isAuthenticated, navigate])

    return (
      <DashboardWrapper>
        <Navigation loggedUser={isAuthenticated.loggedUser} />
        <Wrapper>
          <Logo src={logo} alt="space team" />
          <NewPost loggedUser={isAuthenticated.loggedUser} />
          <PostsList />
        </Wrapper>
      </DashboardWrapper>
    );
};

export default Dashboard;
