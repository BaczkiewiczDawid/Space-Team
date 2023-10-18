import { useState, useEffect } from "react";
import { Wrapper, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import Axios from "axios";
import Loading from 'components/Dashboard/Loading';

const PostsList = ({ userID }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://space-team-server-5628bd799a00.herokuapp.com/posts").then((response) => {
      setPosts(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      <PostsContainer>
        {isLoading && <Loading />}
        {posts.map((el, index) => {
          return (
            <Post
              key={index}
              postID={el.postID}
              author={el.username}
              description={el.description}
              img={el.img}
              picture={el.picture}
              userID={userID}
            />
          );
        })}
      </PostsContainer>
    </Wrapper>
  );
};

export default PostsList;
