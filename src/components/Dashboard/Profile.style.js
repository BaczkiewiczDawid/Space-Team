import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${props => props.dashboard ? '0' : '1.2rem'};
  z-index: 4;
  margin-top: ${props => props.search ? '.8rem' : '0'};

  @media screen and (min-width: 768px) {
    margin-top: ${props => props.dashboard ? '0' : '1rem'};
  }

  @media screen and (min-width: 1080px) {
    margin-top: ${props => props.dashboard ? '0' : '2rem'};
  }
`;

export const Name = styled(Link)`
  margin-left: ${props => props.dashboard ? '1.5rem' : '2rem'};
  color: ${props => props.dashboard ? props.theme.text : props.theme.navigationText};
  font-size: 1.1rem;
  text-decoration: none;
`;

export const Picture = styled(Link)`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 100px;
  position: relative;
`;

export const StyledProfilePicture = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
`;