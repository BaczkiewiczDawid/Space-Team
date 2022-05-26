import Profile from "components/Profile";
import logo from "assets/images/logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const Logo = styled.img`
  margin-top: 2rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 14rem;
    height: auto;
  }

  @media screen and (min-width: 768px) {
      width: 17rem;
  }

  @media screen and (min-width: 1080px) {
      margin-top: 3rem;
  }
`;

const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const Post = styled.article`
  margin-top: 1rem;
  width: 85vw;
  border-radius: 10px;
  padding: 1.6rem;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);

  img {
    width: 70%;
    height: auto;
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
      width: 50vw;

      &:nth-child(n+1) {
          margin-top: 3rem;
      }

      &:nth-child(n+2) {
          margin-top: 2.5rem;
      }
  }

  @media screen and (min-width: 1080px) {
      width: 40vw;
  }

  @media screen and (min-width: 1440px) {
      width: 30vw;
  }
`;

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    letter-spacing: .05rem;
`;

const PostsList = () => {
  const img =
    "https://images.unsplash.com/photo-1653508818803-77b4bdfaba32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870";

  return (
    <Wrapper>
      <Logo src={logo} alt="space team" />
      <PostsContainer>
        <Post>
          <Profile dashboard />
          <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repudiandae consectetur libero nulla ullam in fugit. Quas modi qui ad!</Description>
          <img src={img} alt="img" />
        </Post>
        <Post>
          <Profile dashboard />
          <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repudiandae consectetur libero nulla ullam in fugit. Quas modi qui ad!</Description>
          <img src={img} alt="img" />
        </Post>
        <Post>
          <Profile dashboard />
          <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repudiandae consectetur libero nulla ullam in fugit. Quas modi qui ad!</Description>
          <img src={img} alt="img" />
        </Post>
      </PostsContainer>
    </Wrapper>
  );
};

export default PostsList;
