import { StyledProfile, Picture } from 'components/Dashboard/Profile.style';

const Profile = ({ dashboard, author }) => {
  return (
    <StyledProfile dashboard={dashboard}>
      <Picture dashboard={dashboard} />
      <p>{author}</p>
    </StyledProfile>
  );
};

export default Profile;