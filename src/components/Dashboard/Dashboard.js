import { useEffect } from 'react';
import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import {
  DashboardWrapper,
  Wrapper,
} from "components/Dashboard/Dashboard.style";
import { useNavigate } from "react-router-dom";
import Logo from 'components/Dashboard/Logo';

const Dashboard = ({ isAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated.authenticated === false || isAuthenticated.loggedUser === undefined) {
      navigate('/login', {replace: true})
    }
  }, [isAuthenticated, navigate])

  console.log(isAuthenticated.picture)

    return (
      <DashboardWrapper>
        <Navigation picture={isAuthenticated.picture} loggedUser={isAuthenticated.loggedUser} />
        <Wrapper>
          <Logo />
          <NewPost loggedUser={isAuthenticated.loggedUser} userID={isAuthenticated.id} />
          <PostsList />
        </Wrapper>
      </DashboardWrapper>
    );
};

export default Dashboard;
