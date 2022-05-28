
import { Wrapper, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import postsArray from "data/PostsList";

const PostsList = () => {
  return (
    <Wrapper>
      <PostsContainer>
        {postsArray.map((el) => {
          return (
            <Post
              author={el.author}
              description={el.description}
              img={el.img}
            />
          );
        })}
      </PostsContainer>
    </Wrapper>
  );
};

export default PostsList;
