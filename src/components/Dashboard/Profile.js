import { StyledProfile, Picture } from 'components/Dashboard/Profile.style';

const Profile = ({ dashboard, author, search }) => {
  return (
    <StyledProfile dashboard={dashboard} search={search}>
      <Picture dashboard={dashboard} />
      <p>{author}</p>
    </StyledProfile>
  );
};

export default Profile;
