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
    InfoPeople,
    ContentMidia,
    CastTitle,
    CastContainer,
    CastCard,
    NameCast,
    NameCharacter,
    TrailerTitle,
    MovieTrailer,
    RecommendationsTitle,
    MovieRecommendationsContainer,
} from "./styles";

import imgCapa from '../../assets/capafilm.svg';
import imgAval from '../../assets/avaliacao.svg';
import imgActor from '../../assets/actor1.svg';
import imgActor2 from '../../assets/actor2.svg';
import imgTrailer from '../../assets/trailerimg.svg';
import image1 from '../../assets/image1.svg'
import { CardMovie } from "../../components/CardMovie";

export function MovieDetails() {
    return (
        <Container>
            <Content>
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
            </Content>
            <ContentMidia>
            <CastTitle>Elenco original</CastTitle>   
            <CastContainer>
                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool/ Wade Wilson</NameCharacter>
                </CastCard>
            
            </CastContainer>
            <TrailerTitle>
                Trailer
            </TrailerTitle>
            <MovieTrailer src={imgTrailer} alt="movie" />
            
            <RecommendationsTitle>Recomendações</RecommendationsTitle>

            <MovieRecommendationsContainer>
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
            </MovieRecommendationsContainer>
            </ContentMidia>

           
        </Container>
    )
}