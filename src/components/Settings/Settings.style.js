import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    margin-top: 2rem;
    font-size: 1.8rem;
`;

export const Container = styled.div`
    margin-left: 1rem;
`;

export const SettingsContent = styled.section`
    h3 {
        font-weight: 300;
        margin-top: 4rem;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
    flex-wrap: wrap;

    img {
        width: 6rem;
        height: 6rem;
        border-radius: 100px;        
    }

    div {
        flex-direction: column;
        margin-left: 2rem;
    
        p:nth-child(n+1) {
            font-weight: 700;
        }

        p:nth-child(n+2) {
            font-weight: 300;
        }
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: .6rem 2.3rem;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
        margin-left: 3rem;
    }
`;

export const ProfileWrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`;