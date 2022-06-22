import { StyledProfile, Picture, StyledProfilePicture, Name } from 'components/Dashboard/Profile.style';
import useLocalStorageAuthenticate from 'hooks/useLocalStorageAuthenticate';

const Profile = ({ dashboard, author, search, picture, className, onClick }) => {
  const isAuthenticated = useLocalStorageAuthenticate();

  return (
    <StyledProfile dashboard={dashboard} search={search} className={className} onClick={onClick}>
      <Picture dashboard={dashboard} to={`/profile/${isAuthenticated.id}`}>
        <StyledProfilePicture src={picture} alt="profile" />
      </Picture>
      {author && <Name to={`/profile/${isAuthenticated.id}`}np dashboard={dashboard}>{author}</Name>}
    </StyledProfile>
  );
};

export default Profile;
