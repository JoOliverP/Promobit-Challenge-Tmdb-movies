import styled from "styled-components";

export const Container = styled.div`
    background: var(--purple);
    /* height: 28rem; */
`;
export const Content = styled.div`
    max-width: 1033px;
    margin: 0 auto;
    /* background: #fff; */
    text-align: center;
    padding: 5.3rem 0;
    h1 {
        font-size: 3rem;
        color: var(--white);
    }

    p {
        font-size: 0.875rem;
        color: var(--white);
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }
`;

export const FilterContainer = styled.div`
    
`


export const GenreButton = styled.button`
    height: 2.5rem;
    padding: 0.5rem 1rem;
    
    margin-left: 0.75rem;
    margin-bottom: 0.75rem;

    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    
    color: var(--gray-700);

`;



