import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    /* align-items: center; */
    margin: 1.875rem 7rem;

    gap: 2rem;

    @media (max-width: 720px) {
        justify-content: center;
        margin: 2rem 1rem;
        gap: 1rem;
    }
`;

export const CardMovie = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleMovie = styled.strong`
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--black);
`;

export const DateMovie = styled.p`
    margin-top: 0.3rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: var(--gray);
`;