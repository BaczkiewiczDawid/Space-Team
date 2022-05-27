import Navigation from 'components/Navigation/Navigation';
import PostsList from 'components/Dashboard/PostsList';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const Dashboard = ({ loggedUser }) => {
    return (
        <DashboardWrapper>
            <Navigation loggedUser={loggedUser} />
            <PostsList />
        </DashboardWrapper>
    )
}

export default Dashboard