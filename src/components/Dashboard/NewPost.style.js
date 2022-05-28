import styled from 'styled-components';

export const Input = styled.input`
    width: 85vw;
    padding: 1.5rem 2rem;
    border-radius: 15px;
    border: 1px solid rgba(42, 42, 42, 0.2);
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
    font-size: .95rem;
    margin: auto;

    @media screen and (min-width: 768px) {
        width: 50vw;
        margin-top: 3rem;
    }

    @media screen and (min-width: 1080px) {
        width: 40vw;
    }

    @media screen and (min-width: 1440px) {
        width: 30vw;
    }
`;