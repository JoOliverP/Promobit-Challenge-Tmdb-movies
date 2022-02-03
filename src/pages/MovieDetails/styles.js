import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    padding: 4.5rem 7rem;
    
    gap: 2.0625rem;
    background: var(--purple);
    height: 37.5rem;

    @media (max-width: 720px) {
       flex-direction: column;
       justify-content: flex-start;
       height: auto;
       padding: 2.125rem 1rem;
    }
`;

// export const Content = styled.div`
//     display: flex;
//     flex-direction: row;
//     /* justify-content: center; */
//     align-items: center;
    
//     gap: 2.0625rem;

//     padding: 4.5rem 7rem;


//     @media (max-width: 720px) {
//         flex-wrap: wrap;
//         padding: 2.125rem 5.375rem;
//     }
// `;

export const MovieCover = styled.img`
    width: 23.9375rem;
    height: 35.875rem;
    @media (max-width: 720px) {
        width: 60%;
        align-self: center;
    }
`;

export const MovieDetail = styled.div`
   max-width:43.5rem;
   margin-bottom: 15px;
`;

export const TitleMovie = styled.h1`
    font-size: 2rem;
`;
export const InfoMovie = styled.p`
    margin-top: 0.5rem;
    font-size: 1.125rem;
`;

export const Assessment = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;

    margin-top: 1rem;
   
    gap: 0.725rem;

    p {
        line-height: 20px;
    }
`;

export const ImageAssessment = styled.img`
    width: 3.8125rem;
    height: 3.8125rem;
`;

export const Synopsis = styled.h1`
    font-size: 1.25rem;
    margin-top: 2.0375rem;
`;

export const TextSynopsis = styled.p`
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    word-break: break-all;
`;

export const PeopleMovieContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 33px;
`;

export const PeopleMovieContent = styled.h1`
    margin-left: 2rem;
`;

export const TitlePeople = styled.h1`
    font-size: 1rem;
`;

export const InfoPeople = styled.p`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
`;