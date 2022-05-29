import { useState, useEffect } from "react";
import { Wrapper, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import Axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  console.log(posts);

  return (
    <Wrapper>
      <PostsContainer>
        {posts.map((el) => {
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
