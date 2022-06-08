import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Profile from "components/Dashboard/Profile";
import styled from "styled-components";
import Input from "components/Dashboard/Input";
import arrowIcon from "assets/images/arrow-icon.svg";
import Axios from 'axios';

const StyledInput = styled(Input)`
  && {
    padding: 0.8rem 2rem;
    width: 80%;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MessageBox = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 768px) {
      width: 60vw;
  }
`;

const SingleMessageWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction:  ${props => props.activeUser ? 'row-reverse' : 'row'};;
  margin-left: ${props => props.activeUser ? '10rem' : '0'};

  div:nth-child(n+2) {
      background-color: ${props => props.activeUser ? props.theme.colors.purple : 'lightgrey'};
      color: ${props => props.activeUser ? props.theme.colors.white : props.theme.colors.black};
      margin-left: ${props => props.activeUser ? '0' : '2rem'};
      margin-right: ${props => props.activeUser ? '2rem' : '0'};
  }
`;

const MessageContainer = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.2rem 1rem;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
      width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 1rem;
  width: 95vw;

  img {
    background-color: ${({ theme }) => theme.colors.purple};
    padding: 0.6rem;
    border-radius: 100px;
    margin-left: 2rem;
  }

  @media screen and (min-width: 768px) {
      width: 55vw;
  }
`;

const Chat = ({ isAuthenticated }) => {
  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <div>
        <Logo />
        <MessageBox>
          <SingleMessageWrapper activeUser>
            <Profile picture={isAuthenticated.picture} dashboard={true} />
            <MessageContainer>
              <p>asdasd sdajkjd asnskad asd d das</p>
            </MessageContainer>
          </SingleMessageWrapper>
          <SingleMessageWrapper>
            <Profile picture={isAuthenticated.picture} dashboard={true} />
            <MessageContainer>
              <p>asdasd sdajkjd asnskad</p>
            </MessageContainer>
          </SingleMessageWrapper>
          <SingleMessageWrapper activeUser>
            <Profile picture={isAuthenticated.picture} dashboard={true} />
            <MessageContainer>
              <p>asdasd sdajkjd asnskad asd kj dhasjkhdkh asukhd ajkh asd</p>
            </MessageContainer>
          </SingleMessageWrapper>
          <InputWrapper>
            <StyledInput placeholder="Type Your message here..." />
            <img src={arrowIcon} alt="send message" />
          </InputWrapper>
        </MessageBox>
      </div>
    </Wrapper>
  );
};

export default Chat;
