import Profile from 'components/Profile';
import { Description, PostWrapper } from 'components/Post.style';

const Post = ({ img, description, author }) => {
  return (
    <PostWrapper>
      <Profile author={author} dashboard />
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        repudiandae consectetur libero nulla ullam in fugit. Quas modi qui ad!
      </Description>
      <img src={img} alt="img" />
    </PostWrapper>
  );
};

export default Post;
