import { 
    Container,
    Content,
    MovieCover,
    MovieDetail,
    TitleMovie,
    InfoMovie,
    Assessment,
    ImageAssessment,
    Synopsis,
    TextSynopsis, 
    PeopleMovieContainer,
    PeopleMovieContent,
    TitlePeople,
    InfoPeople
} from "./styles";

import imgCapa from '../../assets/capafilm.svg';
import imgAval from '../../assets/avaliacao.svg';
export function MovieDetails() {
    return (
        <Container>
            {/* <Content> */}

            <MovieCover src={imgCapa} alt="capa do filme" />

            <MovieDetail>
                <TitleMovie>Deadpool (2016)</TitleMovie>
                <InfoMovie>16 anos * 11/02/2016 (BR) * Ação, Aventura, Comédia, Ficção científica * 1h 47m</InfoMovie>

                <Assessment>
                    <ImageAssessment src={imgAval}  />
                    <p>Avaliação dos <br /> usuários</p>
                </Assessment>
                

                <Synopsis>Sinopse</Synopsis>
                <TextSynopsis>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</TextSynopsis>
            
                    <PeopleMovieContainer>
                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                    </PeopleMovieContainer>

            </MovieDetail>    
            {/* </Content> */}
        </Container>
    )
}