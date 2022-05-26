import Navigation from 'components/Navigation';
import PostsList from 'components/PostsList';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <Navigation />
            <PostsList />
        </DashboardWrapper>
    )
}

export default Dashboard